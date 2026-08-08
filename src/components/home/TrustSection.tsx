import React from 'react';
import { ShieldCheck, MessageSquare, HeartHandshake, Sparkles } from 'lucide-react';
import { STORE_CONFIG } from '../../config/store.config';

export const TrustSection: React.FC = () => {
  const icons = [
    <ShieldCheck size={20} />,
    <MessageSquare size={20} />,
    <HeartHandshake size={20} />,
    <Sparkles size={20} />
  ];

  return (
    <div className="container">
      <div className="trust-grid">
        {STORE_CONFIG.trustBadges.map((badge, idx) => (
          <div key={idx} className="trust-item">
            <div className="trust-icon">
              {icons[idx % icons.length]}
            </div>
            <div>
              <div className="trust-title">{badge.title}</div>
              <div className="trust-desc">{badge.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
