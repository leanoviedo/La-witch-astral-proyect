"use client";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scroll
          ? "bg-black/80 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* LOGO */}
        <h1 className="text-xl font-bold text-white">La Witch Astral 🔮</h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-white">
          <a href="#inicio" className="hover:text-purple-400 transition">
            Inicio
          </a>
          <a href="#servicios" className="hover:text-purple-400 transition">
            Nuestros Servicios
          </a>
          <a href="#contacto" className="hover:text-purple-400 transition">
            Contacto
          </a>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-2xl focus:outline-none"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md shadow-lg border-t border-white/10">
          <a
            href="#inicio"
            className="block px-6 py-4 text-white hover:bg-purple-700/30 transition"
            onClick={() => setOpen(false)}
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="block px-6 py-4 text-white hover:bg-purple-700/30 transition"
            onClick={() => setOpen(false)}
          >
            Nuestros Servicios
          </a>
          <a
            href="#contacto"
            className="block px-6 py-4 text-white hover:bg-purple-700/30 transition"
            onClick={() => setOpen(false)}
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}