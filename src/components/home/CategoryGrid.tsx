import type { Category, CategoryId } from '../../types/product';
import categoriesData from '../../data/categories.json';
import { Sparkles, Moon, Shirt, Scissors, Heart, Flame, Leaf, Layers, Smile } from 'lucide-react';

interface CategoryGridProps {
  activeCategory: CategoryId;
  onSelectCategory: (categoryId: CategoryId) => void;
}

export const CategoryGrid = ({
  activeCategory,
  onSelectCategory
}: CategoryGridProps) => {
  const categories = categoriesData as Category[];

  const getCategoryIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'Moon': return <Moon size={18} color={color} />;
      case 'Shirt': return <Shirt size={18} color={color} />;
      case 'Sparkles': return <Sparkles size={18} color={color} />;
      case 'Scissors': return <Scissors size={18} color={color} />;
      case 'Heart': return <Heart size={18} color={color} />;
      case 'Smile': return <Smile size={18} color={color} />;
      case 'Flame': return <Flame size={18} color={color} />;
      case 'Leaf': return <Leaf size={18} color={color} />;
      default: return <Layers size={18} color={color} />;
    }
  };

  return (
    <section className="category-section">
      <div className="container">
        <h2 className="section-title">Shop by Category</h2>
        <p className="section-subtitle">
          Explore women's apparel, sarees, Jaipur dresses, blouses, kids' wear, fine perfumes, and natural care products.
        </p>

        {/* Category Scroll Pills Bar */}
        <div className="category-scroll-bar" style={{ marginBottom: '1.5rem' }}>
          <button
            className={`category-pill ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => onSelectCategory('all')}
          >
            <Layers size={18} />
            <span>All Categories</span>
          </button>
          
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-pill ${cat.id === 'natural-care' ? 'category-pill-botanical' : ''} ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              {getCategoryIcon(cat.iconName, activeCategory === cat.id ? 'white' : cat.accentColor)}
              <span>{cat.name}</span>
              {cat.badge && (
                <span
                  style={{
                    fontSize: '0.65rem',
                    padding: '0.1rem 0.4rem',
                    borderRadius: '99px',
                    background: activeCategory === cat.id ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.06)'
                  }}
                >
                  {cat.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Visual Category Cards Grid */}
        <div className="category-grid">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="category-card"
              onClick={() => onSelectCategory(cat.id)}
              style={{
                borderColor: activeCategory === cat.id ? cat.accentColor : undefined
              }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="category-card-img"
                loading="lazy"
              />
              <div className="category-card-body">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <div className="category-card-title">{cat.name}</div>
                  {cat.badge && (
                    <span className={`badge ${cat.id === 'natural-care' ? 'badge-botanical' : 'badge-primary'}`}>
                      {cat.badge}
                    </span>
                  )}
                </div>
                <div className="category-card-desc">{cat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
