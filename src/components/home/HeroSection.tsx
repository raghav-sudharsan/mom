import { ShoppingBag, MessageCircle, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';
import { STORE_CONFIG } from '../../config/store.config';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection = ({ onExploreClick }: HeroSectionProps) => {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge-pill">
              <Sparkles size={15} />
              <span>Sumathi's Collections • SPB Colony, Kumarapalayam</span>
            </div>
            
            <h1 className="hero-heading" style={{ fontFamily: 'var(--font-heading)' }}>
              Style, Comfort & Care — All in One Place
            </h1>
            
            <p className="hero-subtext">
              Explore women's apparel, elegant sarees, Jaipur Anarkalis, nightwear, kids' collection, perfumes, and handcrafted herbal natural-care powders from Sumathi's Collections.
            </p>

            <div className="hero-cta-group">
              <button onClick={onExploreClick} className="btn-primary" style={{ backgroundColor: 'var(--brand-plum)' }}>
                <ShoppingBag size={20} />
                <span>Explore Collection</span>
              </button>

              <a
                href={STORE_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={20} />
                <span>Order on WhatsApp (9597008868)</span>
              </a>
            </div>

            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <ShieldCheck size={16} color="var(--primary-rose)" />
                <span>Product ID Search Supported</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <Sparkles size={16} color="var(--secondary-sage)" />
                <span>100% Botanical Natural Powders</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <HeartHandshake size={16} color="var(--brand-plum)" />
                <span>Personalized Family Service</span>
              </div>
            </div>
          </div>

          <div className="hero-image-card">
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
              alt="Sumathi's Collections Women's Sarees and Boutique Fashion"
              loading="eager"
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                right: '1rem',
                background: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(8px)',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-rose)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Handpicked Boutique Range
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-plum)' }}>
                  Sumathi's Collections • Tamil Nadu
                </div>
              </div>
              <span className="product-id-badge">
                WhatsApp Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
