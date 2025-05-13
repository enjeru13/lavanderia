import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Services from "./Services";
import About from "./About";

const Home = () => {
  return (
    <div id="inicio">
      <section className="bg-gradient-to-b from-white to-pink-300 py-18">
        <div>
          <div>
            <header className="text-center mb-4 px-6">
              <h1 className="text-6xl font-bold mb-4 text-pink-400">
                Lavandería Gisselle
              </h1>
              <p className="text-lg font-bold text-gray-800">
                ¡El verdadero lavado automático!
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-">
              <div className="flex justify-center">
                <div className="w-full max-w-lg">
                  <DotLottieReact
                    src="https://lottie.host/044ff77d-7b83-4338-aa2e-9e10fec7df25/hxfZwSYWTl.lottie"
                    autoplay
                    width={500}
                    height={400}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center text-center">
                <p className="text-lg font-bold text-gray-800 leading-relaxed px-18">
                  En nuestra lavandería, ofrecemos servicios rápidos y de
                  calidad para mantener tu ropa siempre limpia y en excelente
                  estado. Con atención personalizada, nos encargamos de cada
                  detalle para garantizar tu satisfacción.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <About />
    </div>
  );
};

export default Home;
