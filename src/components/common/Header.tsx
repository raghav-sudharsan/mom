import { ShoppingBag, MessageCircle, Sparkles, Heart } from 'lucide-react';
import { STORE_CONFIG } from '../../config/store.config';
import type { CategoryId } from '../../types/product';

interface HeaderProps {
  activeCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
  onOpenPolicies?: () => void;
}

export const Header = ({
  activeCategory,
  onSelectCategory,
  onOpenPolicies
}: HeaderProps) => {
  const handleNavClick = (catId: CategoryId, e: React.MouseEvent) => {
    e.preventDefault();
    onSelectCategory(catId);
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-wrapper">
      <div className="container header-container">
        {/* Brand Logo - Sumathi's Collections */}
        <a 
          href="#" 
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            onSelectCategory('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="brand-icon-box">
            <ShoppingBag size={20} />
          </div>
          <div>
            <div className="brand-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', letterSpacing: '0.02em', color: 'var(--brand-plum)' }}>
              SUMATHI'S
            </div>
            <div className="brand-subtitle" style={{ color: 'var(--primary-rose)', letterSpacing: '0.1em', fontWeight: 600 }}>
              COLLECTIONS
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          <a
            href="#catalog"
            className={`nav-link ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('all', e)}
          >
            All Products
          </a>
          <a
            href="#catalog"
            className={`nav-link ${activeCategory === 'nighties' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('nighties', e)}
          >
            Nighties
          </a>
          <a
            href="#catalog"
            className={`nav-link ${activeCategory === 'sarees' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('sarees', e)}
          >
            Sarees
          </a>
          <a
            href="#catalog"
            className={`nav-link ${activeCategory === 'kids' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('kids', e)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}
          >
            <Heart size={14} color="var(--primary-rose)" /> Kids & Family
          </a>
          <a
            href="#natural-care"
            className={`nav-link ${activeCategory === 'natural-care' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('natural-care', e)}
            style={{ color: 'var(--secondary-sage)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            <Sparkles size={15} /> Natural Powder
          </a>
          {onOpenPolicies && (
            <button 
              onClick={onOpenPolicies} 
              className="nav-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Policies & Safety
            </button>
          )}
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <a
            href={STORE_CONFIG.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp btn-whatsapp-sm"
            title="Contact us directly on WhatsApp (9597008868)"
          >
            <MessageCircle size={18} />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
