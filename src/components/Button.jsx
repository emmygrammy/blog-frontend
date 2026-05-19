function Button({ children, className = "", onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full shrink-0 w-full md:w-auto ${className}`}
    >
      {icon}
      {children}
    </button>
  );
}
export default Button;
