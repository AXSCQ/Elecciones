import React, { useState, useEffect } from 'react';
import InteractiveCandidates from './InteractiveCandidates';

const ElectionApp = () => {
  const [selectedParty, setSelectedParty] = useState(null);
  
  // Lista de partidos políticos para seleccionar
  const partidos = [
    { nombre: "MAS", color: "#3045b5", logo: "/Fondos/Logos/mas.png" },
    { nombre: "Comunidad Ciudadana", color: "#db2b1f", logo: "/Fondos/Logos/cc.png" },
    { nombre: "LIBRE 21", color: "#ffa500", logo: "/Fondos/Logos/libre21.png" },
    { nombre: "UN", color: "#1bbc9d", logo: "/Fondos/Logos/un.png" },
    { nombre: "Creemos", color: "#8e44ad", logo: "/Fondos/Logos/creemos.png" },
    { nombre: "Frente Popular", color: "#27ae60", logo: "/Fondos/Logos/fp.png" },
    { nombre: "Bolivia Dice No", color: "#16a085", logo: "/Fondos/Logos/bdn.png" },
    { nombre: "Unidad Nacional", color: "#e74c3c", logo: "/Fondos/Logos/una.png" },
  ];

  const handleSelectParty = (party) => {
    setSelectedParty(party === selectedParty ? null : party);
  };

  return (
    <main className="relative min-h-screen overflow-hidden w-full max-w-[100vw] bg-gradient-to-b from-blue-900 to-black">
      {/* Fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40" 
        style={{ backgroundImage: "url('/Fondos/wmremove-transformed.jpg')" }}
      ></div>
      
      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Encabezado con título */}
        <header className="py-6 text-center relative">
          {/* Efecto de brillo superior */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
            Elecciones <span className="text-yellow-400 relative inline-block">
              Bolivia 2025
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400"></span>
            </span>
          </h1>
          <p className="text-gray-300 mt-2 md:text-lg">Candidatos Presidenciales</p>
        </header>

        {/* Sección de partidos políticos */}
        <section className="pt-2 pb-8 px-4">
          <h2 className="text-xl text-white text-center mb-6">Selecciona un partido político</h2>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {partidos.map((partido) => (
              <button
                key={partido.nombre}
                onClick={() => handleSelectParty(partido.nombre)}
                className={`py-2 px-5 rounded-full transition-all duration-300 text-white text-sm md:text-base flex items-center ${selectedParty === partido.nombre ? 'bg-opacity-90 scale-110 shadow-lg' : 'bg-opacity-30 hover:bg-opacity-50 hover:scale-105'}`}
                style={{ 
                  backgroundColor: partido.color,
                  border: selectedParty === partido.nombre ? '2px solid white' : '1px solid rgba(255,255,255,0.2)',
                  boxShadow: selectedParty === partido.nombre ? `0 0 15px ${partido.color}90` : 'none'
                }}
              >
                {partido.nombre}
              </button>
            ))}
          </div>
        </section>
      
        {/* Sección de carrusel de candidatos - altura fija para mantener el carrusel centrado */}
        <section className="flex-grow flex items-center justify-center py-4 px-2" style={{ minHeight: '60vh' }}>
          <InteractiveCandidates selectedParty={selectedParty} />
        </section>
        
        {/* Instrucciones */}
        <div className="text-center text-white text-sm pb-6 opacity-80">
          <p>Haz clic en las tarjetas para ver más detalles de cada candidato</p>
          <p className="mt-2">Usa las flechas o los indicadores para navegar entre candidatos</p>
        </div>

        {/* Footer */}
        <footer className="py-4 text-center border-t border-white/20">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Elecciones Bolivia - Información no oficial</p>
        </footer>
      </div>
      
      <div className="absolute bottom-2 right-2 z-10 bg-black bg-opacity-50 p-1 px-2 rounded">
        <a href="https://www.bolivia.gob.bo" target="_blank" rel="noopener noreferrer" className="text-xs text-white no-underline">
          guik.pe
        </a>
      </div>
    </main>
  );
};

export default ElectionApp;
