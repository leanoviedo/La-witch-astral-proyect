"use client";

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
            relative
            min-h-screen flex items-center justify-center text-white
            bg-cover bg-no-repeat
            bg-[url('/imagen1-mobile.webp')]
            bg-[center_top]
            md:bg-center
            md:bg-[url('/imagen1-2.webp')]
            md:bg-fixed
            px-4 md:px-6 py-20
          "
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* CONTENIDO */}
          <div className="relative z-10">
            <div
              className="
              bg-black/60 backdrop-blur-md
              p-6 md:p-10
              rounded-2xl
              max-w-2xl
              shadow-2xl
              mt-10 md:mt-0
            "
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Quiénes Somos
              </h1>

              <div className="space-y-4 text-sm md:text-lg text-gray-200 leading-relaxed">
                <p>
                  La Witch Astral no es solo un servicio espiritual. Es un
                  templo energético de transmutación, despertar y recuerdo del
                  alma.
                </p>

                <p>
                  La energía se sostiene en símbolos ancestrales y arquetipos
                  como el fuego, la serpiente dorada y la triple luna.
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
          </div>
        </section>

        {/* ================= SERVICIOS ================= */}
        <section
          id="servicios"
          className="
            relative
            min-h-screen flex items-center justify-center text-white
            bg-cover bg-no-repeat
            bg-[url('/imagen2-mobile.webp')]
            bg-center
            md:bg-[url('/imagen2.webp')]
            md:bg-fixed
            px-4 md:px-6 py-24
          "
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 max-w-6xl w-full text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Nuestros trabajos espirituales
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
            relative
            min-h-screen flex items-center justify-center text-white
            bg-cover bg-no-repeat
            bg-[url('/imagen1-mobile.webp')]
            bg-[center_top]
            md:bg-center
            md:bg-[url('/imagen1-2.webp')]
            md:bg-fixed
            px-4 md:px-6 py-20
          "
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 bg-black/60 backdrop-blur-md p-8 md:p-12 rounded-2xl text-center max-w-2xl w-full shadow-2xl border border-white/10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Comunicate con nosotras
            </h2>

            <p className="text-gray-300 mb-8">
              Escribinos por WhatsApp o conectate a través de{" "}
              <span className="text-white font-semibold">
                nuestras redes sociales
              </span>
            </p>

            <div className="flex flex-col gap-4 md:flex-row md:justify-center">
              <a
                href="https://www.tiktok.com/@la_witch_astral3?_r=1&_t=ZS-954MnlLaYWz"
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
        href="https://wa.me/5492634871951?text=Hola%20Wicha%20Astral%20✨%20%20vengo%20de%20tu%20sitio%20web.%20Estoy%20interesado/a%20en%20una%20consulta%20espiritual.%20¿Podrías%20darme%20más%20información?"
        target="_blank"
        rel="noopener noreferrer"
        className="
    fixed bottom-6 right-6
    bg-green-500 hover:bg-green-600
    p-4 rounded-full shadow-2xl z-50
    transition transform hover:scale-110
  "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6 fill-white"
        >
          <path d="M16.001 3C9.372 3 4 8.373 4 15.002c0 2.65.865 5.1 2.33 7.09L4 29l7.122-2.29a11.93 11.93 0 004.879 1.04h.001c6.629 0 12.001-5.372 12.001-12.001C28.003 8.373 22.63 3 16.001 3zm0 21.8h-.001a9.78 9.78 0 01-4.987-1.37l-.357-.212-4.227 1.36 1.38-4.116-.232-.375a9.77 9.77 0 01-1.5-5.234c0-5.405 4.396-9.8 9.8-9.8 2.617 0 5.077 1.02 6.928 2.872a9.735 9.735 0 012.872 6.928c0 5.405-4.396 9.8-9.8 9.8zm5.376-7.34c-.294-.147-1.737-.857-2.005-.955-.268-.098-.463-.147-.659.147-.196.294-.757.955-.928 1.151-.171.196-.343.22-.637.074-.294-.147-1.241-.457-2.364-1.457-.874-.778-1.463-1.738-1.634-2.032-.171-.294-.018-.452.129-.598.132-.131.294-.343.441-.514.147-.171.196-.294.294-.49.098-.196.049-.368-.025-.514-.074-.147-.659-1.588-.902-2.176-.237-.568-.478-.49-.659-.49-.171 0-.368-.025-.563-.025-.196 0-.514.074-.784.368-.27.294-1.029 1.005-1.029 2.452 0 1.447 1.054 2.844 1.201 3.04.147.196 2.076 3.168 5.032 4.44.703.304 1.252.486 1.68.622.705.224 1.347.192 1.855.116.566-.084 1.737-.71 1.983-1.397.245-.686.245-1.274.171-1.397-.074-.123-.27-.196-.564-.343z" />
        </svg>
      </a>
    </>
  );
}
