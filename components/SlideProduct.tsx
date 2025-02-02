import React from "react";
import { CgAppleWatch } from "react-icons/cg";
import { FaChevronRight } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdAutorenew, MdLaptopMac } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import { RiHomeWifiLine } from "react-icons/ri";
import { SlEarphones } from "react-icons/sl";
import { TbBatteryVerticalCharging2 } from "react-icons/tb";

const SlideProduct = () => {
  return (
    <div className="max-w-[1200px] bg-cyan-600 mx-auto grid grid-cols-3 gap-2 mt-3">
      <div className="grid bg-red-400">
        <ul className="w-full">
          <li className="">
            <div className="flex items-center">
              <IoPhonePortraitOutline className="w-6 h-6" />
              <a className="text-xs ">Điện thoại, Tablet</a>
              <div className="flex justify-end">
                <FaChevronRight />
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex items-center">
              <MdLaptopMac className="w-6 h-6" />
              <a className="text-xs ">Laptop</a>
              <div className="flex justify-end">
                <FaChevronRight />
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex items-center">
              <SlEarphones className="w-6 h-6" />
              <a className="text-xs ">Âm thanh</a>
              <div className="flex justify-end">
                <FaChevronRight />
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex items-center">
              <CgAppleWatch className="w-6 h-6" />
              <a className="text-xs ">Đồng hồ, Camera</a>
              <div className="flex justify-end">
                <FaChevronRight />
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex items-center">
              <RiHomeWifiLine className="w-6 h-6" />
              <a className="text-xs ">Đồ gia dụng</a>
              <div className="flex justify-end">
                <FaChevronRight />
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex items-center">
              <TbBatteryVerticalCharging2 className="w-6 h-6" />
              <a className="text-xs ">Phụ kiện</a>
              <div className="flex justify-end">
                <FaChevronRight />
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex items-center">
              <FaComputer className="w-6 h-6" />
              <a className="text-xs ">PC, Màn hình, Máy in</a>
              <div className="flex justify-end">
                <FaChevronRight />
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex items-center">
              <PiTelevision className="w-6 h-6" />
              <a className="text-xs ">Tivi</a>
              <div className="flex justify-end">
                <FaChevronRight />
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex items-center">
              <MdAutorenew className="w-6 h-6" />
              <a className="text-xs ">Thu cũ đổi mới</a>
              <div className="flex justify-end">
                <FaChevronRight />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SlideProduct;
