import { BsShare } from "react-icons/bs";

const CompanyRelationItem = ({ className, relationValue, relationTitle }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <BsShare className="mr-4" size={24} />
      <div className="detail-container">
        <h6 className="text-2xl font-bold">{relationValue}</h6>
        <span className="text-gray-600">{relationTitle}</span>
      </div>
    </div>
  );
};

export default CompanyRelationItem;
