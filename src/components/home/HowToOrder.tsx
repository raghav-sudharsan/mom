import { Search, Hash, MessageCircle, Truck } from 'lucide-react';

export const HowToOrder = () => {
  const steps = [
    {
      number: 1,
      icon: <Search size={22} />,
      title: "01. Browse Products",
      description: "Explore our categories or search by product name/category to find what you want."
    },
    {
      number: 2,
      icon: <Hash size={22} />,
      title: "02. Note Product ID",
      description: "Check the unique Product ID (e.g. NIT-001, KDS-001) and select your preferred size or color."
    },
    {
      number: 3,
      icon: <MessageCircle size={22} />,
      title: "03. Order on WhatsApp",
      description: "Click 'Order on WhatsApp'. A pre-filled message with your product details opens automatically."
    },
    {
      number: 4,
      icon: <Truck size={22} />,
      title: "04. We Confirm & Deliver",
      description: "Sumathi will confirm availability, price, and delivery details directly with you."
    }
  ];

  return (
    <section className="how-to-order-section">
      <div className="container">
        <h2 className="section-title">How to Order in 4 Easy Steps</h2>
        <p className="section-subtitle">
          No complicated sign-up or online payment forms required. Simple, personal, and friendly shopping for your family!
        </p>

        <div className="steps-grid">
          {steps.map((s) => (
            <div key={s.number} className="step-card">
              <div className="step-number" style={{ backgroundColor: 'var(--brand-plum)' }}>{s.number}</div>
              <div style={{ color: 'var(--primary-rose)', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                {s.icon}
              </div>
              <h3 className="step-title" style={{ fontFamily: 'var(--font-heading)' }}>{s.title}</h3>
              <p className="step-desc">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
