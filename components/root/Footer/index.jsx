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
    <footer className="bg-blue-40 text-white">
      <div className="container-global grid-global py-14">
        <div className="col-span-3 bg-white p-2 rounded-full">
          <Link className="p-4" href="/">
            <Image loading="lazy" alt="Logo global" width={460} src={Logo} />
          </Link>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <p className="text-2xl">Soporte</p>
          <ul>
            <li>Terminos y condiciones</li>
            <li>Metodos de pago</li>
            <li>Envios y entregas</li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="text-2xl">Mi Cuenta</p>
          <ul>
            <li>Registrarme</li>
            <li>Iniciar Sesion</li>
            <li>Recuperar contraseña</li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="text-2xl">Contacto</p>
          <ul>
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
          <p className="text-2xl">Redes Sociales</p>
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
