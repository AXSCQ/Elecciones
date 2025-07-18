import React from 'react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Candidatos', href: '/candidatos' },
  { name: 'Partidos', href: '/partidos' },
  { name: 'Historia', href: '/historia' },
  { name: 'Sabías que...', href: '/sabiasque' },
  { name: 'Árbol Político', href: '/arbol-politico' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Efecto para detectar el scroll y cambiar la apariencia del header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    // Agregar el event listener
    window.addEventListener('scroll', handleScroll);
    
    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-black/60 backdrop-blur'}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo/Nombre */}
        <a href="/" className="flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:brightness-110">
          <span className="text-2xl">🇧🇴</span>
          <span className="font-extrabold text-xl text-white tracking-wide drop-shadow-lg">Bolivia <span className="text-yellow-400">2025</span></span>
        </a>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 ml-8">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href}
                 className="text-white font-medium px-2 py-1 rounded transition-all duration-200 hover:bg-white/10 hover:text-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 underline-offset-8 hover:underline">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Espacio para futuros elementos del header */}
        {/* Mobile menu button */}
        <button
          className="md:hidden ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </nav>
      {/* Mobile nav */}
      {open && (
        <ul className="md:hidden flex flex-col gap-2 bg-black/80 px-6 py-4 animate-fade-in-down">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href}
                 className="block text-white font-medium px-2 py-2 rounded hover:bg-white/10 hover:text-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                 onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
