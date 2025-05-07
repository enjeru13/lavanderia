import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white shadow-md text-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">Lavandería Gisselle</div>

        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <a href="#inicio" className="hover:text-pink-400">
                Inicio
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-pink-400">
                Servicios
              </a>
            </li>
            <li>
              <a href="#nosotros" className="hover:text-pink-400">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-pink-400">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menú">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col space-y-4 px-4 pb-4">
            <li>
              <a
                href="#inicio"
                className="block hover:text-pink-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className="block hover:text-pink-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#nosotros"
                className="block hover:text-pink-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="block hover:text-pink-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
