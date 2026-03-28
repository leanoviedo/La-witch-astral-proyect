"use client";
import { useState } from "react";
import Image from "next/image";

type Service = {
  src: string;
  title: string;
  short: string;
  long: string;
};

export default function ServicesSection() {
  const services: Service[] = [
    {
      src: "/trabajo1.jpeg",
      title: "Limpieza Energética",
      short: "Equilibra tu energía y libera bloqueos.",
      long: `LIMPIEZAS ENERGÉTICAS
Liberación y restauración de tu campo energético
Las limpiezas energéticas son trabajos espirituales destinados a remover energías densas, bloqueos vibratorios y cargas que se acumulan en el campo energético.
En La Witch Astral, cada limpieza se realiza de forma personalizada, ya que el trabajo energético depende del tipo de energía que la persona esté cargando.
No todas las energías son iguales, por eso cada caso requiere una lectura energética previa para identificar qué tipo de limpieza es necesaria.

✦ TIPOS DE ENERGÍAS QUE PUEDEN TRABAJARSE
✨ Energías densas acumuladas
✨ Bloqueos emocionales o espirituales
✨ Envidia o cargas externas
✨ Ataduras energéticas
✨ Desarmonización del campo áurico

✦ ¿CÓMO SE REALIZA EL TRABAJO?
Primero se realiza una evaluación energética para comprender el estado vibratorio de la persona.

✦ BENEFICIOS
💫 Liberación de cargas energéticas
💫 Mayor claridad emocional y mental
💫 Sensación de alivio y ligereza energética
💫 Recuperación del equilibrio espiritual

✨ Cuando tu energía se limpia, tu camino vuelve a abrirse.
La Witch Astral`,
    },

    {
      src: "/trabajo2.jpeg",
      title: "Rituales Especializados",
      short: "Magia espiritual para tu proceso personal.",
      long: `RITUALES PERSONALIZADOS
Magia espiritual alineada a tu intención

Los rituales personalizados son trabajos energéticos y espirituales realizados con una intención específica según la situación de la persona.

✦ PUEDEN TRABAJAR SOBRE
✨ Protección energética
✨ Apertura de caminos
✨ Liberación de energías densas
✨ Activación de abundancia
✨ Fortalecimiento del poder personal

Cada ritual se realiza con elementos energéticos y simbólicos que potencian la intención.`,
    },

    {
      src: "/trabajo3.jpeg",
      title: "Análisis Energético",
      short: "Lectura del campo energético.",
      long: `ANÁLISIS ENERGÉTICO DE FOTO
Lectura del campo vibratorio de una persona a través de su imagen.

✦ SE PUEDE DETECTAR
✨ Bloqueos energéticos
✨ Cargas emocionales
✨ Desarmonización del campo áurico
✨ Energías externas

Permite comprender qué está afectando tu energía en el presente.`,
    },

    {
      src: "/trabajo4.jpeg",
      title: "Lectura de Tarot",
      short: "Guía espiritual para tu camino.",
      long: `LECTURA DE TAROT
Herramienta espiritual de autoconocimiento y orientación.

✦ TE AYUDA A
✨ Comprender situaciones
✨ Tomar decisiones
✨ Identificar bloqueos
✨ Recibir guía espiritual

✨ El Tarot refleja lo que tu alma necesita comprender.`,
    },

    {
      src: "/trabajo5.jpeg",
      title: "Reiki",
      short: "Sanación energética y equilibrio.",
      long: `REIKI – SANACIÓN ENERGÉTICA

El Reiki canaliza energía universal para equilibrar cuerpo, mente y espíritu.

✦ BENEFICIOS
✨ Liberación de bloqueos
✨ Reducción del estrés
✨ Equilibrio emocional
✨ Paz interior

🌿 Relajación profunda
🌿 Claridad mental

✨ Permite que la energía vuelva a fluir.`,
    },

    {
      src: "/trabajo6.jpeg",
      title: "Sesiones 1:1",
      short: "Acompañamiento espiritual personalizado.",
      long: `SESIONES ESPIRITUALES 1:1

Espacios de trabajo profundo sobre procesos personales.

✦ SE TRABAJA EN
✨ Procesos emocionales
✨ Liberación energética
✨ Activación personal
✨ Desarrollo espiritual

💫 Avanzá con claridad en tu camino.`,
    },
    {
      src: "/trabajos7.jpeg",
      title: "corte y liberación energética",
      short: "Purificación energética de tu entorno.",
      long: `LIMPIEZA DE ESPACIOS
Purificación energética de tu hogar o lugar de trabajo.

✦ BENEFICIOS
✨ Elimina energías densas
✨ Armoniza el ambiente
✨ Promueve bienestar
✨ Atrae energías positivas

🌿 Tu espacio también necesita limpieza energética.`,
    },
    {
      src: "/trabajo8.jpeg",
      title: "Apertura de caminos",
      short: "Desbloquea tu camino espiritual.",
      long: `APERTURA DE CAMINOS
Rituales para desbloquear obstáculos en tu camino espiritual.

✦ BENEFICIOS
✨ Elimina bloqueos energéticos
✨ Abre oportunidades
✨ Potencia tu energía
✨ Facilita el flujo de tu camino
💫 Desbloquea tu camino y avanza con claridad.`,
    },
    {
      src: "/trabajo9.jpeg",
      title: "Protección energética",
      short: "Escudo energético para tu bienestar.",
      long: `PROTECCIÓN ENERGÉTICA
Rituales para crear un escudo energético de protección.

✦ BENEFICIOS
✨ Protege contra energías densas
✨ Fortalece tu campo áurico
✨ Promueve seguridad energética
✨ Mantiene tu energía equilibrada.
💫 Protege tu energía y mantente en equilibrio.`,
    },
  ];

  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-10 sm:py-16">
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setSelected(service)}
            className="
              group cursor-pointer
              bg-black/50 backdrop-blur-xl
              border border-white/10
              rounded-2xl sm:rounded-3xl
              overflow-hidden text-white
              shadow-lg sm:shadow-xl
              transition-all duration-300

              active:scale-[0.97]
              active:shadow-purple-500/40

              sm:hover:scale-[1.05]
              sm:hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
              sm:hover:border-purple-500/50
            "
          >
            {/* IMAGEN CON BLUR PRO */}
            <div className="relative w-full h-[220px] sm:h-[260px] md:h-[220px] bg-black overflow-hidden">
              {/* Fondo blur */}
              <Image
                src={service.src}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw,
         (max-width: 768px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
                className="object-cover blur-xl scale-110 opacity-30"
                quality={70} // 👈 baja calidad = mejor rendimiento
              />

              {/* Imagen principal */}
              <Image
                src={service.src}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index === 0}
                quality={75}
                className="
                  object-contain
                  transition duration-500
                  sm:group-hover:scale-110
                "
              />

              {/* overlay morado */}
              <div className="absolute inset-0 bg-purple-600/0 sm:group-hover:bg-purple-600/10 transition duration-500" />
            </div>

            {/* CONTENIDO */}
            <div className="p-4 sm:p-5 text-center">
              <h2 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 sm:group-hover:text-purple-300 transition">
                {service.title}
              </h2>

              <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-4">
                {service.short}
              </p>

              <span className="text-purple-400 text-xs sm:text-sm sm:group-hover:text-purple-300">
                Ver más →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div
            className="
    relative w-full max-w-2xl
    max-h-[90vh]
    bg-black/90
    border border-white/10
    rounded-3xl
    shadow-2xl
    overflow-hidden
    flex flex-col
  "
          >
            {/* cerrar */}
            <button
              onClick={() => setSelected(null)}
              className="
                absolute top-3 right-3 z-20
                w-9 h-9 sm:w-10 sm:h-10
                flex items-center justify-center
                rounded-full
                bg-red-600 hover:bg-red-700
                text-white text-lg
              "
            >
              ✕
            </button>

            {/* imagen */}
            <div className="relative w-full h-[250px] sm:h-[500px] bg-black">
              <Image
                src={selected.src}
                alt={selected.title}
                fill
                sizes="(max-width: 640px) 100vw, 800px"
                className="object-cover sm:object-contain"
                quality={75}
              />
            </div>

            {/* contenido */}
            <div className="p-4 sm:p-6 text-white overflow-y-auto flex-1">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-center">
                {selected.title}
              </h2>

              <p className="text-gray-300 mb-4 text-center text-sm sm:text-base">
                {selected.short}
              </p>

              <div className="whitespace-pre-line text-xs sm:text-sm text-gray-300 leading-relaxed">
                {selected.long}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
