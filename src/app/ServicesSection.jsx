"use client";
import { useState } from "react";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      src: "/trabajos1.jpeg",
      title: "Limpieza Energética",
      short: "Equilibra tu energía y libera bloqueos.",
      long: `LIMPIEZAS ENERGÉTICAS
Liberación y restauración de tu campo energético...`,
    },
    {
      src: "/trabajo2.jpeg",
      title: "Rituales Especializados",
      short: "Magia espiritual para tu proceso personal.",
      long: `RITUALES PERSONALIZADOS...`,
    },
    {
      src: "/trabajo3.jpeg",
      title: "Análisis Energético",
      short: "Lectura del campo energético.",
      long: `ANÁLISIS ENERGÉTICO...`,
    },
    {
      src: "/trabajo4.jpeg",
      title: "Lectura de Tarot",
      short: "Guía espiritual para tu camino.",
      long: `LECTURA DE TAROT...`,
    },
    {
      src: "/trabajo5.jpeg",
      title: "Reiki",
      short: "Sanación energética y equilibrio.",
      long: `REIKI – SANACIÓN ENERGÉTICA...`,
    },
    {
      src: "/trabajo6.jpeg",
      title: "Sesiones 1:1",
      short: "Acompañamiento espiritual personalizado.",
      long: `SESIONES ESPIRITUALES 1:1...`,
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setSelected(service)}
            className="
              group cursor-pointer
              bg-black/50 backdrop-blur-xl
              border border-white/10
              rounded-3xl
              overflow-hidden
              text-white
              shadow-xl
              transition-all duration-500
              hover:scale-[1.05]
              hover:shadow-purple-500/30
            "
          >
            {/* IMAGEN */}
            <div className="relative aspect-[16/9] bg-black overflow-hidden">
              <Image
                src={service.src}
                alt={service.title}
                fill
                className="
                  object-contain
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />
            </div>

            {/* CONTENIDO */}
            <div className="p-5 text-center">
              <h2 className="text-lg font-bold mb-2">{service.title}</h2>
              <p className="text-gray-300 text-sm mb-4">{service.short}</p>
              <span className="text-purple-400 text-sm">Ver más →</span>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4">
          <div className="relative w-full max-w-2xl bg-black/90 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            {/* ❌ BOTÓN CERRAR PRO */}
            <button
              onClick={() => setSelected(null)}
              className="
                absolute top-4 right-4 z-20
                w-10 h-10 flex items-center justify-center
                rounded-full
                bg-red-600 hover:bg-red-700
                text-white text-xl font-bold
                shadow-lg
                transition-all duration-300
                hover:scale-110
              "
            >
              ✕
            </button>

            {/* IMAGEN */}
            <div className="relative w-full h-[500px] bg-black">
              <Image
                src={selected.src}
                alt={selected.title}
                fill
                className="object-contain"
              />
            </div>

            {/* CONTENIDO */}
            <div className="p-6 text-white">
              <h2 className="text-2xl font-bold mb-4 text-center">
                {selected.title}
              </h2>

              <p className="text-gray-300 mb-4 text-center">{selected.short}</p>

              <div className="max-h-[300px] overflow-y-auto whitespace-pre-line text-sm text-gray-300 leading-relaxed pr-2">
                {selected.long}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
