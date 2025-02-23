/* eslint-disable @next/next/no-img-element */
import React from "react";

import { listItemMobile } from "@/store/listItemMobile";
// import useStore from "../store/store";

const TestChild = () => {
  //  const [activeIndex, setActiveIndex] = useState<number>(0);
  // const isActive = useStore((state) => state.isActive);
  //  const setIsActive = useStore((state) => state.setIsActive);

  //  const [hoverIndex, setHoverIndex] = useState<number | null>(0);
  //  const [isActive, setIsActive] = useState<boolean>(false);

  //  const handleisActive = () => {
  //    setIsActive(true);
  //  };
  //  const handleisLeave = () => {
  //    setIsActive(false);
  //  };
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

  return (
    <div>
      <div className="relative w-screen h-[400px] overflow-y-auto">
        {listItemMobile.map((currentValue, index) => {
          const backgroundColor = colors[index % colors.length];
          return (
            <React.Fragment key={index}>
              <div
                style={{ backgroundColor }}
                className="relative w-20 h-20 px-[5px] flex flex-col justify-center"
                // onMouseEnter={() => setHoverIndex(index)}
              >
                <img
                  src={currentValue.logo}
                  alt="logo"
                  width={40}
                  height={40}
                  className="mx-auto"
                />
                <a className="text-xs text-[#444] font-bold leading-6 text-center">
                  {currentValue.title}
                </a>
              </div>

              {/* Right */}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default TestChild;
