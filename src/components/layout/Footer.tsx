"use client";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Columna 1: Información de la empresa */}
          <div>
            <h3 className="text-2xl font-bold mb-6">RD INGNOVA</h3>
            <p className="text-primary-100 mb-6">
              Empresa líder en servicios de ingeniería y consultoría, ofreciendo
              soluciones innovadoras para proyectos de infraestructura.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-primary-100 hover:text-white transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-primary-100 hover:text-white transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-primary-100 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-primary-100 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: "Inicio", href: "/" },
                { name: "Sobre Nosotros", href: "/about" },
                { name: "Servicios", href: "/services" },
                { name: "Proyectos", href: "/projects" },
                { name: "Contacto", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h3 className="text-xl font-bold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {[
                { name: "Consultoría", href: "/services#consultoria" },
                { name: "Construcción", href: "/services#construccion" },
                { name: "Rehabilitación", href: "/services#rehabilitacion" },
                { name: "Pruebas de Carga", href: "/services#pruebas" },
                { name: "Diseño Estructural", href: "/services#diseno" },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-primary-100 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-primary-100">
                  Carrera 17B # 81 - 71
                  <br />
                  Soledad - Atlántico, Colombia
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-primary-100">+57 321 301 8486</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@rdingnova.com"
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  rdingnova@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra de copyright */}
        <div className="border-t border-primary-800 mt-12 pt-8 text-center text-primary-300">
          <p>© {currentYear} RD INGNOVA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
