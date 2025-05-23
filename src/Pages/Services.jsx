import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaWater } from "react-icons/fa";
import { BiSolidWasher } from "react-icons/bi";
import { TbIroning2Filled } from "react-icons/tb";
import { IoIosRocket } from "react-icons/io";
import { GiRunningShoe } from "react-icons/gi";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="servicios" className="bg-pink-300 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Nuestros Servicios
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div
            className="bg-white shadow-lg rounded-lg border border-pink-400 flex flex-col justify-center items-center h-48 w-full p-4 text-center transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
          >
            <BiSolidWasher className="text-5xl text-pink-400 mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">
              Lavado y Secado por Kg
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Lavado y secado de prendas por kilogramo para tu comodidad y
              eficiencia.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white shadow-lg rounded-lg border border-pink-400 flex flex-col justify-center items-center h-48 w-full p-4 text-center transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <TbIroning2Filled className="text-5xl text-pink-400 mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">
              Lavado y Planchado por Piezas
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Lavado y planchado individual para cada pieza de ropa, ideal para
              prendas delicadas.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white shadow-lg rounded-lg border border-pink-400 flex flex-col justify-center items-center h-48 w-full p-4 text-center transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <IoIosRocket className="text-5xl text-pink-400 mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">
              Servicio Express
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Disfruta de un lavado rápido y eficiente sin sacrificar la
              calidad.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
          {/* Card 4 */}
          <div
            className="bg-white shadow-lg rounded-lg border border-pink-400 flex flex-col justify-center items-center h-48 w-full p-4 text-center transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
          >
            <GiRunningShoe className="text-5xl text-pink-400 mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">
              Lavado de Prendas Especiales
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Lavado de zapatos, alfombras y otros artículos especiales con el
              cuidado que merecen.
            </p>
          </div>

          {/* Card 5 */}
          <div
            className="bg-white shadow-lg rounded-lg border border-pink-400 flex flex-col justify-center items-center h-48 w-full p-4 text-center transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaWater className="text-5xl text-pink-400 mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">
              Servicio de Desmanche
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Eliminación de manchas difíciles para que tus prendas luzcan como
              nuevas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
