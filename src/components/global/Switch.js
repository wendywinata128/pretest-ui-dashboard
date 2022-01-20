import { useState } from "react";

const Switch = () => {
  const [value, setValue] = useState(true);

  return (
    <div>
      <input
        type="checkbox"
        id="switch"
        className="hidden"
        onChange={() => setValue(!value)}
      />
      <label
        className={`p-1 ${
          value ? "bg-[#34743A]" : "bg-[#E10009]"
        } w-16 h-8 rounded-full relative cursor-pointer block`}
        htmlFor="switch"
      >
        <div
          className={`w-6 h-6 bg-white absolute ${
            value ? "right-1" : "right-9"
          } rounded-full transition-all`}
        ></div>
      </label>
    </div>
  );
};

export default Switch;
