import CompanyActivityItem from "./CompanyActivityItem";

const CompanyActivity = ({ className }) => {
  const activityData = [
    {
      desc: "Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa",
      date: "Hari ini, 06:00",
    },
    {
      desc: "Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet",
      date: "Kemaren, 17:32",
    },
    {
      desc: "Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi",
      date: "Kemaren, 17:32",
    },
  ];

  return (
    <div className={`p-8 ${className}`}>
      <header className="flex justify-between mb-4">
        <h6 className="font-semibold">Aktivitas</h6>
      </header>

      <main>
        {activityData.map((activity, idx) => {
          return (
            <CompanyActivityItem
              key={idx}
              desc={activity.desc}
              date={activity.date}
              className="my-6"
            />
          );
        })}
      </main>
    </div>
  );
};

export default CompanyActivity;
