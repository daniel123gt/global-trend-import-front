import Button from "@/components/atom/Button";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <div className="w-full bg-blue-dark/5 py-1">
      <div className="container-global">
        <div className="w-[300px]">
          <Button>
            <div className="flex justify-center items-center gap-2">
              <FontAwesomeIcon icon={faBars} />
              <span>Categorías de productos</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
