import React from "react";
import Card from "@/components/atom/Card";
import Charger from "@/public/product/charger.jpeg";
import Headphone from "@/public/product/headphone.png";
import SmartWatch from "@/public/product/smartWatch.png";
import Velador from "@/public/product/veladorSmartP.png";
import Link from "next/link";

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

export default function ProductsList() {
  return (
    <div className="w-full pt-8">
      <div className="container-global pb-4 flex justify-between">
        <h2 className="text-4xl font-light text-blue-dark">
          Todos los productos
        </h2>
        <div>
          <select
            className="uppercase text-lg border border-solid border-blue-dark/10 py-1 px-4 rounded-full outline-none focus:border-blue-40 transition-all"
            name="order"
            id="order"
          >
            <option className="text-lg" value="1">
              Destacado
            </option>
            <option className="text-lg" value="2">
              Precio
            </option>
            <option className="text-lg" value="3">
              Nombre
            </option>
          </select>
        </div>
      </div>
      <div className="max-sm:flex flex-col md:grid-global gap-4 container-global">
        <div className="col-span-2 rounded-lg border border-blue-dark/5 shadow-sm p-4 text-blue-dark font-light">
          <p className="pb-4">Resultados (4)</p>
          <hr />
          <div className="text-2xl text-blue-dark pt-4 flex flex-col gap-4 flex-wrap">
            <p>Categoría</p>
            <p>Marca</p>
            <p>Precio</p>
            <p>Características</p>
          </div>
        </div>
        <div className="col-span-10 flex items-stretch justify-center gap-4 md:justify-between flex-wrap">
          {products.map((data, key) => (
            <Link href={`/product/${data.id}`} key={key}>
              <Card data={data} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
