import Image from "next/image";
import Navbar from "./Navbar";
import ParticlesBackground from "./ParticlesBackground";

export default function Home() {
  return (
    <>
      <ParticlesBackground />

      {/* HEADER */}
      <header>
        <Navbar />
      </header>

      <main className="w-full">
        {/* INICIO */}
        <section
          id="inicio"
          className="h-screen flex items-center justify-center text-white bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/imagen1.jpeg')" }}
        >
          <div className="bg-black/60 backdrop-blur-md p-10 rounded-xl max-w-3xl fade-up">
            <h1 className="text-5xl font-bold mb-6">Quiénes Somos</h1>

            <p className="mt-4 text-xl">
              Somos un equipo de astrólogos apasionados por el estudio de los
              astros y su influencia en nuestras vidas.
            </p>

            <p className="mt-4 text-xl">
              Nuestro enfoque combina astrología tradicional y moderna para
              guiarte en tu viaje astral.
            </p>
          </div>
        </section>

       {/* SERVICIOS */}
<section
  id="servicios"
  className="min-h-screen flex  items-center justify-center px-6 py-24 text-white bg-contain bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/imagen2.jpeg')" }}
>
  <div className="max-w-7xl w-full text-center fade-up">
    <h2 className="text-5xl font-bold mb-4">Servicios</h2>

    <p className="text-gray-300 mb-16 text-lg">
      Descubre los caminos del universo y conecta con tu energía astral
    </p>

    <div className="grid md:grid-cols-3 gap-10">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition p-4">
        <Image
          src="/trabajos1.jpeg"
          alt="Carta Astral"
          width={800}
          height={600}
          className="w-full h-full object-contain rounded-xl"
        />
      </div>

      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition p-4">
        <Image
          src="/trabajo2.jpeg"
          alt="Tarot"
          width={800}
          height={600}
          className="w-full h-full object-contain rounded-xl"
        />
      </div>

      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition p-4">
        <Image
          src="/trabajo3.jpeg"
          alt="Compatibilidad"
          width={800}
          height={600}
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
    </div>
  </div>
</section>
        {/* CONTACTO */}
        <section
          id="contacto"
          className="min-h-screen flex items-center justify-center text-white bg-cover bg-center bg-fixed px-6 py-20"
          style={{ backgroundImage: "url('/imagen3.jpeg')" }}
        >
          <div className="bg-black/70 backdrop-blur-md p-12 rounded-2xl text-center max-w-2xl w-full shadow-2xl fade-up">
            <h2 className="text-5xl font-bold mb-6">nuestras redes sociales</h2>

            <p className="text-lg mb-8 text-gray-300">
              Conéctate con{" "}
              <span className="font-semibold">@la.witch.astral</span>
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/5492617063559"
                target="_blank"
                className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-xl text-lg font-semibold shadow-lg"
              >
                WhatsApp
              </a>

              <a
                href="https://www.facebook.com/ganeshwitchgreen9/"
                target="_blank"
                className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl text-lg font-semibold shadow-lg"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/la.witch.astral/"
                target="_blank"
                className="bg-pink-500 hover:bg-pink-600 transition px-6 py-3 rounded-xl text-lg font-semibold shadow-lg"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* BOTÓN WHATSAPP */}
      <a
        href="https://wa.me/5492617063559"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-xl z-50"
      >
        💬
      </a>
    </>
  );
}
