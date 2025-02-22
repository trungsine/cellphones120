"use client";
import React from "react";
import Banner from "@/components/Banner";
import Dropdown from "@/components/Dropdown";
import Header from "@/components/Header";
import SlideProduct from "@/components/SlideProduct";
import Topbar from "@/components/Topbar";
import { useState } from "react";
import MenuBottom from "@/components/MenuBottom";
import BannerBottom from "@/components/BannerBottom";

export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);

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
        <SlideProduct id="popup-portal" />
        <BannerBottom />
        <MenuBottom />
      </div>
    </main>
  );
}
