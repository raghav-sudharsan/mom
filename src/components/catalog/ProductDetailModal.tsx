import { useState, useEffect } from 'react';
import type { Product } from '../../types/product';
import { getStockStatusLabel, formatCurrency } from '../../utils/formatters';
import { openWhatsAppOrder } from '../../utils/whatsapp';
import { X, MessageCircle, Leaf, Check, Plus, Minus } from 'lucide-react';
import { STORE_CONFIG } from '../../config/store.config';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal = ({
  product,
  onClose
}: ProductDetailModalProps) => {
  if (!product) return null;

  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState<number>(1);
  const [customNotes, setCustomNotes] = useState<string>('');

  // Initialize variants when product changes
  useEffect(() => {
    if (product) {
      setSelectedImageIndex(0);
      setQuantity(1);
      setCustomNotes('');
      const initialVars: Record<string, string> = {};
      if (product.variants && product.variants.length > 0) {
        product.variants.forEach((v) => {
          if (v.options && v.options.length > 0) {
            initialVars[v.name] = v.options[0];
          }
        });
      }
      setSelectedVariants(initialVars);
    }
  }, [product]);

  const stockInfo = getStockStatusLabel(product.stockStatus);
  const isBotanical = product.isNaturalProduct || product.categoryId === 'natural-care';

  const handleVariantSelect = (variantName: string, optionValue: string) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [variantName]: optionValue
    }));
  };

  const handleOrder = () => {
    openWhatsAppOrder({
      product,
      selectedVariants,
      quantity,
      customNotes
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-grid">
          {/* Left Column: Image Gallery */}
          <div>
            <div className="modal-gallery-main">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
              />
            </div>

            {product.images.length > 1 && (
              <div className="modal-thumbnails">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`modal-thumb ${selectedImageIndex === idx ? 'active' : ''}`}
                    onClick={() => setSelectedImageIndex(idx)}
                  >
                    <img src={img} alt={`${product.name} preview ${idx + 1}`} />
                  </div>
                ))}
              </div>
            )}

            {/* Herbal Disclaimer snippet if botanical */}
            {isBotanical && (
              <div
                style={{
                  marginTop: '1rem',
                  padding: '0.85rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--secondary-sage-light)',
                  border: '1px solid #C2E0BA',
                  fontSize: '0.8rem',
                  color: 'var(--secondary-sage)'
                }}
              >
                <div style={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                  <Leaf size={16} /> Natural Handmade Botanical Care
                </div>
                <div>{STORE_CONFIG.naturalCareDisclaimer}</div>
              </div>
            )}
          </div>

          {/* Right Column: Product Details & Variant Selection */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span className={`badge ${stockInfo.badgeClass}`}>
                {stockInfo.label}
              </span>
              <span className="product-id-badge" style={{ fontSize: '0.88rem' }}>
                Item Code: {product.productId}
              </span>
            </div>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.25, fontFamily: 'var(--font-heading)' }}>
              {product.name}
            </h2>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-plum)' }}>
                {formatCurrency(product.price * quantity)}
              </span>
              {product.originalPrice && (
                <span style={{ fontSize: '1rem', color: 'var(--text-light)', textDecoration: 'line-through' }}>
                  {formatCurrency(product.originalPrice * quantity)}
                </span>
              )}
              {quantity > 1 && (
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  ({formatCurrency(product.price)} each)
                </span>
              )}
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1rem' }}>
              {product.fullDescription}
            </p>

            {/* Fabric / Net Weight / Details */}
            {(product.fabric || product.netWeight) && (
              <div style={{ marginBottom: '0.85rem', fontSize: '0.88rem', color: 'var(--text-main)', display: 'flex', gap: '1rem' }}>
                {product.fabric && (
                  <div><strong>Fabric:</strong> {product.fabric}</div>
                )}
                {product.netWeight && (
                  <div><strong>Net Weight:</strong> {product.netWeight}</div>
                )}
              </div>
            )}

            {/* Dynamic Variant Options with Strong Contrast Selection */}
            {product.variants && product.variants.length > 0 && (
              <div className="variant-picker-section">
                {product.variants.map((vGroup) => (
                  <div key={vGroup.name}>
                    <div className="variant-group-title">
                      Select {vGroup.name}: <span style={{ color: 'var(--brand-plum)', fontWeight: 800 }}>{selectedVariants[vGroup.name]}</span>
                    </div>
                    <div className="variant-options-wrap">
                      {vGroup.options.map((opt) => {
                        const isSelected = selectedVariants[vGroup.name] === opt;
                        return (
                          <button
                            key={opt}
                            onClick={() => handleVariantSelect(vGroup.name, opt)}
                            className={`variant-opt-btn ${isSelected ? 'selected' : ''}`}
                            style={{
                              backgroundColor: isSelected ? 'var(--brand-plum)' : 'var(--bg-card)',
                              color: isSelected ? 'white' : 'var(--text-main)',
                              borderColor: isSelected ? 'var(--brand-plum)' : 'var(--border-color)',
                              fontWeight: isSelected ? 700 : 500
                            }}
                          >
                            {isSelected && <Check size={14} style={{ display: 'inline', marginRight: '4px' }} />}
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Botanical Ingredients List */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div style={{ marginBottom: '1rem', backgroundColor: '#F0F7F2', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid #C2E0BA' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--secondary-sage)' }}>
                  🌿 Botanical Ingredients:
                </div>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {product.ingredients.map((ing, idx) => (
                    <li key={idx}>{ing}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity Selector */}
            <div style={{ marginBottom: '1.15rem' }}>
              <div className="variant-group-title">Select Quantity:</div>
              <div className="qty-selector">
                <button
                  className="qty-btn"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <div className="qty-display">{quantity}</div>
                <button
                  className="qty-btn"
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Custom Notes / Delivery Location Note */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                Special Request / Delivery Location Note (Optional):
              </label>
              <input
                type="text"
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder="e.g., SPB Colony area or preferred color choice"
                style={{
                  width: '100%',
                  padding: '0.5rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.85rem'
                }}
              />
            </div>

            {/* Action Buttons */}
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <button
                onClick={handleOrder}
                disabled={!stockInfo.isOrderable}
                className="btn-whatsapp"
                style={{
                  width: '100%',
                  minHeight: '52px',
                  fontSize: '1rem',
                  opacity: stockInfo.isOrderable ? 1 : 0.5,
                  cursor: stockInfo.isOrderable ? 'pointer' : 'not-allowed'
                }}
              >
                <MessageCircle size={22} />
                <span>
                  {stockInfo.isOrderable ? 'ORDER THIS PRODUCT ON WHATSAPP' : 'PRODUCT CURRENTLY UNAVAILABLE'}
                </span>
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                ⚡ Tap button above — Sumathi will receive your selected product details on WhatsApp instantly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
