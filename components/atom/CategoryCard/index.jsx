import React from "react";
import Image from "next/image";

export default function CategoryCard({ title, img }) {
  return (
    <div className="w-[120px] border-blue-40/10 hover:border-blue-40 transition-all cursor-pointer border-2 rounded-lg p-2 shadow-lg">
      <div className="relative w-full h-[100px]">
        <Image
          className="rounded-full border border-blue-40/20"
          src={img}
          alt={title}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <p className="text-center uppercase text-xl">{title}</p>
    </div>
  );
}
