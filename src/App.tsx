import { useState, useMemo, useEffect } from 'react';
import './assets/styles/global.css';
import './assets/styles/components.css';

import type { Product, CategoryId } from './types/product';
import productsData from './data/products.json';
import { STORE_CONFIG } from './config/store.config';

import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { SearchBar } from './components/common/SearchBar';
import { LoadingSkeleton } from './components/common/LoadingSkeleton';
import { HeroSection } from './components/home/HeroSection';
import { CategoryGrid } from './components/home/CategoryGrid';
import { NaturalCareHighlight } from './components/home/NaturalCareHighlight';
import { HowToOrder } from './components/home/HowToOrder';
import { TrustSection } from './components/home/TrustSection';

import { ProductGrid } from './components/catalog/ProductGrid';
import { ProductDetailModal } from './components/catalog/ProductDetailModal';
import { PoliciesView } from './components/legal/PoliciesView';

import { MessageCircle, Layers, Home, ShoppingBag, Sparkles } from 'lucide-react';

export function App() {
  const [products] = useState<Product[]>(productsData as Product[]);
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isPoliciesOpen, setIsPoliciesOpen] = useState<boolean>(false);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Simulate short smooth skeleton loading phase
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Filter products based on search query, category, and stock filter
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category match
      const matchesCategory =
        activeCategory === 'all' || item.categoryId === activeCategory;

      // Stock status match
      const matchesStock = inStockOnly ? item.stockStatus === 'in_stock' : true;

      // Multi-attribute search (Product ID, Name, Category, Description)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.productId.toLowerCase().includes(q) ||
        item.name.toLowerCase().includes(q) ||
        item.categoryId.toLowerCase().includes(q) ||
        item.shortDescription.toLowerCase().includes(q) ||
        (item.fabric && item.fabric.toLowerCase().includes(q));

      return matchesCategory && matchesStock && matchesSearch;
    });
  }, [products, activeCategory, searchQuery, inStockOnly]);

  // Find herbal product for natural care highlight
  const herbalHighlightProduct = products.find((p) => p.productId === 'NHP-001');

  const scrollToCatalog = () => {
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 800, behavior: 'smooth' });
    }
  };

  const scrollToNaturalCare = () => {
    const naturalEl = document.getElementById('natural-care');
    if (naturalEl) {
      naturalEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 1200, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Header */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          scrollToCatalog();
        }}
        onOpenPolicies={() => setIsPoliciesOpen(true)}
      />

      {/* Main Content Body */}
      <main style={{ flexGrow: 1, paddingBottom: '70px' }}>
        {/* Hero Section */}
        <HeroSection onExploreClick={scrollToCatalog} />

        {/* Category Selector Grid */}
        <CategoryGrid
          activeCategory={activeCategory}
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            scrollToCatalog();
          }}
        />

        {/* Dedicated Natural Care Highlight */}
        <NaturalCareHighlight
          herbalProduct={herbalHighlightProduct}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
        />

        {/* Catalog Section */}
        <section id="catalog" style={{ padding: '1.5rem 0', scrollMarginTop: '70px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
              <h2 className="section-title">
                {activeCategory === 'all'
                  ? 'Complete Product Catalog'
                  : `${activeCategory.toUpperCase().replace('-', ' ')} COLLECTION`}
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '0.75rem' }}>
                Click any product to view full details, size/color options, and order directly on WhatsApp.
              </p>
            </div>

            {/* Instant Search Bar */}
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              resultCount={filteredProducts.length}
            />

            {/* Filter Controls Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '1.25rem',
                padding: '0.65rem 0.85rem',
                backgroundColor: 'white',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <Layers size={15} />
                <span>Showing <strong>{filteredProducts.length}</strong> items</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', cursor: 'pointer', fontWeight: 500 }}>
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    style={{ accentColor: 'var(--primary-rose)' }}
                  />
                  In Stock Only
                </label>

                {(activeCategory !== 'all' || searchQuery || inStockOnly) && (
                  <button
                    onClick={() => {
                      setActiveCategory('all');
                      setSearchQuery('');
                      setInStockOnly(false);
                    }}
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--primary-rose)',
                      fontWeight: 600,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            </div>

            {/* Product Cards Grid with Skeleton Loader */}
            {isLoading ? (
              <LoadingSkeleton />
            ) : (
              <ProductGrid
                products={filteredProducts}
                onQuickView={(prod) => setSelectedProduct(prod)}
                onResetFilters={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                  setInStockOnly(false);
                }}
              />
            )}
          </div>
        </section>

        {/* How To Order Walkthrough */}
        <HowToOrder />

        {/* Trust Badges */}
        <TrustSection />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          scrollToCatalog();
        }}
        onOpenPolicies={() => setIsPoliciesOpen(true)}
      />

      {/* Mobile Sticky Bottom Action Navigation Bar */}
      <nav className="mobile-bottom-nav">
        <button
          type="button"
          className={`mobile-nav-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => {
            setActiveCategory('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Home size={20} />
          <span>Home</span>
        </button>

        <button
          type="button"
          className="mobile-nav-btn"
          onClick={() => {
            setActiveCategory('all');
            scrollToCatalog();
          }}
        >
          <ShoppingBag size={20} />
          <span>Catalog</span>
        </button>

        <button
          type="button"
          className="mobile-nav-btn"
          onClick={() => {
            setActiveCategory('natural-care');
            scrollToNaturalCare();
          }}
        >
          <Sparkles size={20} color="var(--secondary-sage)" />
          <span style={{ color: 'var(--secondary-sage)' }}>Natural</span>
        </button>

        <a
          href={STORE_CONFIG.socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-nav-btn whatsapp-nav"
        >
          <MessageCircle size={22} color="var(--whatsapp-green)" />
          <span>WhatsApp</span>
        </a>
      </nav>

      {/* Floating Sticky WhatsApp Button for Desktop */}
      <a
        href={STORE_CONFIG.socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title="Quick Order on WhatsApp (9597008868)"
      >
        <MessageCircle size={28} />
      </a>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Legal & Policies View Modal */}
      {isPoliciesOpen && (
        <PoliciesView onClose={() => setIsPoliciesOpen(false)} />
      )}
    </div>
  );
}

export default App;
