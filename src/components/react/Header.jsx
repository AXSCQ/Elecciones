import React from 'react';

import { useState } from 'react';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Candidatos', href: '#candidatos' },
  { name: 'Partidos', href: '#partidos' },
  { name: 'Historia', href: '#historia' },
  { name: 'Sabías que...', href: '#sabiasque' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-black/60 shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo/Nombre */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🇧🇴</span>
          <span className="font-extrabold text-xl text-white tracking-wide drop-shadow-lg select-none">Bolivia 2025</span>
        </div>
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
        {/* Modo oscuro (placeholder) */}
        <button className="ml-6 text-yellow-300 hover:text-white transition-colors text-2xl" title="Modo oscuro (próximamente)">
          <span role="img" aria-label="Modo oscuro">🌙</span>
        </button>
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
