import { Carousel, Image } from "antd";
import { CarouselRef } from "antd/es/carousel";
import React, { useRef, useState } from "react";
import { CgAppleWatch } from "react-icons/cg";
import { FaChevronRight, FaRegNewspaper } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdAutorenew, MdLaptopMac } from "react-icons/md";
import { PiDeviceRotate, PiTelevision } from "react-icons/pi";
import { RiHomeWifiLine } from "react-icons/ri";
import { SlEarphones } from "react-icons/sl";
import { TbBatteryVerticalCharging2 } from "react-icons/tb";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "300px",
  width: "100%",
  color: "#fff",
  lineHeight: "300px",
  textAlign: "center",
  background: "#364d79",
  objectFit: "cover"
};

type MyCarouselProps = {
  images: string[];
};

const images = [
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/tet-2025-tecno-canon-30s.jpg",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/tet-2025-jbl-party-box.jpg",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/oppo-reno-13f-sliding-20-01-2025-v2.jpg",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/huawei-watch-gt5-tet-2025.jpg",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/insta360-sale-tet-ant-2025.jpg"
];

const SlideProduct: React.FC<MyCarouselProps> = () => {
  const carouselRef = useRef<CarouselRef | null>(null); // Tham chiếu đến Carousel
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false); // state để kiểm tra focus tải trang lần đầu

  const handleButtonClick = (index: number) => {
    setCurrentSlide(index);
    setTimeout(() => {
      carouselRef.current?.goTo(index);
    }, 0);
    setIsFocused(true);
  };

  return (
    <div className="relative  z-10 max-w-[1200px] bg-white mx-auto grid grid-cols-[0%,100%,0%] lg:grid-cols-[19.73%,59.16%,19.73%] gap-2 mt-3 px-[10px] py-[5px]">
      {/* Left */}
      <div className=" bg-white shadow-lg rounded-xl">
        <ul className="w-full h-full mb-0">
          <li className="px-2 py-1">
            <div className="flex items-center">
              <IoPhonePortraitOutline className="w-6 h-6 mr-2" />
              <a className="text-xs font-semibold text-gray-800">
                Điện thoại, Tablet
              </a>
              <FaChevronRight className="ml-auto fill-[#777]" />
            </div>
          </li>
          <li className="px-2 py-1">
            <div className="flex items-center">
              <MdLaptopMac className="w-6 h-6 mr-2" />
              <a className="text-xs font-semibold text-gray-800 ">Laptop</a>

              <FaChevronRight className="ml-auto fill-[#777]" />
            </div>
          </li>
          <li className="px-2 py-1">
            <div className="flex items-center">
              <SlEarphones className="w-6 h-6 mr-2" />
              <a className="text-xs font-semibold text-gray-800 ">Âm thanh</a>

              <FaChevronRight className="ml-auto fill-[#777]" />
            </div>
          </li>
          <li className="px-2 py-1">
            <div className="flex items-center">
              <CgAppleWatch className="w-6 h-6 mr-2" />
              <a className="text-xs font-semibold text-gray-800 ">
                Đồng hồ, Camera
              </a>

              <FaChevronRight className="ml-auto fill-[#777]" />
            </div>
          </li>
          <li className="px-2 py-1">
            <div className="flex items-center">
              <RiHomeWifiLine className="w-6 h-6 mr-2" />
              <a className="text-xs font-semibold text-gray-800 ">
                Đồ gia dụng
              </a>

              <FaChevronRight className="ml-auto fill-[#777]" />
            </div>
          </li>
          <li className="px-2 py-1">
            <div className="flex items-center">
              <TbBatteryVerticalCharging2 className="w-6 h-6 mr-2" />
              <a className="text-xs font-semibold text-gray-800 ">Phụ kiện</a>

              <FaChevronRight className="ml-auto fill-[#777]" />
            </div>
          </li>
          <li className="px-2 py-1">
            <div className="flex items-center">
              <FaComputer className="w-6 h-6 mr-2" />
              <a className="text-xs font-semibold text-gray-800 ">
                PC, Màn hình, Máy in
              </a>

              <FaChevronRight className="ml-auto fill-[#777]" />
            </div>
          </li>
          <li className="px-2 py-1">
            <div className="flex items-center">
              <PiTelevision className="w-6 h-6 mr-2" />
              <a className="text-xs font-semibold text-gray-800 ">Tivi</a>

              <FaChevronRight className="ml-auto fill-[#777]" />
            </div>
          </li>
          <li className="px-2 py-1">
            <div className="flex items-center">
              <MdAutorenew className="w-6 h-6 mr-2" />
              <a className="text-xs font-semibold text-gray-800 ">
                Thu cũ đổi mới
              </a>

              <FaChevronRight className="ml-auto fill-[#777]" />
            </div>
          </li>
          <li className="px-2 py-1">
            <div className="flex items-center">
              <PiDeviceRotate className="w-6 h-6 mr-2" />
              <a className="text-xs font-semibold text-gray-800 ">Hàng cũ</a>

              <FaChevronRight className="ml-auto fill-[#777]" />
            </div>
          </li>
          <li className="px-2 py-1">
            <div className="flex items-center">
              <HiOutlineSpeakerphone className="w-6 h-6 mr-2" />
              <a className="text-xs font-semibold text-gray-800 ">Khuyến mãi</a>

              <FaChevronRight className="ml-auto fill-[#777]" />
            </div>
          </li>
          <li className="px-2 py-1">
            <div className="flex items-center">
              <FaRegNewspaper className="w-6 h-6 mr-2" />
              <a className="text-xs font-semibold text-gray-800 ">
                Tin công nghệ
              </a>

              <FaChevronRight className="ml-auto fill-[#777]" />
            </div>
          </li>
        </ul>
      </div>
      {/* Center */}
      <div className="bg-white w-full h-full flex flex-col rounded-xl shadow-lg">
        <div className="w-full h-[75%]">
          <Carousel dots={false} ref={carouselRef}>
            {images.map((value, index) => {
              return (
                <div key={index}>
                  <Image
                    className="rounded-tl-2xl rounded-tr-2xl object-cover"
                    style={contentStyle}
                    src={value}
                    alt="slide"
                    width={"100%"}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="grid grid-cols-5 h-[25%] mt-2">
          <button
            className={`text-xs text-gray-800 font-medium h-full ${
              currentSlide === 0 && isFocused
                ? "font-semibold bg-[#f3f4f6] border-b-[2.5px] border-[#d70018]"
                : ""
            }`}
            onClick={() => handleButtonClick(0)}
          >
            GALAXY S25 ULTRA <br /> Đặt trước ngay
          </button>
          <button
            className={`text-xs text-gray-800 font-medium h-full ${
              currentSlide === 1 && isFocused
                ? "font-semibold bg-[#f3f4f6] border-b-[2.5px] border-[#d70018]"
                : ""
            }`}
            onClick={() => handleButtonClick(1)}
          >
            JBL PARTY BOX <br /> Sôi động đón xuân
          </button>
          <button
            className={`text-xs text-gray-800 font-medium h-full ${
              currentSlide === 2 && isFocused
                ? "font-semibold bg-[#f3f4f6] border-b-[2.5px] border-[#d70018]"
                : ""
            }`}
            onClick={() => handleButtonClick(2)}
          >
            OPPO RENO 13F <br /> Siêu mượt
          </button>
          <button
            className={`text-xs text-gray-800 font-medium h-full ${
              currentSlide === 3 && isFocused
                ? "font-semibold bg-[#f3f4f6] border-b-[2.5px] border-[#d70018]"
                : ""
            }`}
            onClick={() => handleButtonClick(3)}
          >
            HUAWEI WATCH GT5 <br /> Phong cách mới
          </button>
          <button
            className={`text-xs text-gray-800 font-medium h-full ${
              currentSlide === 4 && isFocused
                ? "font-semibold bg-[#f3f4f6] border-b-[2.5px] border-[#d70018]"
                : ""
            }`}
            onClick={() => handleButtonClick(4)}
          >
            INSTA360 <br /> Khuyến mãi khủng
          </button>
        </div>
      </div>
      {/* Right */}
      <div className="grid grid-rows-3 h-full">
        <div className=" rounded-bl-2xl rounded-br-2xl">
          <Image
            style={{ height: "128px" }}
            className="rounded-2xl w-full h-full object-cover shadow-2xl"
            alt="right-content"
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/Rightbanner-dienj-thoai-tet.jpg"
          />
        </div>
        <div className=" rounded-bl-2xl rounded-br-2xl ">
          <Image
            style={{ height: "128px" }}
            className="rounded-2xl w-full h-full object-cover shadow-2xl"
            alt="right-content"
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/Rightbanner_Laptop.jpg"
          />
        </div>
        <div className=" rounded-bl-2xl rounded-br-2xl">
          <Image
            style={{ height: "128px" }}
            className="rounded-2xl w-full h-full object-cover shadow-2xl"
            alt="right-content"
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/Rightbanner_Phu-kien.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default SlideProduct;
