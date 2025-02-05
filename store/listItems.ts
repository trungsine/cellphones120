// import { PiDeviceRotate, PiTelevision } from "react-icons/pi";
// import { FaComputer } from "react-icons/fa6";
// import { TbBatteryVerticalCharging2 } from "react-icons/tb";
// import { RiHomeWifiLine } from "react-icons/ri";
// import { CgAppleWatch } from "react-icons/cg";
// import { SlEarphones } from "react-icons/sl";
// import { ReactElement, ReactNode } from "react";
// import { MdAutorenew, MdLaptopMac } from "react-icons/md";
// import { IoPhonePortraitOutline } from "react-icons/io5";
// import { HiOutlineSpeakerphone } from "react-icons/hi";
// import { FaRegNewspaper } from "react-icons/fa";

type ListItem = {
  title: string;
  // icons: React.ComponentType;
};

const listItems: ListItem[] = [
  {
    title: "Điện thoại, Tablet"
    // icons: IoPhonePortraitOutline
  },
  {
    title: "Laptop"
    // icons: MdLaptopMac
  },
  {
    title: "Âm thanh"
    // icons: SlEarphones
  },
  {
    title: "Đồng hồ, Camera"
    // icons: CgAppleWatch
  },
  {
    title: "Đồ gia dụng"
    // icons: RiHomeWifiLine
  },
  {
    title: "Phụ kiện"
    // icons: TbBatteryVerticalCharging2
  }
  // { title: "PC, Màn hình, Máy in", icons: FaComputer },
  // { title: "Tivi", icons: PiTelevision },
  // { title: "Thu cũ đổi mới", icons: MdAutorenew },
  // { title: "Hàng cũ", icons: PiDeviceRotate },
  // { title: "Khuyến mãi", icons: HiOutlineSpeakerphone },
  // { title: "Tin công nghệ", icons: FaRegNewspaper }
];

export default listItems;
