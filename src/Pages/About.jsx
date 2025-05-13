import lavanderia from "../assets/lavanderia1.jpg";

const About = () => {
  return (
    <section
      id="nosotros"
      className="py-20 bg-gradient-to-b from-pink-300 to-white"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-18 text-gray-800">
          ¿Quiénes Somos?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-8">
          <div className="flex justify-center">
            <img
              src={lavanderia}
              alt="Acerca de nosotros"
              className="w-full md:max-w-md rounded-lg shadow-2xl object-cover transition-transform duration-300 hover:scale-105 border-4 border-transparent hover:border-pink-500"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mx-auto text-center">
              <p className="text-lg font-bold leading-relaxed text-gray-800 mb-6">
                En Lavandería Gisselle contamos con más de 27 años ofreciendo
                servicios de alta calidad. Nos enorgullece brindar atención
                personalizada y soluciones innovadoras para el cuidado de tus
                prendas, garantizando la satisfacción de nuestros clientes en
                cada detalle. Nuestro compromiso es superar tus expectativas a
                través de un servicio eficiente, cuidadoso y respetuoso con cada
                prenda, porque en Lavandería Gisselle cada detalle importa.
              </p>
              <div className="mt-8">
                <a
                  href="https://wa.me/584247368942?text=¡Hola!%20Me%20gustaría%20más%20información%20sobre%20sus%20servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-pink-500 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-25">
          <h2 className="text-4xl font-bold text-center pt-16 pb-8 text-gray-800">
            Ubicación
          </h2>
          <div className="w-full max-w-2xl mx-auto">
            <div className="relative rounded-lg shadow-2xl overflow-hidden">
              <iframe
                title="Ubicación de Lavandería Gisselle"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.5487237295436!2d-72.22203827303089!3d7.779491717056839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666c904c3d54ef%3A0xc6de3c956aabfaf5!2sLavanderia%20Automatica%20GISSELLE!5e0!3m2!1ses-419!2sve!4v1746632346715!5m2!1ses-419!2sve"
                className="w-full h-64"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <h2 className="text-center mt-8 font-bold text-xl">
              Av Ferrero Tamayo, Edificio Yoly, Local 02, San Cristóbal, Estado
              Táchira., San Cristóbal, Venezuela
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
