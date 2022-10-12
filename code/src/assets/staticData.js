import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { CgToolbox } from "react-icons/cg";
import { BiCategory } from "react-icons/bi";
import { CgAttachment } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { VscTasklist } from "react-icons/vsc";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";

export const menubarData = [
  {
    id: 1,
    value: "Dashboard",
    icon: <AiOutlineHome />,
    type: "button",
    selected: false,
  },

  {
    id: 2,
    value: "My Profile",
    icon: <AiOutlineUser />,
    type: "button",
    selected: true,
  },
  {
    id: 3,
    value: "Seller",
    icon: <CgToolbox />,
    type: "dropdown",
    selected: false,
  },
  {
    id: 4,
    value: "Category",
    icon: <BiCategory />,
    selected: false,
    type: "button",
  },
  {
    id: 5,
    value: "Attribute",
    icon: <CgAttachment />,
    type: "button",
    selected: false,
  },
  {
    id: 6,
    value: "Brands",
    icon: <CgAttachment />,
    type: "button",
    selected: false,
  },
  {
    id: 7,
    value: "Conversations",
    icon: <TiMessages />,
    type: "button",
    selected: false,
  },
  {
    id: 8,
    value: "Enquiry Center",
    icon: <VscTasklist />,
    type: "button",
    selected: false,
  },
  {
    id: 9,
    value: "Contacts Us",
    icon: <BsTelephone />,
    type: "button",
    selected: false,
  },
  {
    id: 10,
    value: "Contacts List",
    icon: <TiMessages />,
    type: "button",
    selected: false,
  },

  {
    id: 11,
    value: "Activities",
    icon: <TiMessages />,
    type: "button",
    selected: false,
  },
  {
    id: 12,
    value: "Account Preferences",
    icon: <TiMessages />,
    type: "button",
    selected: false,
  },

  {
    id: 13,
    value: "Log Out",
    icon: <AiOutlineLogout />,
    type: "Logout",
    selected: false,
  },
];
