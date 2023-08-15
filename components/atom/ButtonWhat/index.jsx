import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ButtonWhat() {
  return (
    <a
      target={"_blank"}
      href="https://wa.me/51960208952?text=Hola%20quiero%20mas%20informacion"
    >
      <div className="fixed bottom-4 right-4 bg-white p-2 rounded-full shadow-lg cursor-pointer">
        <div className="bg-[#25d366] text-white flex justify-center items-center text-5xl rounded-full p-2 w-[60px] h-[60px]">
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </div>
    </a>
  );
}
