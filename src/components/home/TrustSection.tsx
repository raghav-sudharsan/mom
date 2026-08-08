import { ShieldCheck, MessageSquare, HeartHandshake, MapPin } from 'lucide-react';

export const TrustSection = () => {
  const trustItems = [
    {
      icon: <ShieldCheck size={20} />,
      title: "Carefully Selected Products",
      desc: "Handpicked boutique fabrics, sarees, nighties & pure botanical herbal powders."
    },
    {
      icon: <MessageSquare size={20} />,
      title: "Easy WhatsApp Ordering",
      desc: "Order directly in one click with your Product ID. No login or complex payment forms."
    },
    {
      icon: <HeartHandshake size={20} />,
      title: "Personal Customer Support",
      desc: "Talk directly with Sumathi for size advice, color matching, and stock availability."
    },
    {
      icon: <MapPin size={20} />,
      title: "Local Business Trust",
      desc: "Based in SPB Colony, Kumarapalayam, Namakkal. Reliable local & national delivery."
    }
  ];

  return (
    <div className="container">
      <div className="trust-grid">
        {trustItems.map((item, idx) => (
          <div key={idx} className="trust-item">
            <div className="trust-icon" style={{ backgroundColor: 'var(--primary-rose-light)', color: 'var(--primary-rose)' }}>
              {item.icon}
            </div>
            <div>
              <div className="trust-title" style={{ fontFamily: 'var(--font-heading)', color: 'var(--brand-plum)' }}>{item.title}</div>
              <div className="trust-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
