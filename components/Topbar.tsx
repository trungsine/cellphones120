import React from "react";
function Topbar() {
  return (
    <div className="bg-[#f6eca2] max-w-full sm:w-full flex justify-center h-[30px]">
      <div className="bg-[#e01434] w-2.5 h-2.5 rounded-full my-auto mx-2.5 pr-2.5"></div>
      <div className="text-[#e01434] no-underline cursor-pointer text-base font-semibold h-8 flex items-center">
        <a href="#" className="text-[11px] md:text-[16px]">
          Trao Tết Ant Deal Ngập Tràn - Chọn quà ngay!
        </a>
      </div>
    </div>
  );
}

export default Topbar;
