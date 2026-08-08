import type { Product } from '../types/product';
import { STORE_CONFIG } from '../config/store.config';

export interface OrderOptions {
  product: Product;
  selectedVariants: Record<string, string>;
  quantity: number;
  customNotes?: string;
}

export function generateWhatsAppLink({
  product,
  selectedVariants,
  quantity,
  customNotes
}: OrderOptions): string {
  const number = STORE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');

  let message = `Hello! I would like to order this product from your website:\n\n`;
  message += `📦 *Product ID:* ${product.productId}\n`;
  message += `🏷️ *Product Name:* ${product.name}\n`;
  message += `💰 *Price:* ₹${product.price}\n`;

  // Append variants (e.g. Size, Color, Pack Size)
  Object.entries(selectedVariants).forEach(([key, val]) => {
    if (val) {
      let icon = '⚙️';
      if (key.toLowerCase().includes('size')) icon = '📏';
      if (key.toLowerCase().includes('color')) icon = '🎨';
      if (key.toLowerCase().includes('pack')) icon = '⚖️';
      message += `${icon} *${key}:* ${val}\n`;
    }
  });

  message += `🔢 *Quantity:* ${quantity}\n`;
  message += `💵 *Estimated Subtotal:* ₹${product.price * quantity}\n`;

  if (customNotes && customNotes.trim()) {
    message += `📝 *Notes:* ${customNotes.trim()}\n`;
  }

  message += `\nPlease confirm product availability, total price including delivery, and payment options. Thank you!`;

  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedText}`;
}

export function openWhatsAppOrder(options: OrderOptions): void {
  const link = generateWhatsAppLink(options);
  window.open(link, '_blank', 'noopener,noreferrer');
}
