import React from "react";
import Card from "@/components/atom/Card";
import Charger from "@/public/product/charger.jpeg";
import Headphone from "@/public/product/headphone.png";
import SmartWatch from "@/public/product/smartWatch.png";
import Velador from "@/public/product/veladorSmartP.png";

const products = [
  {
    img: {
      src: Charger,
      alt: "Cargador",
    },
    title: "Cargador portátil",
    description: "Cómodo cargador de bolsillo sin cable ",
    price: "50",
  },
  {
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
      <div className="grid-global container-global">
        <div className="col-span-2 h-[500px] rounded-lg border border-blue-dark/5 shadow-sm"></div>
        <div className="col-span-10 flex justify-between">
          {products.map((data, key) => (
            <Card key={key} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
