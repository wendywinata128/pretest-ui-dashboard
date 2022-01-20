import { RiPencilLine } from "react-icons/ri";
import { FiTrash2 } from "react-icons/fi";
import VisaImage from "../../../assets/visa_logo2.png";

const loadCardTypeImage = (cardType) => {
  switch (cardType) {
    case "VISA":
      return VisaImage;
    default:
      return VisaImage;
  }
};

const CompanyBankItem = ({
  startColor,
  endColor,
  cardType,
  bankName,
  number,
  name,
  currency,
  className,
}) => {
  const cardStyle = {
    backgroundImage: `linear-gradient(to right, ${startColor}, ${endColor})`,
    height: "90px",
  };

  return (
    <div className={`flex flex-col w-full ${className}  sm:flex-row`}>
      <div
        className="card-type relative rounded-lg mr-4 mb-4 w-full sm:w-32 sm:mb-0"
        style={cardStyle}
      >
        <img
          src={loadCardTypeImage(cardType)}
          alt="visa logo"
          className="w-16 absolute bottom-2 right-2"
        />
      </div>
      <div className="detail-card flex-1 flex flex-col ">
        <div className="name-container flex">
          <span className="font-bold">{bankName}</span>
          <div className="actions ml-auto flex">
            <RiPencilLine color="34743A" className="mr-2 cursor-pointer" />
            <FiTrash2 color="red" className="cursor-pointer" />
          </div>
        </div>
        <div className="mt-auto text-gray-600 text-sm ">
          {number} - {name}
        </div>
        <div className="text-gray-600 text-sm">{currency}</div>
      </div>
    </div>
  );
};

export default CompanyBankItem;
