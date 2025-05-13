/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white shadow-md text-gray-800 sticky top-0 z-50 py-2">
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
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 w-full bg-white shadow-md py-2 rounded-b-3xl"
          >
            <ul className="flex flex-col space-y-4 text-center text-lg">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-pink-400"
                  onClick={toggleMenu}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="hover:text-pink-400"
                  onClick={toggleMenu}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="hover:text-pink-400"
                  onClick={toggleMenu}
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-pink-400"
                  onClick={toggleMenu}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
