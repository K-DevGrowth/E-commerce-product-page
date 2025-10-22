const Buttons = ({ children, className, ...props }) => {
  const baseClass = "flex items-center cursor-pointer font-semibold px-4 py-3";
  return (
    <button className={`${baseClass} ${className}`} type="button" {...props}>
      {children}
    </button>
  );
};

export default Buttons;
