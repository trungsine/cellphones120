import React from "react";
import "../styles/banner.css";

function Banner() {
  return (
    <div className="banner-top-container">
      <div className="banner-img">
        <a href="#">
          <img
            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top banner_Giao hang.svg"
            alt=""
          />
        </a>
      </div>
      <div className="banner-img">
        <a href="#">
          <img
            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top banner_Chinh hang.svg"
            alt=""
          />
        </a>
      </div>
      <div className="banner-img">
        <a href="#">
          <img
            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top banner_Smember.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Banner;
