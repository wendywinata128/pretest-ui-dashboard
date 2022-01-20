import companyBackgroundPicture from "../../assets/building-background.jfif";
import companyLogo from "../../assets/mig-logo.png";
import CompanyActivity from "./company_activity/CompanyActivity";
import CompanyBank from "./company_bank/CompanyBank";
import CompanyInformation from "./company_information/CompanyInformation";
import CompanyLocation from "./company_location/CompanyLocation";
import CompanyRelation from "./company_relation/CompanyRelation";

const CompanyBody = ({ className }) => {
  const companyData = {
    backgroundPicture: companyBackgroundPicture,
    avatar: companyLogo,
    name: "Mitramas Infosys Global",
    type: "Layanan IT",
    status: "Aktif",
    abbre: "MIG",
    address: "Jl. Tebet Raya No.42, Jakarta Selatan",
    responsible: "John Doe",
    pkpDate: "03 Maret 2021",
    email: "mig@mitrasolusi.group",
    telp: "021-5678-1234",
    website: "mitramas.com",
  };

  return (
    <div className={`home-section ${className} flex flex-col lg:flex-row`}>
      <CompanyInformation
        company={companyData}
        className="w-full mr-8 mb-8 lg:w-1/4 lg:mb-0"
      />

      <div className="flex flex-col flex-1">
        <CompanyLocation className="w-full company-section mb-4 " />

        <div className="flex flex-col w-full mt-4 flex-1 lg:flex-row">
          <div className="flex-1 mr-0 flex flex-col lg:mr-4">
            <CompanyBank className="flex-1 company-section mb-4" />
            <CompanyRelation className="flex-1 company-section mt-4 mb-4 lg:mb-0" />
          </div>
          <CompanyActivity className="flex-1 company-section ml-0 mt-4 lg:ml-4 lg:mt-0" />
        </div>
      </div>
    </div>
  );
};

export default CompanyBody;
