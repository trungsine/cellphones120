/* eslint-disable @next/next/no-img-element */
import { buttons } from "@/store/button";
import listItems from "@/store/listItems";
import { Carousel } from "antd";
import "antd/dist/reset.css";
import { CarouselRef } from "antd/es/carousel";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import Popup from "./Popup";
// import listItems from "@/store/listItems";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "294px",
  width: "100%",
  color: "#fff",
  lineHeight: "294px",
  textAlign: "center",
  background: "#364d79",
  objectFit: "fill"
};

const images = [
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/tet-2025-jbl-party-box.jpg",
  "https://plus.unsplash.com/premium_photo-1691954120246-e2586bf209e5?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/oppo-reno-13f-sliding-20-01-2025-v2.jpg",
  "https://forum.codeigniter.com/uploads/avatars/avatar_77116.png?dateline=1685711587",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/insta360-sale-tet-ant-2025.jpg",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/nothing-6-2-25-home.png",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/dong-ho-thong-minh-riversong-glow-sw906-home.jpg",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/tecno-camon-30-pro-tai-nghe-home.jpg",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/Ultra-WWide-iphone-16-pro-len-doi-home-6-2.jpg",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/redmi-note-14-series-tet-ant.jpg"
];

interface SlideProductProps {
  id: string;
}

const SlideProduct: React.FC<SlideProductProps> = () => {
  const carouselRef = useRef<CarouselRef | null>(null); // Tham chiếu đến Carousel
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  // const [popupPosition, setPopupPosition] = useState({ right: 0 });

  useEffect(() => {}, [currentSlide]);

  // useEffect(() => {
  //   setInitialLoad(false); // Đảm bảo initialLoad là false sau lần render đầu tiên
  // }, []);

  const handleButtonClick = (index: number) => {
    setCurrentSlide(index);
    carouselRef.current?.goTo(index);

    setInitialLoad(false);
  };

  // useEffect(() => {
  //   // Lấy vị trí top của item đầu tiên khi component được render hoặc listItems thay đổi
  //   if (listItems.length > 0) {
  //     const firstItem = document.querySelector('.group:first-child'); // Chọn phần tử đầu tiên có class "group"
  //     if (firstItem) {
  //       const rect = firstItem.getBoundingClientRect();
  //       setPopupPosition({
  //         top: rect.top + window.scrollY, // Cộng thêm scrollY để lấy vị trí top trên toàn trang
  //         left: rect.left + 10, // Vị trí left tùy chỉnh
  //       });
  //     }
  //   }
  // }, [listItems]); // Chạy useEffect khi listItems thay đổi

  //  const handleMouseEnter = () => {
  //   setHoverIndex(0); // Luôn hiển thị popup ở item đầu tiên
  // };

  // const handleMouseLeave = () => {
  //   setHoverIndex(null); // Ẩn popup khi rời chuột
  // };

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  // Navigation Button
  const slickPrev = () => {
    carouselRef.current?.prev();
    // Sau khi carousel chuyển slide, hãy cuộn đến item active
    scrollToActiveItem();
  };

  const slickNext = () => {
    carouselRef.current?.next();
    // Sau khi carousel chuyển slide, hãy cuộn đến item active
    scrollToActiveItem();
  };

  const scrollToActiveItem = () => {
    if (containerRef.current) {
      const activeItem = containerRef.current.querySelector(".active");

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      activeItem &&
        activeItem.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }
  };

  useEffect(() => {
    scrollToActiveItem();
  }, [currentSlide, containerRef]);

  const onChange = (current: number) => {
    setCurrentSlide(current);
  };

  return (
    <div className="relative  h-[322px] md:h-[320px]  lg:h-[376px] group z-10 max-w-[1200px] bg-white rounded-none sm:rounded-xl mx-auto grid grid-cols-[0%,100%,0%] md:grid-rows- md:grid-cols-[20%,80%,0%] lg:grid-cols-[19%,59%,22%] gap-0 my-4 px-[10px] pt-0 ">
      {/* Left */}
      <div
        className=" bg-white max-w-[220px]  md:h-[320px] lg:h-full  boxShadow-custom rounded-xl overflow-y-auto"
        id="popup-portal"
      >
        <div className="hidden sm:grid grid-rows-12 min-h-[376px] flex-col w-full h-full mb-0 ">
          {listItems.map((value, index) => {
            return (
              <div
                className="px-2 relative "
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className="flex items-center relative">
                  {React.createElement(value.icons, { size: 24 })}
                  <a
                    href="#"
                    className="text-xs font-semibold text-gray-800 pl-2"
                  >
                    {value.title}
                  </a>
                  <FaChevronRight className="ml-auto fill-[#777]" />
                </div>
                {/* Hover Popup Show */}
                {hoverIndex === index && <Popup value={value} />}
              </div>
            );
          })}
        </div>
      </div>
      {/* Center */}
      <div className="max-w-[672px] w-full h-0 bg-red-300 md:h-[320px] lg:h-full max-h[376px]  flex flex-col rounded-xl mx-auto boxShadow-custom">
        {/* Top 294px */}
        <div className="bg-red-600 h-full w-full md:min-h-[259px] max-h-[294px] relative ">
          {/* Carousel */}
          <div className="absolute overflow-hidden md:h-[259px] lg:h-full  w-full">
            <Carousel
              className="bg-transparent object-fill md:h-[259px] lg:h-full"
              dots={true}
              // autoplay
              ref={carouselRef}
              afterChange={onChange} // Sử dụng afterChange để đồng bộ
            >
              {images.map((value, index) => {
                return (
                  <div key={index} className="">
                    <img
                      className="relative rounded-xl md:rounded-none  object-fill w-full"
                      style={contentStyle}
                      src={value}
                      alt="slide"
                      // width={669}
                      // height={500}
                      // quality={100}
                      // layout="responsive"
                    />
                  </div>
                );
              })}
            </Carousel>

            {/* Button Hover Carousel */}
            <div
              className="absolute  scrollbar-hide  inset-0 z-10 flex items-center justify-between transition-opacity duration-300 group-hover:opacity-100 opacity-0"
              style={{ left: "-35px", right: "-35px" }}
            >
              <button
                onClick={slickPrev}
                className=" p-5 rounded-full boxShadow-custom bg-black opacity-50 text-white-800 text-white"
              >
                <FaChevronLeft
                  size={20}
                  className="pl-2 relative left-[10px]"
                />
              </button>
              <button
                className=" p-5 rounded-full boxShadow-custom bg-black opacity-50 text-white-800 text-white"
                onClick={slickNext}
              >
                <FaChevronRight
                  size={20}
                  className="pr-2 relative right-[10px]"
                />
              </button>
            </div>
            {/* End Button Hover Carousel */}
          </div>
          {/* End carousel */}
        </div>

        {/* Bottom 82px */}
        {/* Buttons Navigate */}
        <div
          className="bg-white hidden sm:rounded-bl-xl sm:rounded-br-xl md:flex w-full overflow-x-auto overflow-y-hidden scrollbar-hide h-full min-h-[61px] max-h-[82px]"
          ref={containerRef}
        >
          {buttons.map((value, index) => (
            <div
              key={index}
              className={`w-[20%] md:w-[25%]  shrink-0 justify-center flex hover:bg-[#f3f4f6] ${
                currentSlide === index ? "active" : ""
              } ${
                currentSlide === index && initialLoad
                  ? "border-b-[2.5px] border-[#d70018]"
                  : currentSlide === index && !initialLoad // Added check for !initialLoad
                  ? "font-semibold border-b-[2.5px] border-[#d70018]"
                  : ""
              }`}
            >
              <button
                className="text-xs whitespace-nowrap text-gray-800 font-medium h-full "
                onClick={() => handleButtonClick(index)}
              >
                {value.title} <br /> {value.des}
              </button>
            </div>
          ))}
        </div>
        {/* End Button Navigate */}
      </div>
      {/* Right */}
      <div className="grid grid-rows-3 h-full max-h-[376px] max-w-[258px] gap-3">
        <div className=" rounded-bl-2xl rounded-br-2xl">
          <Image
            height={128}
            width={100}
            quality={100}
            className="rounded-2xl w-full h-full object-cover boxShadow-custom"
            alt="right-content"
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/Rightbanner-dienj-thoai-tet.jpg"
          />
        </div>
        <div className=" rounded-bl-2xl rounded-br-2xl ">
          <Image
            height={128}
            width={100}
            quality={100}
            className="rounded-2xl w-full h-full object-cover boxShadow-custom"
            alt="right-content"
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/Rightbanner_Laptop.jpg"
          />
        </div>
        <div className=" rounded-bl-2xl rounded-br-2xl">
          <Image
            height={128}
            width={100}
            quality={100}
            className="rounded-2xl w-full h-full object-cover boxShadow-custom"
            alt="right-content"
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/Rightbanner_Phu-kien.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default SlideProduct;
