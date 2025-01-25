import React from "react";
import { IoMdListBox } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="justify-center bg-[#e1042a] w-full flex">
      <div className="header-container w-[1200px] bg-[#e1042a] flex items-center justify-between text-xs text-[#fff] relative h-[64px]">
        <div>
          <img
            className="w-[170px] h-[40px] hidden sm:block"
            src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/logo_cps-1.png"
            alt="logo-cellphones"
          />
        </div>

        <div>
          <img
            className="sm:block w-8 h-8 border border-solid border-white rounded-[10px]"
            src="https://yt3.googleusercontent.com/rK8cTvkOXk2t-f1xlBTsyx4VtHjrKWdBPKHaMTUdxTuQBY3oZ8Gok-H2NZPwp3aJAYO_cRLO=s900-c-k-c0x00ffffff-no-rj"
            alt="logo-cellphones"
          />
        </div>

        <div className="flex items-center hidden sm:block rounded-[10px] cursor-pointer bg-[#df3346] px-[10px] py-[9px]">
          <IoMdListBox className="text-2xl mr-[5px]" />
          <h2 className="text-xs m-0">Danh mục</h2>
        </div>

        <div className="flex items-center hidden sm:block rounded-[10px] cursor-pointer bg-[#df3346] px-[10px] py-[3px]">
          <CiLocationOn className="text-2xl mr-[5px]" />
          <div>
            <div className="flex">
              <p className="text-[10px] font-semibold m-0">Xem giá tại</p>
              <MdKeyboardArrowDown />
            </div>
            <span className="text-sm font-light">Hồ Chí Minh</span>
          </div>
        </div>

        <div className="flex items-center rounded-[10px] bg-white pl-[10px]">
          <FaSearch className="text-gray-500 text-[15px]" />
          <input
            className="outline-none py-[8px] pr-[32px] pl-[6px] rounded-[10px] text-black"
            type="text"
            placeholder="Bạn cần tìm gì?"
          />
        </div>

        <div className="cursor-pointer hidden sm:block h-[42px] flex items-center rounded-[10px] hover:bg-[#df3346] py-[3px] px-[10px]">
          <FiPhone className="text-2xl mr-[5px]" />
          <div>
            <span>
              Gọi mua hàng <br /> 1800.2097
            </span>
          </div>
        </div>

        <div className="cursor-pointer hidden sm:block h-[42px] flex items-center rounded-[10px] hover:bg-[#df3346] py-[3px] px-[10px]">
          <CiLocationOn className="text-2xl mr-[5px]" />

          <h2 className="text-xs m-0">
            Cửa hàng <br /> gần bạn
          </h2>
        </div>

        <div className="cursor-pointer hidden sm:block h-[42px] flex items-center rounded-[10px] hover:bg-[#df3346] py-[3px] px-[10px]">
          <LiaShippingFastSolid className="text-2xl mr-[5px]" />
          <h2 className="text-xs m-0">
            Tra cứu <br /> đơn hàng
          </h2>
        </div>

        <div className="cursor-pointer h-[42px] flex items-center rounded-[10px] hover:bg-[#df3346] py-[3px] px-[10px]">
          <IoBagOutline className="text-2xl mr-[5px]" />

          <h2 className="text-xs m-0">
            Giỏ <br /> hàng
          </h2>
        </div>

        <div className="flex hidden sm:block flex-col items-center text-center py-[3px] px-[10px] rounded-[10px] bg-[#df3346]">
          <FaRegUserCircle className="text-base mr-[5px]" />
          <h2 className="text-xs m-0">Đăng nhập</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
