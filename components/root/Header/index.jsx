import Menu from "../Menu";
import BannerHead from "../BannerHead";
import React from "react";
import Navigation from "../Navigation";

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-white">
      <BannerHead />
      <div className="container-global">
        <Menu />
      </div>
      <Navigation />
    </header>
  );
}
