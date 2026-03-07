"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 p-4 flex justify-between transition-all duration-500 ${
        scroll
          ? "bg-black/80 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <h1 className="text-xl font-bold text-white">La Witch Astral 🔮</h1>

      <div className="flex gap-6 text-white">
        <a href="#inicio" className="hover:text-purple-400">
          Inicio
        </a>

        <a href="#servicios" className="hover:text-purple-400">
          Nuestros Servicios
        </a>

        <a href="#contacto" className="hover:text-purple-400">
          Contacto
        </a>
      </div>
    </nav>
  );
}
