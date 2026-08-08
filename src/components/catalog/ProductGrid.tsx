import type { Product } from '../../types/product';
import { ProductCard } from './ProductCard';
import { PackageX, Sparkles } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onResetFilters?: () => void;
}

export const ProductGrid = ({
  products,
  onQuickView,
  onResetFilters
}: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '4rem 1rem',
          backgroundColor: 'white',
          borderRadius: 'var(--radius-lg)',
          border: '1px dashed var(--border-color)',
          margin: '2rem 0'
        }}
      >
        <PackageX size={48} color="var(--primary-rose)" style={{ marginBottom: '1rem' }} />
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          No Products Found
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          We couldn't find any products matching your search criteria or Product ID.
        </p>
        {onResetFilters && (
          <button onClick={onResetFilters} className="btn-primary">
            <Sparkles size={18} />
            <span>Show All Products</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onQuickView={onQuickView} />
      ))}
    </div>
  );
};
