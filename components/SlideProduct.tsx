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

// const contentStyle: React.CSSProperties = {
//   margin: 0,
//   height: "294px",
//   width: "100%",
//   color: "#fff",
//   lineHeight: "294px",
//   textAlign: "center",
//   background: "#364d79",
//   objectFit: "fill"
// };
const mdStyle: React.CSSProperties = {
  margin: 0,
  height: "259px",
  width: "100%",
  color: "#fff",
  lineHeight: "259px",
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
    <div className="relative  h-[287px] md:h-[322px]  lg:h-[376px] group z-10 max-w-[1200px] bg-white rounded-none sm:rounded-xl mx-auto grid grid-cols-[0%,100%,0%] md:grid-rows- md:grid-cols-[20%,80%,0%] lg:grid-cols-[19%,59%,22%] gap-0 my-4 px-[10px] pt-0 ">
      {/* Left */}
      <div
        className=" bg-white max-w-[220px]  md:h-[322px] lg:h-full  boxShadow-custom rounded-xl overflow-y-auto"
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
      <div className="w-100vw h-100vh  w-full h-0 bg-red-300  md:h-[320px] lg:h-full max-h[376px]  grid md:grid-rows-[259px,62px] lg:grid-rows-[294px,82px] rounded-xl mx-auto boxShadow-custom">
        {/* Top 294px */}
        <div className="min-h-[259px] relative ">
          {/* Carousel */}
          <div className="absolute overflow-x-hidden  object-fill  lg:h-full  w-full">
            <Carousel
              className="bg-transparent  "
              dots={true}
              // autoplay
              ref={carouselRef}
              afterChange={onChange} // Sử dụng afterChange để đồng bộ
            >
              {images.map((value, index) => {
                return (
                  <div key={index} className="">
                    <img
                      className="bg-red-300 md:h-[259px] lg:h-[294px] rounded-xl md:rounded-none  w-full "
                      style={mdStyle}
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
        {/* End Button Navigate */}
        <div
          className="xinchao bg-white hidden sm:rounded-bl-xl sm:rounded-br-xl md:flex w-full overflow-x-auto overflow-y-hidden scrollbar-hide h-full md:h-16  lg:h-[82px]"
          ref={containerRef}
        >
          {buttons.map((value, index) => (
            <div
              key={index}
              className={`md:w-[25%] lg:w-[20%] shrink-0  justify-center flex hover:bg-[#f3f4f6] ${
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
