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
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      className={`${baseClasses} ${className}`}
      onMouseEnter={(e) => {
        e.target.style.transform = "translateY(-2px)";
        e.target.style.boxShadow =
          "0 18px 54px rgba(11, 18, 32, 0.18), 0 0 0 6px rgba(174, 226, 255, 0.35)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = "0 12px 32px rgba(11, 18, 32, 0.16)";
      }}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
