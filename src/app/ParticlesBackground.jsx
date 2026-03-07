"use client";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 60 },
          size: { value: 2 },
          move: { speed: 0.6 },
          opacity: { value: 0.5 },
          color: { value: "#ffffff" },
          links: { enable: true, opacity: 0.2 }
        }
      }}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}