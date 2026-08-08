export const LoadingSkeleton = () => {
  return (
    <div className="product-grid" style={{ opacity: 0.7 }}>
      {[1, 2, 3, 4].map((n) => (
        <div key={n} className="product-card">
          <div className="skeleton" style={{ width: '100%', aspectRatio: '1/1' }} />
          <div className="product-card-body" style={{ gap: '0.5rem' }}>
            <div className="skeleton" style={{ width: '40%', height: '12px' }} />
            <div className="skeleton" style={{ width: '85%', height: '18px' }} />
            <div className="skeleton" style={{ width: '60%', height: '14px' }} />
            <div className="skeleton" style={{ width: '50%', height: '22px', marginTop: 'auto' }} />
          </div>
        </div>
      ))}
    </div>
  );
};
