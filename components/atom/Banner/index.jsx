import React from "react";
import Image from "next/image";
import BannerImg from "@/public/banner.png";

export default function Banner() {
  return (
    <div className="bg-banner-home ">
      <div className="backdrop-blur-[15px]">
        <div className="h-[598px] container-global">
          <Image
            quality={100}
            width={850}
            height={360}
            src={BannerImg}
            alt="Banner Image"
            className="w-full z-30"
          ></Image>
        </div>
      </div>
    </div>
  );
}
