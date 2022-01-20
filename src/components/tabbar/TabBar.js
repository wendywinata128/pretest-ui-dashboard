import Avatar from "../../assets/avatar.jpg";
import { BiSearch } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";

const TabBar = () => {
  const companyName = "Mitramas Infosys Global";
  const userInfo = {
    avatar: Avatar,
    nickname: "John Doe",
  };

  return (
    <div className="flex flex-col justify-between md:flex-row">
      <div className="mb-6 md:mb-0">
        <h6 className="text-gray-500">
          Perusahaan {">"} <b className="text-black">{companyName}</b>
        </h6>
      </div>
      <div className="flex items-center justify-between flex-row-reverse md:flex-row">
        <div className="action flex md:mr-16">
          <BiSearch className="cursor-pointer" />
          <GrNotification className="ml-6 cursor-pointer" />
        </div>

        <div className="user-info flex cursor-pointer">
          <img
            src={userInfo.avatar}
            alt="avatar user"
            className="w-6 h-6 rounded-full mr-2"
          />
          <h6>{userInfo.nickname}</h6>
        </div>
      </div>
    </div>
  );
};

export default TabBar;
