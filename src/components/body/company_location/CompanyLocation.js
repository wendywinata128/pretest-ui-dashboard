import TextButton from "../../global/TextButton";
import { BiBuildingHouse } from "react-icons/bi";
import { FiTool } from "react-icons/fi";
import CompanyLocationItem from "./CompanyLocationItem";

const CompanyLocation = ({ className }) => {
  const locationData = [
    { icon: BiBuildingHouse, title: "Induk", value: "20" },
    { icon: FiTool, title: "Sub Lokasi Level 1", value: "3" },
    { icon: BiBuildingHouse, title: "Sub Lokasi Level 2", value: "1" },
  ];

  return (
    <div className={`${className} p-8`}>
      <header className="flex justify-between mb-4">
        <h6 className="font-semibold">Lokasi</h6>
        <TextButton title="Lihat Semua" hexColor="#34743A" />
      </header>

      <main className="flex flex-col mt-4 sm:flex-row">
        {locationData.map((location, idx) => {
          return (
            <CompanyLocationItem
              key={idx}
              className="flex-1 mb-4 mr-3 sm:mb-0"
              Icon={location.icon}
              title={location.title}
              value={location.value}
            />
          );
        })}
      </main>
    </div>
  );
};

export default CompanyLocation;
