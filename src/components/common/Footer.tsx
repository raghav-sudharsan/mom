import { STORE_CONFIG } from '../../config/store.config';
import { ShoppingBag, MessageCircle, Phone, Mail, MapPin, Clock, Share2, Globe } from 'lucide-react';
import type { CategoryId } from '../../types/product';

interface FooterProps {
  onSelectCategory: (categoryId: CategoryId) => void;
  onOpenPolicies: () => void;
}

export const Footer = ({ onSelectCategory, onOpenPolicies }: FooterProps) => {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <div className="brand-icon-box" style={{ width: '36px', height: '36px' }}>
                <ShoppingBag size={18} />
              </div>
              <div className="footer-brand-title" style={{ fontFamily: 'var(--font-heading)' }}>
                {STORE_CONFIG.businessName}
              </div>
            </div>
            <p className="footer-text">
              {STORE_CONFIG.description}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={STORE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#9CA3AF', padding: '0.4rem', borderRadius: '50%', backgroundColor: '#1F2937' }}
                title="Instagram"
              >
                <Share2 size={18} />
              </a>
              <a
                href={STORE_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#9CA3AF', padding: '0.4rem', borderRadius: '50%', backgroundColor: '#1F2937' }}
                title="Facebook"
              >
                <Globe size={18} />
              </a>
              <a
                href={STORE_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#25D366', padding: '0.4rem', borderRadius: '50%', backgroundColor: '#1F2937' }}
                title="WhatsApp Direct (9597008868)"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Categories Quick Links */}
          <div>
            <div className="footer-heading" style={{ fontFamily: 'var(--font-heading)' }}>Product Categories</div>
            <ul className="footer-links">
              <li><a href="#catalog" onClick={() => onSelectCategory('nighties')}>Nighties & Nightwear</a></li>
              <li><a href="#catalog" onClick={() => onSelectCategory('sarees')}>Sarees Collection</a></li>
              <li><a href="#catalog" onClick={() => onSelectCategory('dresses')}>Women's Dresses</a></li>
              <li><a href="#catalog" onClick={() => onSelectCategory('blouses')}>Designer Blouses</a></li>
              <li><a href="#catalog" onClick={() => onSelectCategory('kids')}>Kids & Family Wear</a></li>
              <li><a href="#catalog" onClick={() => onSelectCategory('perfumes')}>Perfumes & Attars</a></li>
              <li><a href="#catalog" onClick={() => onSelectCategory('natural-care')} style={{ color: '#A7F3D0' }}>Handmade Natural Powder</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <div className="footer-heading" style={{ fontFamily: 'var(--font-heading)' }}>Contact & Location</div>
            <ul className="footer-links" style={{ gap: '0.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="var(--primary-rose)" />
                <span>{STORE_CONFIG.contactPhone}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageCircle size={16} color="var(--whatsapp-green)" />
                <a href={STORE_CONFIG.socialLinks.whatsapp} target="_blank" rel="noreferrer" style={{ color: '#A7F3D0', fontWeight: 600 }}>
                  WhatsApp: {STORE_CONFIG.whatsappDisplayNumber}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} color="#9CA3AF" />
                <span>{STORE_CONFIG.contactEmail}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} color="#9CA3AF" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{STORE_CONFIG.location}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Clock size={16} color="#9CA3AF" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{STORE_CONFIG.operatingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {STORE_CONFIG.businessName}. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={onOpenPolicies}
              style={{ background: 'none', border: 'none', color: '#9CA3AF', cursor: 'pointer', fontSize: '0.8rem' }}
            >
              Privacy & Exchange Policies
            </button>
            <span>•</span>
            <button
              onClick={onOpenPolicies}
              style={{ background: 'none', border: 'none', color: '#9CA3AF', cursor: 'pointer', fontSize: '0.8rem' }}
            >
              Herbal Product Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
