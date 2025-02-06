import { PiDeviceRotate, PiTelevision } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";
import { TbBatteryVerticalCharging2 } from "react-icons/tb";
import { RiHomeWifiLine } from "react-icons/ri";
import { CgAppleWatch } from "react-icons/cg";
import { SlEarphones } from "react-icons/sl";
import { ReactNode } from "react";
import { MdAutorenew, MdLaptopMac } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaRegNewspaper } from "react-icons/fa";

type ListItem = {
  title: string;
  icons: ReactNode;
};

const listItems: ListItem[] = [
  {
    title: "Điện thoại, Tablet",
    icons: typeof IoPhonePortraitOutline
  },
  {
    title: "Laptop",
    icons: typeof MdLaptopMac
  },
  {
    title: "Âm thanh",
    icons: typeof SlEarphones
  },
  {
    title: "Đồng hồ, Camera",
    icons: typeof CgAppleWatch
  },
  {
    title: "Đồ gia dụng",
    icons: typeof RiHomeWifiLine
  },
  {
    title: "Phụ kiện",
    icons: typeof TbBatteryVerticalCharging2
  },
  { title: "PC, Màn hình, Máy in", icons: typeof FaComputer },
  { title: "Tivi", icons: typeof PiTelevision },
  { title: "Thu cũ đổi mới", icons: typeof MdAutorenew },
  { title: "Hàng cũ", icons: typeof PiDeviceRotate },
  { title: "Khuyến mãi", icons: typeof HiOutlineSpeakerphone },
  { title: "Tin công nghệ", icons: typeof FaRegNewspaper }
];

export default listItems;
