const AnimatedButton = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseClasses = "font-semibold py-3 px-6 rounded-[14px] transition-all duration-300 border-none cursor-pointer";

  const buttonStyle = {
    background: 'linear-gradient(135deg, #3b4e8a 0%, #5f52a9 100%)',
    color: '#FFFFFF',
    borderRadius: '14px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transform: 'scale(1)',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 28px rgba(59, 78, 138, 0.32)',
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      className={`${baseClasses} ${className}`}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.05)';
        e.target.style.boxShadow = '0 16px 44px rgba(95, 82, 169, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 10px 28px rgba(59, 78, 138, 0.32)';
      }}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;