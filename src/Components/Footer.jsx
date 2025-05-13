import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-8">
      <div className="w-full px-6">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-3">Lavandería Gisselle</h3>
            <p className="text-sm text-gray-400">
              Ofrecemos servicios de lavado y cuidado profesional de prendas con
              más de 27 años de experiencia.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Enlaces rápidos</h3>
            <ul className="text-sm">
              <li>
                <a href="#servicios" className="hover:text-pink-500 transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-pink-500 transition">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-pink-500 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Contacto</h3>
            <p className="text-sm text-gray-400">
              San Cristóbal, Estado Táchira, Venezuela
            </p>
            <p className="text-sm text-gray-400">Tel: +58 424-7368942</p>
            <p className="text-sm text-gray-400">Local: 0276-3415016</p>
            <p className="text-sm text-gray-400">
              Email: lavanderiagisselle@gmail.com
            </p>
            <div className="flex justify-center sm:justify-start mt-4 space-x-4">
              <a
                href="https://www.instagram.com/lavanderiagisselle/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 text-2xl hover:text-pink-400 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/584247368942?text=¡Hola!%20Me%20gustaría%20más%20información%20sobre%20sus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 text-2xl hover:text-pink-400 transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:angeleduardocegarrataborda@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 text-2xl hover:text-pink-400 transition"
              >
                <SiGmail />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Lavandería Gisselle. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
