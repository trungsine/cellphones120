import React from "react";

function Banner() {
  return (
    <div className="bg-[#e9efff] flex h-10 items-center justify-evenly">
      <div className="block sm:hidden">
        <a href="#">
          <img
            className="h-[30px]"
            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top banner_Giao hang.svg"
            alt=""
          />
        </a>
      </div>
      <div className="hidden sm:block">
        <a href="#">
          <img
            className="h-[30px]"
            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top banner_Giao hang.svg"
            alt=""
          />
        </a>
      </div>
      <div className="hidden sm:block">
        <a href="#">
          <img
            className="h-[30px]"
            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top banner_Chinh hang.svg"
            alt=""
          />
        </a>
      </div>
      <div className="hidden md:block">
        <a href="#">
          <img
            className="h-[30px]"
            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top banner_Smember.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Banner;
