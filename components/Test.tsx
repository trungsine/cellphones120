import React, { useState } from "react";
import { CgMoreR } from "react-icons/cg";
import { CiViewList } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { IoStorefrontOutline } from "react-icons/io5";
import { LuCircleUser } from "react-icons/lu";
import useStore from "../store/store";
const Test = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  // const isActive = useStore((state) => state.isActive);
  const setIsActive = useStore((state) => state.setIsActive);

  // const [hoverIndex, setHoverIndex] = useState<number | null>(0);
  // const [isActive, setIsActive] = useState<boolean>(false);

  const handleisActive = () => {
    setIsActive(true);
  };
  const handleisLeave = () => {
    setIsActive(false);
  };
  return (
    <div className="block md:hidden sticky top-0 h-[72px] py-[10px] border border-solid  rounded-t-2xl">
      <ul className="flex justify-around h-full items-center mb-0">
        <li className="p-[5px]">
          <a
            className={`text-xs text-[#707070] font-semibold hover:text-[#d70018] ${
              activeIndex === 0 ? "active" : ""
            }`}
            onMouseEnter={() => setActiveIndex(0)}
            onClick={handleisLeave}
          >
            <GoHome className="mx-auto w-[25px] h-[25px]" />
            Trang chủ
          </a>
        </li>
        <li className="p-[5px]">
          <a
            className={`text-xs text-[#707070] font-semibold hover:text-[#d70018] ${
              activeIndex === 1 ? "active" : ""
            }`}
            onMouseEnter={() => setActiveIndex(1)}
            onClick={handleisActive}
          >
            <CiViewList className="mx-auto w-[25px] h-[25px]" />
            Danh mục
          </a>
        </li>
        <li className="p-[5px]">
          <a
            className={`text-xs text-[#707070] font-semibold hover:text-[#d70018] ${
              activeIndex === 2 ? "active" : ""
            }`}
            onMouseEnter={() => setActiveIndex(2)}
          >
            <IoStorefrontOutline className="mx-auto w-[25px] h-[25px]" />
            Cửa hàng
          </a>
        </li>
        <li className="p-[5px]">
          <a
            className={`text-xs text-[#707070] font-semibold hover:text-[#d70018] ${
              activeIndex === 3 ? "active" : ""
            }`}
            onMouseEnter={() => setActiveIndex(3)}
          >
            <LuCircleUser className="mx-auto w-[25px] h-[25px]" />
            Đăng nhập
          </a>
        </li>
        <li className="p-[5px]">
          <a
            className={`text-xs text-[#707070] font-semibold hover:text-[#d70018] ${
              activeIndex === 4 ? "active" : ""
            }`}
            onMouseEnter={() => setActiveIndex(4)}
          >
            <CgMoreR className="mx-auto w-[25px] h-[25px]" />
            Xem thêm
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Test;
