import logo from "../../assets/logo_triangle.png";
import MenuIcon from "../global/MenuIcon";
import { BiHome, BiTask } from "react-icons/bi";
import { FaSearchDollar } from "react-icons/fa";
import { BsBuilding, BsBox, BsCommand } from "react-icons/bs";
import { HiOutlineTicket } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { RiStackLine } from "react-icons/ri";
import { IoTrashBinOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";

const SideBar = () => {
  const listMenu = [
    [
      {
        icon: BiHome,
        action: () => {},
      },
      {
        icon: HiOutlineTicket,
        action: () => {},
      },
      {
        icon: BiTask,
        action: () => {},
      },
      {
        icon: IoTrashBinOutline,
        action: () => {},
      },
      {
        icon: BsBuilding,
        action: () => {},
      },
    ],
    [
      {
        icon: FiUsers,
        action: () => {},
      },
      {
        icon: RiStackLine,
        action: () => {},
      },
      {
        icon: BsBox,
        action: () => {},
      },
      {
        icon: BsCommand,
        action: () => {},
      },
      {
        icon: FaSearchDollar,
        action: () => {},
      },
    ],
    [
      {
        icon: CgNotes,
        action: () => {},
      },
    ],
  ];

  return (
    <div className="overflow-auto fixed bottom-0 left-0 top-0 w-16 bg-white rounded-shadow">
      <header className="my-2">
        <img src={logo} alt="logo" />
      </header>

      {listMenu.map((section, idx) => {
        return (
          <div key={idx} className="w-full py-6">
            {section.map((menu, idx) => {
              return (
                <MenuIcon
                  className="py-4 md:py-2"
                  key={idx}
                  Icon={menu.icon}
                ></MenuIcon>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
