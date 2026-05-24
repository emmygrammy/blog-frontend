function Button({ children, className = "", onClick, icon, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full shrink-0 w-full ${className}`}
    >
      {icon}
      {children}
    </button>
  );
}

export default Button;