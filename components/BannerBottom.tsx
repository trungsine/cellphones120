/* eslint-disable @next/next/no-img-element */
import React from "react";

const BannerBottom = () => {
  return (
    <div className="mb-4 max-w-[1200px] px-[10px] mx-auto">
      <a className="rounded-[10px] h-auto ">
        <img
          className="hidden lg:block rounded-[10px] shadow-custom object-fill w-full"
          src="https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:75/q:90/plain/https://dashboard.cellphones.com.vn/storage/s-edu-2-0-special-desk.gif"
          alt=""
        />
        <img
          className="block sm:block lg:hidden max-h-[150px] rounded-[10px] shadow-custom object-fill w-full "
          src="https://cdn2.cellphones.com.vn/insecure/rs:fill:800:150/q:90/plain/https://dashboard.cellphones.com.vn/storage/s-edu-2-0-special-mobile.gif"
          alt=""
        />
      </a>
    </div>
  );
};

export default BannerBottom;
