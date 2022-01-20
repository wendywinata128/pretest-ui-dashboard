const TextTitleValue = ({
  title,
  value,
  valueHexColor,
  valueClassName,
  suffixComponent,
}) => {
  return (
    <div className="py-2">
      <h6 className="mb-1 text-sm text-gray-700">{title}</h6>
      <div className="flex justify-between">
        <h6 className={`${valueClassName}`} style={{ color: valueHexColor }}>
          {value}
        </h6>
        {suffixComponent}
      </div>
    </div>
  );
};

export default TextTitleValue;
