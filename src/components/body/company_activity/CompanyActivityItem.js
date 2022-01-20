const CompanyActivityItem = ({ className, desc, date }) => {
  return (
    <div className={`${className}`}>
      <h6 className="mb-1">{desc}</h6>
      <span className="text-sm text-gray-400">{date}</span>
    </div>
  );
};

export default CompanyActivityItem;
