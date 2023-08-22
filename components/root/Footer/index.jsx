import React from "react";
import Image from "next/image";
import Logo from "@/public/logo-full.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faLocationDot,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-40 to-blue-30  text-white w-full">
      <div className="container-global max-sm:flex flex-col max-sm:gap-4 md:grid-global py-14">
        <div className="col-span-3 bg-white p-4 rounded-full">
          <Link className="p-2" href="/">
            <Image loading="lazy" alt="Logo global" width={460} src={Logo} />
          </Link>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <p className="text-3xl">Soporte</p>
          <ul className="text-xl">
            <li>Terminos y condiciones</li>
            <li>Metodos de pago</li>
            <li>Envios y entregas</li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="text-3xl">Mi Cuenta</p>
          <ul className="text-xl">
            <li>Registrarme</li>
            <li>Iniciar Sesion</li>
            <li>Recuperar contraseña</li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="text-3xl">Contacto</p>
          <ul className="text-xl">
            <li>
              <FontAwesomeIcon icon={faLocationDot} /> Av avenida 1111, Lima,
              Lima, Peru.
            </li>
            <li>
              <FontAwesomeIcon icon={faAt} /> contacto@email.com
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> 999999999
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} /> Horario de atencion: Lun-Sab:
              10am-7pm
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="text-3xl">Redes Sociales</p>
          <ul className="flex justify-start gap-4 text-3xl">
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTiktok} />
            </li>
            <li>
              <FontAwesomeIcon icon={faWhatsapp} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
