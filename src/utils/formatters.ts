import type { StockStatus } from '../types/product';

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

export function getStockStatusLabel(status: StockStatus): {
  label: string;
  badgeClass: string;
  isOrderable: boolean;
} {
  switch (status) {
    case 'in_stock':
      return { label: 'In Stock', badgeClass: 'badge-success', isOrderable: true };
    case 'limited_stock':
      return { label: 'Limited Stock', badgeClass: 'badge-warning', isOrderable: true };
    case 'out_of_stock':
      return { label: 'Out of Stock', badgeClass: 'badge-danger', isOrderable: false };
    case 'coming_soon':
      return { label: 'Coming Soon', badgeClass: 'badge-info', isOrderable: false };
    default:
      return { label: 'Available', badgeClass: 'badge-success', isOrderable: true };
  }
}
