const Card = ({ children, className, image }) => {
  return (
    <div
      className={`rounded-2xl p-6 overflow-hidden transition-all duration-300 ${className}`}
      style={{
        backgroundColor: '#111827',
        border: '1px solid #2a3142',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 78, 138, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {image && (
        <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem' }}>
          <img src={image} alt="Card" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;