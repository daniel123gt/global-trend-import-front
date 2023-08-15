import Button from "@/components/atom/Button";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="w-full bg-blue-dark/5 py-2">
      <div className="grid-global container-global">
        <div className="col-span-2">
          <Button>
            <div className="flex justify-center items-center gap-2">
              <FontAwesomeIcon icon={faBars} />
              <span>Categorías de productos</span>
            </div>
          </Button>
        </div>
        <div className="col-span-10 flex items-center">
          <Link
            href="products-list"
            className="group text-2xl font-light text-blue-dark hover:text-blue-40 pl-8"
          >
            <FontAwesomeIcon
              className="text-lg pr-1 text-blue-dark group-hover:text-blue-40"
              icon={faShop}
            />
            Tienda
          </Link>
        </div>
      </div>
    </div>
  );
}
