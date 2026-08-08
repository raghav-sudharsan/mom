import type { Product } from '../../types/product';
import { getStockStatusLabel, formatCurrency } from '../../utils/formatters';
import { openWhatsAppOrder } from '../../utils/whatsapp';
import { MessageCircle, Eye, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  const stockInfo = getStockStatusLabel(product.stockStatus);
  const isBotanical = product.isNaturalProduct || product.categoryId === 'natural-care';

  // Calculate discount percentage if original price exists
  const discountPercent = product.originalPrice && product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleQuickWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Default first variant options if available
    const defaultVariants: Record<string, string> = {};
    if (product.variants && product.variants.length > 0) {
      product.variants.forEach((v) => {
        if (v.options && v.options.length > 0) {
          defaultVariants[v.name] = v.options[0];
        }
      });
    }
    openWhatsAppOrder({
      product,
      selectedVariants: defaultVariants,
      quantity: 1
    });
  };

  return (
    <div className="product-card">
      {/* Product Image Wrap */}
      <div className="product-card-image-wrap" onClick={() => onQuickView(product)}>
        <img
          src={product.images[0] || 'https://via.placeholder.com/400x400?text=Product+Image'}
          alt={product.name}
          className="product-card-image"
          loading="lazy"
        />

        {/* Badges Overlay */}
        <div className="product-card-badges">
          <span className={`badge ${stockInfo.badgeClass}`}>
            {stockInfo.label}
          </span>
          {discountPercent > 0 && (
            <span className="badge badge-gold">
              {discountPercent}% OFF
            </span>
          )}
          {isBotanical && (
            <span className="badge badge-botanical" style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
              <Sparkles size={10} /> Handmade
            </span>
          )}
        </div>

        {/* Clear Item Code Badge for non-technical customers */}
        <div className="product-card-pid">
          <span className="product-id-badge" title="Unique Product Code">
            Code: {product.productId}
          </span>
        </div>
      </div>

      {/* Product Body */}
      <div className="product-card-body">
        <div className={`product-card-category ${isBotanical ? 'botanical' : ''}`}>
          {product.categoryId.replace('-', ' ')}
        </div>

        <h3 className="product-card-title" onClick={() => onQuickView(product)}>
          {product.name}
        </h3>

        <p className="product-card-desc">
          {product.shortDescription}
        </p>

        {/* Footer Actions */}
        <div className="product-card-footer">
          <div className="product-card-price-row">
            <span className="price-current">{formatCurrency(product.price)}</span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="price-original">{formatCurrency(product.originalPrice)}</span>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
            <button
              onClick={() => onQuickView(product)}
              className="btn-secondary"
              style={{ minHeight: '42px', padding: '0.4rem 0.5rem', fontSize: '0.82rem' }}
            >
              <Eye size={15} />
              <span>Details</span>
            </button>

            <button
              onClick={handleQuickWhatsApp}
              disabled={!stockInfo.isOrderable}
              className="btn-whatsapp btn-whatsapp-sm"
              style={{
                opacity: stockInfo.isOrderable ? 1 : 0.5,
                cursor: stockInfo.isOrderable ? 'pointer' : 'not-allowed',
                width: '100%',
                minHeight: '42px'
              }}
              title={stockInfo.isOrderable ? 'Order on WhatsApp' : 'Currently Unavailable'}
            >
              <MessageCircle size={15} />
              <span>Order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
