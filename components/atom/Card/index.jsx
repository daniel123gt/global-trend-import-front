import React from "react";
import Image from "next/image";
import Button from "../Button";

export default function Card({ data }) {
  return (
    <div className="group w-[280px] bg-white rounded-lg border border-blue-dark/5 hover:border-blue-40/10 transition-all p-2 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between">
      <div className="relative w-full h-[240px]">
        <Image
          style={{
            objectFit: "contain",
          }}
          fill
          src={data.img.src}
          alt={data.img.alt}
          loading="lazy"
        ></Image>
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-blue-dark p-2">
          <p className="text-2xl">{data.title}</p>
          <p className="font-extralight">{data.description}</p>
        </div>
        <div className="p-2">
          <p className="text-2xl text-blue-40">S/ {data.price}</p>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-all">
          <Button>Agregar al carrito</Button>
        </div>
      </div>
    </div>
  );
}
