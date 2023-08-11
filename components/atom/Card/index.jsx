import React from "react";
import Image from "next/image";
import Product from "@/public/product/veladorSmart.png";

export default function Card() {
  return (
    <div className="w-[280px] bg-white rounded-lg">
      <div>
        <Image src={Product}></Image>
      </div>
    </div>
  );
}
