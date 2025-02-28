"use client";
import React, { useEffect } from "react";
import Banner from "@/components/Banner";
import Dropdown from "@/components/Dropdown";
import Header from "@/components/Header";
import SlideProduct from "@/components/SlideProduct";
import Topbar from "@/components/Topbar";
import { useState } from "react";
import MenuBottom from "@/components/MenuBottom";
import BannerBottom from "@/components/BannerBottom";

import useStore from "../store/store";

export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const isActive = useStore((state) => state.isActive);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleToggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <main>
      <div>
        <Topbar />
        <Banner />
        <Header onToggleDropdown={handleToggleDropdown} />
        {showDropdown && <Dropdown onToggleDropdown={handleToggleDropdown} />}

        <div
          style={{
            display: isActive && windowWidth <= 640 ? "none" : "block"
          }}
        >
          <SlideProduct id="popup-portal" />
          <BannerBottom />
        </div>
        <MenuBottom />
      </div>
    </main>
  );
}
