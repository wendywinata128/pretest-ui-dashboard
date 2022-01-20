const CompanyLocationItem = ({ Icon, value, title, className }) => {
  return (
    <div
      className={`flex justify-between items-center py-2 px-4 rounded-lg text-white bg-[#42934A] ${className}`}
    >
      <Icon size="40" />
      <div className="detail text-right">
        <h6 className="text-2xl font-bold">{value}</h6>
        <span className="text-sm text-neutral-200">{title}</span>
      </div>
    </div>
  );
};

export default CompanyLocationItem;
