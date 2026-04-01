<<<<<<< HEAD
const AnimatedButton = ({
  children,
  onClick,
  className = "",
  variant = "primary",
}) => {
  const baseClasses =
    "font-semibold py-3 px-6 rounded-[14px] transition-all duration-300 border-none cursor-pointer";

  const buttonStyle = {
    background: "var(--kid-btn-gradient)",
    color: "var(--kid-ink)",
    borderRadius: "14px",
    border: "1px solid rgba(11, 18, 32, 0.12)",
    transform: "translateY(0)",
    transition: "all 0.3s ease",
    boxShadow: "0 12px 32px rgba(11, 18, 32, 0.16)",
    boxSizing: "border-box",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
=======
const AnimatedButton = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseClasses = "font-semibold py-3 px-6 rounded-[10px] transition-all duration-300 border-none cursor-pointer";

  const buttonStyle = {
    background: 'linear-gradient(135deg, #3b4e8a 0%, #5f52a9 100%)',
    color: '#FFFFFF',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transform: 'scale(1)',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 16px rgba(59, 78, 138, 0.3)',
>>>>>>> parent of 8404c99 (Refactor assets, simplify App.css, add UI styles)
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      className={`${baseClasses} ${className}`}
      onMouseEnter={(e) => {
<<<<<<< HEAD
        e.target.style.transform = "translateY(-2px)";
        e.target.style.boxShadow =
          "0 18px 54px rgba(11, 18, 32, 0.18), 0 0 0 6px rgba(174, 226, 255, 0.35)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = "0 12px 32px rgba(11, 18, 32, 0.16)";
=======
        e.target.style.transform = 'scale(1.05)';
        e.target.style.boxShadow = '0 8px 32px rgba(95, 82, 169, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 4px 16px rgba(59, 78, 138, 0.3)';
>>>>>>> parent of 8404c99 (Refactor assets, simplify App.css, add UI styles)
      }}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
