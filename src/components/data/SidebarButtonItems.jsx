import { BiSolidInbox, BiSolidStar, BiChevronDown } from "react-icons/bi";
import { MdWatchLater, MdSend, MdLabelImportant } from "react-icons/md";
import { BsFillFileEarmarkFill } from "react-icons/bs";

export const sidebarButtonItems = [
  {
    id: "i1",
    icon: <BiSolidInbox size={20} />,
    text: "Inbox",
  },
  {
    id: "i2",
    icon: <BiSolidStar size={20} />,
    text: "Starred",
  },
  {
    id: "i3",
    icon: <MdWatchLater size={20} />,
    text: "Snoozed",
  },
  {
    id: "i4",
    icon: <MdSend size={20} />,
    text: "Sent",
  },
  {
    id: "i5",
    icon: <BsFillFileEarmarkFill size={20} />,
    text: "Draft",
  },
  {
    id: "i6",
    icon: <MdLabelImportant size={24} />,
    text: "Notes",
  },
  {
    id: "i7",
    icon: <BiChevronDown size={20} />,
    text: "More",
  },
];
