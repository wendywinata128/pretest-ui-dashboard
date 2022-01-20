import Button from "../../global/Button";
import { BiPlus } from "react-icons/bi";
import CompanyBankItem from "./CompanyBankItem";

const CompanyBank = ({ className }) => {
  const bankAccount = [
    {
      startColor: "#F3D800",
      endColor: "#7FA20B",
      cardType: "VISA",
      bankName: "Bank KB Bukopin",
      number: "**** 0876",
      name: "Yusron Taufiq",
      currency: "IDR",
    },
    {
      startColor: "#31A1BD",
      endColor: "#66CFE8",
      cardType: "VISA",
      bankName: "Citibank, NA",
      number: "**** 5525",
      name: "Si Tampan",
      currency: "USD",
    },
  ];

  return (
    <div className={`p-8 ${className}`}>
      <header className="flex flex-col justify-between mb-4 items-center md:flex-row">
        <h6 className="font-semibold mb-4 text-left w-full md:w-fit md:mb-0">
          Akun Bank
        </h6>
        <Button
          title="Tambah Akun Bank"
          Icon={BiPlus}
          bgColor="#34743A"
          textColor="#FFF"
          className="w-full md:w-fit"
        />
      </header>
      <div>
        {bankAccount.map((account, idx) => {
          return (
            <CompanyBankItem
              key={idx}
              startColor={account.startColor}
              endColor={account.endColor}
              bankName={account.bankName}
              number={account.number}
              name={account.name}
              currency={account.currency}
              className="my-8"
            />
          );
        })}
      </div>
    </div>
  );
};

export default CompanyBank;
