import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface ContentTitle {
  titleItem: string;
  contentTitleItem: string[];
}

interface ValueType {
  contentTitle: ContentTitle[];
}

interface PopupProps {
  value: ValueType;
}

const Popup: React.FC<PopupProps> = ({ value }) => {
  const [portalContainer, setPortalContainer] = useState<Element | null>(null);
  useEffect(() => {
    const container = document.getElementById("popup-portal");
    if (container) {
      setPortalContainer(container);
    }
    // Chỉ tìm kiếm container khi đã ở client-side
  }, []); // [] đảm bảo useEffect chỉ chạy 1 lần sau render đầu tiên
  if (!portalContainer) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="hidden sm:hidden md:grid grid-cols-5 gap-2 absolute top-0 left-[150px] md:left-[20%] lg:left-[220px] xl:left-[220px] bg-white w-[600px] md:w-[700px] lg:w-[830px] xl:w-[965px] h-[420px] px-[15px] py-[10px] border border-gray-300 shadow-xl rounded-lg z-50">
      {value.contentTitle.map((x, y) => {
        const className = x.contentTitleItem.length <= 3 ? "few-items" : "";
        return (
          <div key={y} className={`" ${className} h-fit "`}>
            <h3 className="font-bold text-[14px] mb-1">{x.titleItem}</h3>
            <ul className="list-disc mb-0">
              {x.contentTitleItem.map((a, b) => (
                <li
                  key={b}
                  className="text-gray-400 list-none text-xs py-1 hover:text-[#d70018] cursor-pointer"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>,
    portalContainer
  );
};

export default Popup;
