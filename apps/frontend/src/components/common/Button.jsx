const Button = ({ 
  onClick, 
  children, 
  className = "", 
  disabled = false, 
  type = "button", 
  ...props 
}) => {
  const defaultStyles = `
    px-8 py-2 
    bg-button text-text font-bold 
    transition duration-200
  `;


  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${defaultStyles} ${className}`}
      {...props}
      user-select="none"
    >
      {children}
    </button>
  );
};

export default Button;