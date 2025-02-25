/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { CiViewList } from "react-icons/ci";
import { IoStorefrontOutline } from "react-icons/io5";
import { LuCircleUser } from "react-icons/lu";
import { CgMoreR } from "react-icons/cg";
import { listItemMobile } from "@/store/listItemMobile";
// zustand
import useStore from "../store/store";

const MenuBottom = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isActive = useStore((state) => state.isActive);
  const setIsActive = useStore((state) => state.setIsActive);

  const [hoverIndex, setHoverIndex] = useState<number | null>(0);
  // const [isActive, setIsActive] = useState<boolean>(false);

  const indexValue: number[] = [];

  const colors = [
    "rgb(253,180,180)",
    "rgb(255,237,213)",
    "rgb(254,226,226)",
    "rgb(254, 249, 195)",
    "rgb(224, 231, 255)",
    "rgb(224, 242, 254)",
    "white",
    "rgb(224, 242, 254)",
    "white",
    "rgb(237, 233, 254)",
    "rgb(237, 233, 254)",
    "rgb(250, 232, 255)",
    "rgb(204, 251, 241)",
    "rgb(204, 251, 241)"
  ];

  const handleisActive = () => {
    setIsActive(true);
  };
  const handleisLeave = () => {
    setIsActive(false);
  };

  console.log(hoverIndex);

  return (
    <>
      {/* Popup Active */}
      {isActive ? (
        <>
          <div className="block md:hidden relative">
            {/* Left */}
            <div className="relative h-[400px] overflow-y-auto scrollbar-hide">
              {listItemMobile.map((currentValue, index) => {
                const backgroundColor = colors[index % colors.length];
                indexValue.push(index);
                return (
                  <>
                    <div
                      key={index}
                      style={{ backgroundColor }}
                      className="relative w-20  px-[5px] h-20 flex flex-col justify-center overflow-hidden"
                      onMouseEnter={() => setHoverIndex(index)}
                    >
                      <img
                        src={currentValue.logo}
                        alt="logo"
                        width={40}
                        height={40}
                        className="mx-auto"
                      />
                      <a className=" text-xs text-[#444]  font-bold  text-center">
                        {currentValue.title}
                      </a>
                    </div>
                  </>
                );
              })}
            </div>

            {/*   Right */}
            <div className="p-[10px] absolute top-0 left-20 max-w-[687px] h-[400px]  overflow-y-auto scrollbar-hide ">
              {listItemMobile.map((a, b) => {
                return (
                  <div key={b}>
                    {hoverIndex === b && (
                      <>
                        <div className="flex justify-between">
                          <a href="" className=" text-[#444] font-bold">
                            {a.titleLeft}
                          </a>
                          <a href="" className="text-sm text-[#444]">
                            {a.titleRight}
                          </a>
                        </div>
                        {a.contentTitle.map((c, d) => {
                          return (
                            <>
                              <strong className="text-base text-[#363636] font-bold">
                                {c.titleItem}
                              </strong>
                              <div key={d} className="overflow-y-auto">
                                <div className="flex flex-wrap  custom-width-mobile ">
                                  {c.contentTitleItem.map(
                                    (valueChild, index) => {
                                      // const isUrl = valueChild.startsWith("https")
                                      return (
                                        <div
                                          key={index}
                                          className={`${
                                            valueChild.contentTitleDes &&
                                            valueChild.contentTitleImg
                                              ? "flex-col"
                                              : ""
                                          }  flex items-center my-[5px] mr-[10px]  px-[10px] py-[5px] border border-solid border-[#d1d5db] rounded-[10px] `}
                                        >
                                          {valueChild.contentTitleImg ? (
                                            <div className="w-[50px] h-fit">
                                              <img
                                                src={valueChild.contentTitleImg}
                                                alt=""
                                                className=""
                                              />
                                            </div>
                                          ) : null}

                                          {valueChild.contentTitleDes ? (
                                            <div className="">
                                              <a className="w-full h-full text-xs  text-[#4a4a4a] ">
                                                {valueChild.contentTitleDes}
                                              </a>
                                            </div>
                                          ) : null}
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : null}
      {/* Bottom */}
      <div className="block md:hidden z-50 sticky top-0 h-[72px] py-[10px] border border-solid  rounded-t-2xl">
        <ul className="flex justify-around h-full items-center mb-0">
          <li className="p-[5px]">
            <a
              className={`text-xs text-[#707070] font-semibold hover:text-[#d70018] ${
                activeIndex === 0 ? "active" : ""
              }`}
              onMouseEnter={() => setActiveIndex(0)}
              onClick={handleisLeave}
            >
              <GoHome className="mx-auto w-[25px] h-[25px]" />
              Trang chủ
            </a>
          </li>
          <li className="p-[5px]">
            <a
              className={`text-xs text-[#707070] font-semibold hover:text-[#d70018] ${
                activeIndex === 1 ? "active" : ""
              }`}
              onMouseEnter={() => setActiveIndex(1)}
              onClick={handleisActive}
            >
              <CiViewList className="mx-auto w-[25px] h-[25px]" />
              Danh mục
            </a>
          </li>
          <li className="p-[5px]">
            <a
              className={`text-xs text-[#707070] font-semibold hover:text-[#d70018] ${
                activeIndex === 2 ? "active" : ""
              }`}
              onMouseEnter={() => setActiveIndex(2)}
            >
              <IoStorefrontOutline className="mx-auto w-[25px] h-[25px]" />
              Cửa hàng
            </a>
          </li>
          <li className="p-[5px]">
            <a
              className={`text-xs text-[#707070] font-semibold hover:text-[#d70018] ${
                activeIndex === 3 ? "active" : ""
              }`}
              onMouseEnter={() => setActiveIndex(3)}
            >
              <LuCircleUser className="mx-auto w-[25px] h-[25px]" />
              Đăng nhập
            </a>
          </li>
          <li className="p-[5px]">
            <a
              className={`text-xs text-[#707070] font-semibold hover:text-[#d70018] ${
                activeIndex === 4 ? "active" : ""
              }`}
              onMouseEnter={() => setActiveIndex(4)}
            >
              <CgMoreR className="mx-auto w-[25px] h-[25px]" />
              Xem thêm
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuBottom;
