import { X, ShieldCheck, Truck, RefreshCw, AlertCircle, Phone } from 'lucide-react';
import { STORE_CONFIG } from '../../config/store.config';

interface PoliciesViewProps {
  onClose: () => void;
}

export const PoliciesView = ({ onClose }: PoliciesViewProps) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        style={{ maxWidth: '750px', padding: '2rem' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--brand-plum)', marginBottom: '1.5rem', textAlign: 'center', fontFamily: 'var(--font-heading)' }}>
          Store Policies & Customer Information
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {/* WhatsApp Ordering & Delivery Policy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              <Truck size={20} color="var(--primary-rose)" />
              <span>1. Order & Delivery Information</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              All orders placed on <strong>Sumathi's Collections</strong> are processed directly through WhatsApp (9597008868). Upon receiving your product request, Sumathi will confirm product availability, delivery charges based on your pin code/location (SPB Colony, Kumarapalayam, Namakkal, Tamil Nadu, or across India), payment method, and expected delivery date.
            </p>
          </div>

          {/* Return & Exchange Policy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              <RefreshCw size={20} color="var(--primary-rose)" />
              <span>2. Return & Exchange Policy</span>
            </div>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <li><strong>Apparel & Kids Wear:</strong> Size or damage exchanges are accepted within 3 days of receipt provided items are unwashed, unworn, and retain original tags.</li>
              <li><strong>Personal-Care & Herbal Powders:</strong> Due to hygiene standards, opened or used natural powder packets are non-returnable.</li>
            </ul>
          </div>

          {/* Herbal Product Safety Disclaimer */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--secondary-sage)' }}>
              <AlertCircle size={20} color="var(--secondary-sage)" />
              <span>3. Natural Herbal Care Disclaimer</span>
            </div>
            <div
              style={{
                backgroundColor: 'var(--secondary-sage-light)',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid #C2E0BA',
                fontSize: '0.88rem',
                color: 'var(--secondary-sage)',
                lineHeight: 1.5
              }}
            >
              {STORE_CONFIG.naturalCareDisclaimer}
            </div>
          </div>

          {/* Privacy & Safety */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              <ShieldCheck size={20} color="var(--primary-rose)" />
              <span>4. Customer Privacy</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              We value your privacy. Your delivery details shared via WhatsApp are used strictly for order fulfillment and customer support by Sumathi's Collections.
            </p>
          </div>

          {/* Contact Support */}
          <div style={{ textAlign: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              Have questions or need assistance?
            </p>
            <a
              href={STORE_CONFIG.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp btn-whatsapp-sm"
              style={{ display: 'inline-flex' }}
            >
              <Phone size={16} />
              <span>Contact Us on WhatsApp ({STORE_CONFIG.whatsappDisplayNumber})</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
