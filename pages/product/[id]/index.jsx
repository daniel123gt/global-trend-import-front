import React from "react";
import Charger from "@/public/product/charger.jpeg";
import Headphone from "@/public/product/headphone.png";
import SmartWatch from "@/public/product/smartWatch.png";
import Velador from "@/public/product/veladorSmartP.png";
import { useRouter } from "next/router";
import Image from "next/image";
import Button from "@/components/atom/Button";

const products = [
  {
    id: 1,
    img: {
      src: Charger,
      alt: "Cargador",
    },
    title: "Cargador portátil",
    description: "Cómodo cargador de bolsillo sin cable ",
    price: "50",
  },
  {
    id: 2,
    img: {
      src: Headphone,
      alt: "Audifonos",
    },
    title: "Audífonos inalámbricos",
    description:
      "Nisi amet cupidatat officia sint ullamco voluptate enim sint.",
    price: "100",
  },
  {
    id: 3,
    img: {
      src: SmartWatch,
      alt: "Reloj inteligente",
    },
    title: "Smart Watch",
    description:
      "Magna commodo laboris cillum elit enim elit esse officia magna dolore.",
    price: "80",
  },
  {
    id: 4,
    img: {
      src: Velador,
      alt: "Velador",
    },
    title: "Velador inteligente",
    description: "Cillum mollit veniam exercitation id.",
    price: "400",
  },
];

export default function Product() {
  const router = useRouter();
  const productId = router.query.id;
  const product = products.filter((item) => item.id == productId)[0];
  console.log(product);
  return (
    <div className="container-global py-12">
      <div className="grid-global border border-blue-40/5 rounded-lg p-10 min-h-[500px] shadow-lg">
        <div className="col-span-6">
          <Image
            src={product?.img?.src}
            alt={product?.img?.alt}
            className="w-[300px] mx-auto"
          />
        </div>
        <div className="col-span-6 flex flex-col gap-4">
          <p className="text-5xl text-blue-dark">{product?.title}</p>
          <p className="text-2xl font-light text-blue-dark">
            {" "}
            {product?.description}
          </p>
          <p className="text-xl font-light text-blue-dark">
            {" "}
            {product?.description}
          </p>
          <p className="text-blue-dark text-xl">SKU: {productId}</p>
          <p className="text-4xl text-blue-40 pb-10">S/ {product?.price}</p>
          <Button> Comprar ahora </Button>
        </div>
      </div>
    </div>
  );
}
