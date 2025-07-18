import React from 'react';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Candidatos', href: '/candidatos' },
  { name: 'Partidos', href: '/partidos' },
  { name: 'Historia', href: '/historia' },
  { name: 'Sabías que...', href: '/sabiasque' },
  { name: 'Árbol Político', href: '/arbol-politico' },
];

const socialLinks = [
  { name: 'Facebook', icon: 'facebook', href: '#' },
  { name: 'Twitter', icon: 'twitter', href: '#' },
  { name: 'Instagram', icon: 'instagram', href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-950/90 to-black/90 backdrop-blur-md text-white border-t border-blue-900/30 shadow-lg">
      {/* Sección principal del footer */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Logo y descripción */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🇧🇴</span>
              <span className="font-extrabold text-xl text-white tracking-wide drop-shadow-lg">Bolivia <span className="text-yellow-400">2025</span></span>
            </div>
            <p className="text-blue-100 text-sm mb-4 text-center md:text-left">
              Portal informativo sobre las elecciones presidenciales de Bolivia 2025.
              Conoce a los candidatos, partidos y propuestas para estas elecciones.
            </p>
          </div>
          
          {/* Columna 2: Enlaces rápidos */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold text-yellow-400 mb-4 drop-shadow-md">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-blue-200 hover:text-yellow-300 hover:translate-x-1 transition-all duration-200 text-sm flex items-center"
                  >
                    <span className="text-yellow-500 mr-1 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Columna 3: Información electoral */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold text-yellow-400 mb-4 drop-shadow-md">Información electoral</h3>
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-950/60 rounded-lg p-4 w-full border border-blue-800/30 shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <p className="text-xs text-blue-200 uppercase tracking-wider mb-1 font-semibold">FECHA DE ELECCIONES</p>
              <p className="text-xl font-bold text-yellow-400 drop-shadow-lg mb-2">17 DE AGOSTO DE 2025</p>
              <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-blue-700 mb-3"></div>
              <p className="text-sm text-blue-100">
                Recuerda verificar tu recinto electoral y llevar tu documento de identidad.  
              </p>
            </div>
          </div>
        </div>
        
        {/* Redes sociales */}
        <div className="mt-8 pt-6 border-t border-blue-900/30 flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            {socialLinks.map(link => (
              <a 
                key={link.name}
                href={link.href}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-800/50 to-blue-900/70 flex items-center justify-center hover:bg-blue-700 hover:scale-110 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300"
                aria-label={link.name}
              >
                {link.icon === 'facebook' && (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                )}
                {link.icon === 'twitter' && (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                )}
                {link.icon === 'instagram' && (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
          <p className="text-sm text-blue-200/70">© {new Date().getFullYear()} <span className="text-yellow-500">Bolivia Decide</span>. Sitio informativo no oficial.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
