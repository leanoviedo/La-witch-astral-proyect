import Image from "next/image";
import Navbar from "./Navbar";
import ParticlesBackground from "./ParticlesBackground";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <header>
        <Navbar />
      </header>

      <main className="w-full">
        {/* INICIO - Ajustado para que el fondo cubra todo en móvil y sea 70% en desktop */}
        <section
          id="inicio"
          className="min-h-screen flex items-center justify-center text-white bg-cover md:bg-[length:70%] bg-no-repeat bg-center md:bg-fixed bg-[#050505] px-4 md:px-6 py-20"
          style={{ backgroundImage: "url('/imagen1.jpeg')" }}
        >
          <div className="bg-black/50 backdrop-blur-md p-6 md:p-10 rounded-2xl max-w-2xl shadow-2xl fade-up mx-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Quiénes Somos
            </h1>
            <div className="space-y-4 text-sm md:text-lg text-gray-200 leading-relaxed text-pretty">
              <p>
                La Witch Astral no es solo un servicio espiritual. Es un templo
                energético de transmutación, despertar y recuerdo del alma. Nace
                como un espacio sagrado dedicado a acompañar procesos profundos
                de liberación, limpieza energética y reconexión con el poder
                personal.
              </p>

              <p>
                La energía se sostiene en símbolos ancestrales y arquetipos como
                el fuego, la serpiente dorada y la triple luna de Hécate.
              </p>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="font-semibold text-white mb-3 italic text-center md:text-left">
                  ✦ NUESTRO PROPÓSITO
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base opacity-90">
                  <li className="flex items-center gap-2">
                    <span>•</span> Liberar bloqueos
                  </li>
                  <li className="flex items-center gap-2">
                    <span>•</span> Cortar ataduras
                  </li>
                  <li className="flex items-center gap-2">
                    <span>•</span> Activar la intuición
                  </li>
                  <li className="flex items-center gap-2">
                    <span>•</span> Reconectar con tu esencia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS - Grid ajustado */}
        <section
          id="servicios"
          className="min-h-screen flex items-center justify-center text-white bg-cover md:bg-[length:70%] bg-no-repeat bg-center md:bg-fixed bg-[#050505] px-4 md:px-6 py-24"
          style={{ backgroundImage: "url('/imagen2.jpeg')" }}
        >
          <div className="max-w-7xl w-full text-center fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Servicios</h2>
            <p className="text-gray-300 mb-12 text-base md:text-lg px-4">
              Descubre los caminos del universo y conecta con tu energía astral
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 px-4">
              {[
                { src: "/trabajos1.jpeg", alt: "Carta Astral" },
                { src: "/trabajo2.jpeg", alt: "Tarot" },
                { src: "/trabajo3.jpeg", alt: "Compatibilidad" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition p-4"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className="w-full h-64 md:h-full object-cover md:object-contain rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO - Botones optimizados para pulgares */}
        <section
          id="contacto"
          className="min-h-screen flex items-center md:items-end justify-center text-white bg-cover md:bg-[length:70%] bg-no-repeat bg-center md:bg-fixed bg-[#050505] px-4 md:px-6 py-20 md:pb-32"
          style={{ backgroundImage: "url('/footer.jpeg')" }}
        >
          <div className="bg-black/50 backdrop-blur-md p-8 md:p-12 rounded-2xl text-center max-w-2xl w-full shadow-2xl fade-up mx-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 lowercase">
              nuestras redes sociales
            </h2>
            <p className="text-base md:text-lg mb-8 text-gray-300">
              Conéctate con{" "}
              <span className="font-semibold">@la.witch.astral</span>
            </p>

            <div className="flex flex-col gap-4 w-full max-w-xs mx-auto md:max-w-none md:flex-row md:justify-center">
              <a
                href="https://wa.me/5492617063559"
                target="_blank"
                className="bg-green-600 hover:bg-green-700 transition px-6 py-4 md:py-3 rounded-xl text-lg font-semibold shadow-lg"
              >
                WhatsApp
              </a>
              <a
                href="https://www.facebook.com/ganeshwitchgreen9/"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 transition px-6 py-4 md:py-3 rounded-xl text-lg font-semibold shadow-lg"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/la.witch.astral/"
                target="_blank"
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition px-6 py-4 md:py-3 rounded-xl text-lg font-semibold shadow-lg"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* BOTÓN WHATSAPP FLOTANTE - Más visible en móvil */}
      <a
        href="https://wa.me/5492634871951"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl z-50 animate-bounce md:animate-none"
      >
        <span className="text-2xl">💬</span>
      </a>
    </>
  );
}
