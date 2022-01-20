import { useState } from "react";
import { BsBuilding } from "react-icons/bs";

const MenuIcon = ({ Icon, iconColor, className }) => {
  const iconStyle = {
    width: "25px",
    height: "25px",
  };

  const hoverStyle = {
    borderLeft: "4px solid #8FB493",
  };

  const [isHover, setIsHover] = useState(false);

  const selected = Icon === BsBuilding;

  return (
    <div
      className={`w-full transition ease-in duration-300 cursor-pointer ${className}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={isHover || selected ? hoverStyle : {}}
    >
      <Icon color={iconColor} style={iconStyle} className="mx-auto"></Icon>
    </div>
  );
};

MenuIcon.defaultProps = {
  iconColor: "#828282",
};

export default MenuIcon;
