import { buttons } from "@/store/button";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { CgAppleWatch } from "react-icons/cg";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft, FaComputer, FaRegNewspaper } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdAutorenew, MdLaptopMac } from "react-icons/md";
import { PiDeviceRotate, PiTelevision } from "react-icons/pi";
import { RiHomeWifiLine } from "react-icons/ri";
import { SlEarphones } from "react-icons/sl";
import { TbBatteryVerticalCharging2 } from "react-icons/tb";
// import listItems from "@/store/listItems";

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

const images = [
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/samsung-s25-pha-gia-moi-home.png",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/tet-2025-jbl-party-box.jpg",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/oppo-reno-13f-sliding-20-01-2025-v2.jpg",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/huawei-watch-gt5-tet-2025.jpg",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/insta360-sale-tet-ant-2025.jpg"
];

const SlideProduct: React.FC = () => {
  const carouselRef = useRef<CarouselRef | null>(null); // Tham chiếu đến Carousel
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [initialLoad, setInitialLoad] = useState(true);

  // console.log(">>> CurrentSlide: ", currentSlide);

  useEffect(() => {
    // Không cần làm gì trong useEffect này, vì currentSlide đã được cập nhật
    // sau khi carousel chuyển slide nhờ afterChange.
    // Mục đích của useEffect này là để component re-render và cập nhật class
    // cho các button dựa trên currentSlide.
  }, [currentSlide]);

  // useEffect(() => {
  //   setInitialLoad(false); // Đảm bảo initialLoad là false sau lần render đầu tiên
  // }, []);

  const handleButtonClick = (index: number) => {
    setCurrentSlide(index);
    carouselRef.current?.goTo(index);
    setInitialLoad(false);
  };

  // Navigation Button
  const slickPrev = () => {
    carouselRef.current?.prev();
  };

  const slickNext = () => {
    carouselRef.current?.next();
  };

  const onChange = (current: number) => {
    setCurrentSlide(current);
  };

  return (
    <div className="relative overflow-hidden group z-10 max-w-[1200px] bg-white rounded-none sm:rounded-xl mx-auto grid grid-cols-[0%,100%,0%] sm:grid-cols-[19.73%,78.9%,0%] lg:grid-cols-[19.73%,59.16%,19.73%] gap-0 sm:gap-2 mt-3 px-[10px] pt-[10px]">
      {/* Left */}
      <div className=" bg-white shadow-lg rounded-xl overflow-y-auto">
        <ul className="hidden sm:block w-full h-full mb-0">
          {/* {listItems.map((value, index) => {
            return (
              <li className="px-2 py-1" key={index}>
                <div>{value.icons}</div>
                <a href="#">{value.title}</a>
                <FaChevronRight className="ml-auto fill-[#777]" />
              </li>
            );
          })} */}
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
        <div className="w-full h-auto sm:h-[78%] relative">
          <div className="relative overflow-x-hidden overflow-y-auto">
            <Carousel
              className="ant-carousel"
              dots={true}
              ref={carouselRef}
              // autoplay
              // beforeChange={(current, index) => {
              //   setCurrentSlide(index);
              //   setInitialLoad(false); // Đồng bộ trạng thái khi carousel thay đổi
              // }}
              afterChange={onChange} // Sử dụng afterChange để đồng bộ
            >
              {images.map((value, index) => {
                return (
                  <div key={index} className="h-auto">
                    <Image
                      className="rounded-none sm:rounded-tl-2xl sm:rounded-tr-2xl object-contain w-full h-auto"
                      style={contentStyle}
                      src={value}
                      alt="slide"
                      width={500}
                      height={670}
                      quality={100}
                      layout="responsive"
                    />
                  </div>
                );
              })}
            </Carousel>
            <div
              className="absolute inset-0 z-10 flex items-center justify-between transition-opacity duration-300 group-hover:opacity-100 opacity-0"
              style={{ left: "-35px", right: "-35px" }}
            >
              <button
                onClick={slickPrev}
                className=" p-5 rounded-full shadow bg-black opacity-50 text-white-800 text-white"
              >
                <FaChevronLeft
                  size={20}
                  className="pl-2 relative left-[10px]"
                />
              </button>
              <button
                className=" p-5 rounded-full shadow bg-black opacity-50 text-white-800 text-white"
                onClick={slickNext}
              >
                <FaChevronRight
                  size={20}
                  className="pr-2 relative right-[10px]"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="hidden sm:grid grid-cols-5 h-0 sm:h-[22%]">
          {buttons.map((value, index) => {
            return (
              <button
                key={index}
                className={`text-xs text-gray-800 font-medium h-full hover:bg-[#f3f4f6] ${
                  currentSlide === index
                    ? initialLoad
                      ? "border-b-[2.5px]  border-[#d70018]"
                      : "font-semibold  border-b-[2.5px] border-[#d70018]"
                    : ""
                }`}
                onClick={() => handleButtonClick(index)}
              >
                {value.title} <br /> {value.des}
              </button>
            );
          })}
        </div>
        <div className="block sm:hidden h-1 my-5">Div trống</div>
      </div>
      {/* Right */}
      <div className="grid grid-rows-3 h-full gap-3">
        <div className=" rounded-bl-2xl rounded-br-2xl">
          <Image
            height={128}
            width={100}
            quality={100}
            className="rounded-2xl w-full h-full object-cover shadow-2xl"
            alt="right-content"
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/Rightbanner-dienj-thoai-tet.jpg"
          />
        </div>
        <div className=" rounded-bl-2xl rounded-br-2xl ">
          <Image
            height={128}
            width={100}
            quality={100}
            className="rounded-2xl w-full h-full object-cover shadow-2xl"
            alt="right-content"
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/Rightbanner_Laptop.jpg"
          />
        </div>
        <div className=" rounded-bl-2xl rounded-br-2xl">
          <Image
            height={128}
            width={100}
            quality={100}
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
