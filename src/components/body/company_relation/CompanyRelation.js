import TextButton from "../../global/TextButton";
import CompanyRelationItem from "./CompanyRelationItem";

const CompanyRelation = ({ className }) => {
  const relationData = [
    {
      title: "Memiliki",
      value: 20,
    },
    {
      title: "Menggunakan",
      value: 108,
    },
    {
      title: "Meminjam",
      value: 67,
    },
  ];

  return (
    <div className={`p-8 ${className}`}>
      <header className="flex justify-between mb-4">
        <h6 className="font-semibold">Lokasi</h6>
        <TextButton title="Lihat Semua" hexColor="#34743A" />
      </header>
      <main>
        {relationData.map((relation, idx) => {
          return (
            <CompanyRelationItem
              key={idx}
              relationTitle={relation.title}
              relationValue={relation.value}
              className="my-6"
            />
          );
        })}
      </main>
    </div>
  );
};

export default CompanyRelation;
