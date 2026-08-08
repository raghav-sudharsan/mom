import { Search, Hash, MessageCircle, CheckCircle2, Truck } from 'lucide-react';

export const HowToOrder = () => {
  const steps = [
    {
      number: "01",
      icon: <Search size={22} />,
      title: "Browse Collection",
      description: "Explore women's apparel, sarees, dresses, kids wear & natural powders."
    },
    {
      number: "02",
      icon: <Hash size={22} />,
      title: "Note Product ID",
      description: "Check the unique Product ID (e.g. NIT-001, KDS-001) & select your size or color."
    },
    {
      number: "03",
      icon: <MessageCircle size={22} />,
      title: "WhatsApp Us",
      description: "Click 'Order on WhatsApp'. A pre-filled message with details opens automatically."
    },
    {
      number: "04",
      icon: <CheckCircle2 size={22} />,
      title: "We Confirm",
      description: "Sumathi will confirm availability, price, and payment options directly with you."
    },
    {
      number: "05",
      icon: <Truck size={22} />,
      title: "Safe Delivery",
      description: "We arrange delivery based on your location in Kumarapalayam or across India."
    }
  ];

  return (
    <section className="how-to-order-section">
      <div className="container">
        <h2 className="section-title">How to Order in 5 Easy Steps</h2>
        <p className="section-subtitle">
          No complicated sign-up or online payment forms required. Simple, personal, and friendly shopping!
        </p>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem' 
          }}
        >
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
