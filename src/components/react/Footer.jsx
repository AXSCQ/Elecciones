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
  { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/profile.php?id=61578347075413' },
  { name: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/@boliviadecidelive' },
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

                {link.icon === 'tiktok' && (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 5 17.91a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1l-.04-.01z"/>
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
