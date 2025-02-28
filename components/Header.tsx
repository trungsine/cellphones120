"use client";
import React, { useEffect, useState } from "react";
import { IoMdListBox } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import Image from "next/image";

type HeaderProps = {
  onToggleDropdown: () => void;
};

const Header: React.FC<HeaderProps> = ({ onToggleDropdown }) => {
  const [isLargeScreen, setisLargeScreen] = useState<boolean>(false);
  // Event Resize Cập nhật lại width
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1100px)");
    setisLargeScreen(mediaQuery.matches); // kiểm tra width có match với 1100px

    const handleChange = (e: MediaQueryListEvent) =>
      setisLargeScreen(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="justify-center bg-[#e1042a]  w-full flex">
      <div className="header-container w-[1200px] bg-[#e1042a] flex items-center justify-between px-[10px] lg:justify-between text-xs text-[#fff] relative h-[64px]">
        <div className="hidden sm:hidden lg:flex">
          <Image
            width={170}
            height={49}
            className="block"
            src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/logo_cps-1.png"
            alt="logo-cellphones"
          />
        </div>

        <div className="flex sm:flex lg:hidden">
          <Image
            width={32}
            height={32}
            className="border border-solid border-white rounded-[10px]"
            src="https://yt3.googleusercontent.com/rK8cTvkOXk2t-f1xlBTsyx4VtHjrKWdBPKHaMTUdxTuQBY3oZ8Gok-H2NZPwp3aJAYO_cRLO=s900-c-k-c0x00ffffff-no-rj"
            alt="logo-cellphones"
          />
        </div>

        <div className="items-center  hidden sm:hidden lg:flex rounded-[10px] cursor-pointer bg-[#df3346] px-[10px] py-[9px]">
          <IoMdListBox className="text-2xl mr-[5px]" />
          <h2 className="text-xs m-0">Danh mục</h2>
        </div>

        <div
          onClick={onToggleDropdown}
          className="order-1 lg:order-none items-center flex rounded-[10px] cursor-pointer bg-[#df3346] px-2 md:px-[10px] py-[3px]"
        >
          <CiLocationOn className="text-2xl mx-[5px] md:mr-[5px]" />
          <div>
            <div className="flex">
              <p className="text-[9px] md:text-[10px] font-semibold m-0">
                Xem giá tại
              </p>
              <MdKeyboardArrowDown className="mt-[2px] md:mt-0" />
            </div>
            <span className="text-[10px] md:text-sm font-light">
              Hồ Chí Minh
            </span>
          </div>
        </div>

        <div className="flex grow-[0.5] lg:grow-0 items-center rounded-[10px] bg-white pl-[10px] h-9">
          <FaSearch className="text-gray-500 text-[15px] w-4 h-4" />
          <input
            className="outline-none py-[8px] pr-0 md:pr-[32px] pl-[6px] rounded-[10px] text-black  w-28 md:w-full"
            type="text"
            placeholder="Bạn cần tìm gì?"
          />
        </div>

        <div className="custom">
          <FiPhone className="text-2xl mr-[5px]" />
          <div className="customWidth">
            {isLargeScreen ? (
              <span>
                Gọi mua hàng <br /> 1800.2097
              </span>
            ) : (
              <span>
                Gọi mua <br /> hàng 1800.2097
              </span>
            )}
          </div>
        </div>

        <div className="custom">
          <CiLocationOn className="text-2xl mr-[5px]" />
          <div className="">
            {isLargeScreen ? (
              <span className="text-xs m-0">
                Cửa hàng <br /> gần bạn
              </span>
            ) : (
              <span className="text-xs m-0 ">
                Cửa <br /> hàng gần bạn
              </span>
            )}
          </div>
        </div>

        <div className="cursor-pointer hidden sm:hidden lg:flex h-[42px]  items-center rounded-[10px] hover:bg-[#df3346] py-[3px] px-[10px]">
          <LiaShippingFastSolid className="text-2xl mr-[5px]" />
          <span className="text-xs m-0 ">
            Tra cứu <br /> đơn hàng
          </span>
        </div>

        <div className="order-2 lg:order-none bg-[#df3346] lg:bg-transparent lg:hover:bg-[#df3346] cursor-pointer h-[42px] flex-row lg:flex items-center rounded-[10px] pb-[6px] py-[3px] px-[10px] sm:px-10  md:px-[10px]">
          <div className="flex justify-center md:block ">
            <IoBagOutline className="text-2xl mx-auto" />
          </div>

          <h2 className="text-[9px] md:text-xs  m-0">
            Giỏ
            <span className="hidden lg:inline">
              <br />
            </span>
            hàng
          </h2>
        </div>

        <div className="hidden sm:hidden lg:flex  flex-col items-center text-center py-[3px] px-[10px] rounded-[10px] bg-[#df3346]">
          <FaRegUserCircle className="text-base mr-[5px]" />
          <h2 className="text-xs m-0">Đăng nhập</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
