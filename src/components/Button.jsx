const Button = ({ children, className, ...props }) => {
  const baseClasses =
    "bg-Orange px-3 py-2 rounded-md font-bold text-Black w-full flex justify-center items-center gap-x-2 hover:bg-Orange/90 transition-colors duration-150";
  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
