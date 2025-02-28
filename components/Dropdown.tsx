"use client";
import React, { useState } from "react";
import { listLocations } from "@/store/listLocations";
import { IoSearch } from "react-icons/io5";

type DropdownProps = {
  onToggleDropdown: () => void;
};

const Dropdown: React.FC<DropdownProps> = ({ onToggleDropdown }) => {
  const handleClickInsideDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    /** ngăn event của chuột tránh truyền cho thành phần cha.Đảm bảo
     * khi user click vào dropdown, thì chỉ dropdown nhận event và các
     * thành phần của dropdown
     */
  };

  // state lưu trữ value của input
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //lấy ra value khi người dùng nhập lưu vào state
    setInputValue(e.target.value);
    console.log(">>> Input Value: ", inputValue);
  };

  // Lọc listlocations để chỉ hiển thị các tỉnh/thành có chứa inputValue
  const filterLocations = inputValue
    ? listLocations.filter((location) =>
        // kiểm tra trong location có input value không có thì sẽ giữ lại trong mảng filterLocations
        location.toLowerCase().includes(inputValue.toLowerCase())
      )
    : listLocations;

  return (
    // Overlay
    <div
      onClick={onToggleDropdown}
      className="fixed inset-0 bg-black bg-opacity-50 fadeIn z-50"
    >
      <div
        onClick={handleClickInsideDropdown} //Ngừng propagation khi click vào dropdown
        className="fadeIn  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50  max-h-[400px] min-h-[400px] w-[400px] p-[15px] max-w-[500px] mx-auto mt-3 justify-between rounded-md"
      >
        <div className="flex justify-between bg-red-600 w-full rounded-tl-[8px] rounded-tr-[8px] border-t border-l border-r border-solid border-gray-300">
          {/* <Select
            className="p-3"
            mode="tags"
            style={{ width: "80%" }}
            placeholder="Nhập tên tỉnh thành"
            defaultValue={[]}
            onChange={handleChange}
            options={options}
            optionRender={(option) => (
              <Space className="">
                <span role="img" aria-label={option.data.label}>
                  {option.data.emoji}
                </span>
                {option.data.desc}
              </Space>
            )}
          /> */}
          <form action="" className="p-3">
            <div className="relative flex items-center  text-gray-400 focus-within:text-gray-600">
              <IoSearch className="w-5 h-5 absolute ml-2" />
              <input
                onChange={handleInputChange}
                type="text"
                name="search"
                placeholder="Nhập tên tỉnh thành"
                autoComplete="off"
                aria-label="Nhập tên tỉnh thành"
                className="
              pr-10 pl-10
              py-3 
              font-light
              placeholder-gray-300
              rounded-md 
              border-none
              focus:border-[#b62616] focus:shadow-[0_0_0_0.125em_#b62616]"
              />
            </div>
          </form>
          <button
            onClick={onToggleDropdown}
            className="mr-auto border-none hover:bg-[$#df3346] outline-none text-white text-[16px] font-semibold"
          >
            Đóng x
          </button>
        </div>
        <section className="bg-white max-h-[309px] overflow-y-auto  border-l border-r border-b border-solid border-gray-300 pl-[10px] pr-[10px] rounded-bl-[8px] rounded-br-[8px]">
          <div className="mt-2">
            <p className="text-xs mb-1 text-gray-500 tracking-widest">
              Vui lòng chọn tỉnh, thành phố để biết chính xác giá, khuyến mãi và
              tồn kho
            </p>
            <ul className="grid grid-cols-2 gap-x-2 max-h-[240px]">
              {filterLocations.map((value, index) => (
                <li
                  key={index}
                  className="hover:bg-[rgba(214,0,25,.09)] border-b border-solid border-[#f1f1f1]"
                >
                  <a
                    href="#"
                    className="items-center text-[14px] flex no-underline h-10 text-[#4a4a4a] font-medium px-3 py-2"
                  >
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dropdown;
