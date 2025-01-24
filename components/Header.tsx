import React from "react";
// import css
import "../styles/header.css";

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
    <div className="header-bgcolor">
      <div className="header-container">
        <div className="header-logo">
          <img
            src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/logo_cps-1.png"
            alt="logo-cellphones"
          />
        </div>

        <div className="header-listBox">
          <IoMdListBox />
          <h2>Danh mục</h2>
        </div>

        <div className="header-locationPrice">
          <CiLocationOn />
          <div>
            <div>
              <h2>Xem giá tại</h2>
              <MdKeyboardArrowDown />
            </div>
            <h2>Hồ Chí Minh</h2>
          </div>
        </div>

        <div className="header-search">
          <FaSearch />
          <input type="text" placeholder="Bạn cần tìm gì?" />
        </div>

        <div className="header-phone">
          <FiPhone />
          <div>
            <span>
              Gọi mua hàng <br /> 1800.2097
            </span>
          </div>
        </div>

        <div className="header-locationStore">
          <CiLocationOn />

          <h2>
            Cửa hàng <br /> gần bạn
          </h2>
        </div>

        <div className="header-truckDelivery">
          <LiaShippingFastSolid />
          <h2>
            Tra cứu <br /> đơn hàng
          </h2>
        </div>

        <div className="header-shoppingBag">
          <IoBagOutline />

          <h2>
            Giỏ <br /> hàng
          </h2>

          {/* <h2>Giỏ hàng</h2> */}
        </div>

        <div className="header-userLogin">
          <FaRegUserCircle />
          <h2>Đăng nhập</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
