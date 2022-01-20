const TextButton = ({ title, Icon, className, hexColor }) => {
  const buttonStyle = {
    color: hexColor,
  };

  return (
    <button
      type="button"
      className={`text-sm ${className}`}
      style={buttonStyle}
    >
      {Icon ? <Icon className="inline mr-2 font-semi-bold" /> : ""} {title}
    </button>
  );
};

TextButton.defaultProps = {
  hexColor: "000",
};

export default TextButton;
