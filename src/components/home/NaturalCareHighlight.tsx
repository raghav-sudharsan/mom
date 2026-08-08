import { Leaf, Sparkles, MessageCircle, AlertCircle } from 'lucide-react';
import type { Product } from '../../types/product';
import { STORE_CONFIG } from '../../config/store.config';

interface NaturalCareHighlightProps {
  herbalProduct?: Product;
  onSelectProduct: (product: Product) => void;
}

export const NaturalCareHighlight = ({
  herbalProduct,
  onSelectProduct
}: NaturalCareHighlightProps) => {
  return (
    <section id="natural-care" className="container" style={{ margin: '3rem auto' }}>
      <div className="natural-care-section">
        <div className="natural-grid">
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'white',
                color: 'var(--secondary-sage)',
                fontSize: '0.8rem',
                fontWeight: 700,
                marginBottom: '1rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <Leaf size={16} />
              <span>Handmade & Natural Personal-Care</span>
            </div>

            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1B3B18', marginBottom: '0.75rem' }}>
              Handcrafted Hibiscus & Botanical Herbal Powder
            </h2>

            <p style={{ fontSize: '1rem', color: '#2C4F28', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Prepared with care using selected natural ingredients such as sun-dried Hibiscus flowers, Rose petals, and traditional herbal botanicals. Traditionally used as part of natural skin and hair care routines.
            </p>

            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1B3B18', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Pure Key Ingredients:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <span className="ingredient-pill">🌺 Sun-Dried Hibiscus</span>
                <span className="ingredient-pill">🌹 Rose Petal Powder</span>
                <span className="ingredient-pill">🍃 Organic Amla</span>
                <span className="ingredient-pill">✨ Wild Turmeric (Kasturi)</span>
                <span className="ingredient-pill">🪴 Botanical Clay</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              {herbalProduct ? (
                <button
                  onClick={() => onSelectProduct(herbalProduct)}
                  className="btn-primary"
                  style={{ backgroundColor: 'var(--secondary-sage)' }}
                >
                  <Sparkles size={18} />
                  <span>View Details & Pack Sizes</span>
                </button>
              ) : null}

              <a
                href={STORE_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>Order Herbal Powder on WhatsApp</span>
              </a>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '4px solid white', boxShadow: 'var(--shadow-lg)' }}>
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
                alt="Handmade Herbal Flower Powder"
                style={{ width: '100%', height: '320px', objectFit: 'cover' }}
              />
            </div>

            {/* Regulatory Disclaimer Box */}
            <div
              style={{
                marginTop: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid #C2E0BA',
                fontSize: '0.78rem',
                color: '#2C4F28',
                lineHeight: 1.4,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem'
              }}
            >
              <AlertCircle size={18} color="var(--secondary-sage)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Product Care Note:</strong> Intended for external cosmetic and personal-care routines. Made with natural botanical ingredients. Patch test recommended prior to use.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
