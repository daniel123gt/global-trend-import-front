import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/logo-full.png";
import Search from "../Search";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const LINKS_MENU = [
    { name: "Inicio", href: "/" },
    { name: "Categorías", href: "/" },
    { name: "Ofertas", href: "/" },
    { name: "", href: "" },
    { name: "", href: "" },
  ];
  const MENU_ACCTIONS = [
    { name: "Ingresar", href: "/", icon: faUser },
    { name: "Carrito", href: "/", icon: faCartShopping },
  ];
  return (
    <div className="flex items-center justify-between py-4">
      <Link href="/">
        <Image width={400} alt="Logo global" src={Logo} loading="lazy" />
      </Link>
      <Search />
      <nav className="hidden md:block">
        <ul className="font-teko text-blue-dark font-light text-2xl flex justify-between gap-4">
          {MENU_ACCTIONS.map((link, key) => (
            <li
              key={key}
              className="group hover:text-blue-40 relative transition-all duration-200 ease-in"
            >
              <Link className=" flex items-baseline" href={link.href}>
                <FontAwesomeIcon className="text-xl mr-1" icon={link.icon} />
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
