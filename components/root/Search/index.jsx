import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div className="w-[200px] md:w-full px-4">
      <div className="group relative">
        <input
          className="w-full text-xl text-blue-dark font-light border border-solid border-blue-dark/10 py-2 px-4 rounded-full outline-none focus:border-blue-40 transition-all"
          type="text"
          placeholder="Buscar en Global Trends Import"
        />
        <div className="after:content-[''] after:absolute after:w-[46px] after:h-[46px] after:rounded-full after:bg-blue-40 after:top-0 after:right-0">
          <FontAwesomeIcon
            className="absolute right-3 top-3 text-xl font-light text-white group-focus:text-blue-40 z-50"
            icon={faMagnifyingGlass}
          />
        </div>
      </div>
    </div>
  );
}
