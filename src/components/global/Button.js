const Button = ({ Icon, title, bgColor, textColor, className }) => {
  const btnStyle = {
    background: bgColor,
    color: textColor,
  };

  return (
    <button
      style={btnStyle}
      className={`rounded-md text-sm px-4 py-2 ${className}`}
    >
      {Icon ? <Icon className="inline mr-2" /> : ""}
      {title}
    </button>
  );
};

export default Button;
