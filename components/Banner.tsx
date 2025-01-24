import React from "react";
import "../styles/banner.css";

function Banner() {
  return (
    <div className="banner-top-container flex h-10 items-center justify-evenly">
      <div>
        <a href="#">
          <img
            className="h-[30px]"
            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top banner_Giao hang.svg"
            alt=""
          />
        </a>
      </div>
      <div>
        <a href="#">
          <img
            className="h-[30px]"
            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top banner_Chinh hang.svg"
            alt=""
          />
        </a>
      </div>
      <div>
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
