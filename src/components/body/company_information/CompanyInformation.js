import TextButton from "../../global/TextButton";
import { HiOutlinePencil } from "react-icons/hi";
import TextTitleValue from "../../global/TextTitleValue";
import Switch from "../../global/Switch";

const CompanyInformation = ({ company, className }) => {
  return (
    <div className={`company-section pb-4 ${className}`}>
      <header className="flex-col items-center flex">
        <img
          src={company.backgroundPicture}
          alt="background logo"
          className="h-24 w-full object-cover"
        />
        <div className="avatar-container rounded-full rounded-shadow w-28 h-28 flex items-center p-4 -translate-y-2/4 bg-white">
          <img src={company.avatar} alt="logo" />
        </div>

        <h5 className="text-lg font-bold text-center w-full">
          Mitramas Infosys Global
        </h5>
        <span className="text-sm text-gray-600">Layanan IT</span>
        <TextButton
          title="Sunting Profil"
          Icon={HiOutlinePencil}
          className="my-6"
          hexColor="#417D47"
        />
      </header>

      <main className="px-4 py-2">
        <TextTitleValue
          title="Status Perusahaan"
          value={company.status}
          valueHexColor="#34743A"
          valueClassName="font-bold"
          suffixComponent={<Switch />}
        />
        <TextTitleValue title="Singkatan" value={company.abbre} />
        <TextTitleValue title="Alamat" value={company.address} />
        <TextTitleValue title="Penanggung Jawab" value={company.responsible} />
        <TextTitleValue title="Tanggal PKP" value={company.pkpDate} />
        <TextTitleValue
          title="Email"
          value={company.email}
          valueHexColor="#34743A"
          valueClassName="underline underline-offset-4"
        />
        <TextTitleValue
          title="No. Telp"
          value={company.telp}
          valueHexColor="#34743A"
        />
        <TextTitleValue
          title="Situs Web"
          value={company.website}
          valueHexColor="#34743A"
          valueClassName="underline underline-offset-4"
        />
      </main>
    </div>
  );
};

export default CompanyInformation;
