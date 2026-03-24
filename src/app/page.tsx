import Navbar from "./Navbar";
import ParticlesBackground from "./ParticlesBackground";
import ServicesSection from "./ServicesSection";

export default function Home() {
  return (
    <>
      <ParticlesBackground />

      <header>
        <Navbar />
      </header>

      <main className="w-full">

        {/* ================= INICIO ================= */}
        <section
          id="inicio"
          className="
            min-h-screen flex items-center justify-center text-white
            bg-contain md:bg-cover
            bg-[size:90%] md:bg-cover
            bg-no-repeat bg-center
            md:bg-fixed
            bg-[#050505]
            px-4 md:px-6 py-20
          "
          style={{ backgroundImage: "url('/imagen1-2.webp')" }}
        >
          <div className="bg-black/60 backdrop-blur-md p-6 md:p-10 rounded-2xl max-w-2xl shadow-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Quiénes Somos
            </h1>

            <div className="space-y-4 text-sm md:text-lg text-gray-200 leading-relaxed">
              <p>
                La Witch Astral no es solo un servicio espiritual. Es un templo energético de transmutación, despertar y recuerdo del alma.
              </p>

              <p>
                La energía se sostiene en símbolos ancestrales y arquetipos como el fuego, la serpiente dorada y la triple luna.
              </p>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="font-semibold text-white mb-3 italic text-center md:text-left">
                  ✦ NUESTRO PROPÓSITO
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base">
                  <li>• Liberar bloqueos</li>
                  <li>• Cortar ataduras</li>
                  <li>• Activar la intuición</li>
                  <li>• Reconectar con tu esencia</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICIOS ================= */}
        <section
          id="servicios"
          className="
            min-h-screen flex items-center justify-center text-white
            bg-contain md:bg-cover
            bg-[size:90%] md:bg-cover
            bg-no-repeat bg-center
            md:bg-fixed
            bg-[#050505]
            px-4 md:px-6 py-24
          "
          style={{ backgroundImage: "url('/imagen2.webp')" }}
        >
          <div className="max-w-6xl w-full text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              nuestros trabajos espirituales
            </h2>

            <p className="font-semibold text-gray-200 mb-12 text-lg md:text-xl italic">
              Conoce nuestros trabajos espirituales
            </p>

            <ServicesSection />
          </div>
        </section>

        {/* ================= CONTACTO ================= */}
        <section
          id="contacto"
          className="
            min-h-screen flex items-center justify-center text-white
            bg-contain md:bg-cover
            bg-[size:90%] md:bg-cover
            bg-no-repeat bg-center
            md:bg-fixed
            bg-[#050505]
            px-4 md:px-6 py-20
          "
          style={{ backgroundImage: "url('/imagen1-2.webp')" }}
        >
          <div className="bg-black/60 backdrop-blur-md p-8 md:p-12 rounded-2xl text-center max-w-2xl w-full shadow-2xl border border-white/10">

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Redes Sociales
            </h2>

            <p className="text-gray-300 mb-8">
              Conéctate con <span className="text-white font-semibold">@la.witch.astral</span>
            </p>

            <div className="flex flex-col gap-4 md:flex-row md:justify-center">

              <a
                href="https://www.tiktok.com/@la.witch.astral"
                target="_blank"
                className="bg-black px-6 py-3 rounded-xl border border-white/10 hover:scale-105 transition"
              >
                TikTok
              </a>

              <a
                href="https://www.facebook.com/ganeshwitchgreen9/"
                target="_blank"
                className="bg-blue-600 px-6 py-3 rounded-xl hover:scale-105 transition"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/la.witch.astral/"
                target="_blank"
                className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 px-6 py-3 rounded-xl hover:scale-105 transition"
              >
                Instagram
              </a>

            </div>
          </div>
        </section>

      </main>

      {/* ================= WHATSAPP ================= */}
      <a
        href="https://wa.me/5492615555634"
        target="_blank"
        className="
          fixed bottom-6 right-6
          bg-green-500 hover:bg-green-600
          p-4 rounded-full shadow-2xl z-50
          transition transform hover:scale-110
        "
      >
        <svg
          className="w-6 h-6 fill-white"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0012.05 0C5.5 0 .17 5.33.17 11.88c0 2.1.55 4.15 1.6 5.95L0 24l6.35-1.66a11.9 11.9 0 005.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.14-3.42-8.43zm-8.47 18.3h-.01a9.9 9.9 0 01-5.05-1.39l-.36-.21-3.76.99 1-3.66-.24-.37a9.9 9.9 0 01-1.52-5.27c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.14 1.03 7.01 2.9a9.87 9.87 0 012.9 7c0 5.46-4.44 9.9-9.89 9.9zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.48-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.18-1.42-.08-.12-.27-.2-.57-.35z" />
        </svg>
      </a>
    </>
  );
}