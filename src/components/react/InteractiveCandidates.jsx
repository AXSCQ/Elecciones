import React, { useState, useRef, useEffect } from 'react';
import CandidateCard from './CandidateCard';
import { candidates } from '../../data/candidates.js';

const InteractiveCandidates = ({ selectedParty }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef(null);
  
  // Detectar si es un dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Usamos los candidatos importados desde data/candidates.js
  // Si no hay candidatos en el archivo importado, usamos un array vacío
  const candidatesData = candidates || [];

  // Función para navegar a la página del candidato
  const handleCandidateClick = (candidateId) => {
    // Navegamos a la página del candidato usando su ID
    window.location.href = `/candidato/${candidateId}`;
  };

  // Función para navegar al siguiente candidato
  const nextCandidate = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === candidatesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para navegar al candidato anterior
  const prevCandidate = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? candidatesData.length - 1 : prevIndex - 1
    );
  };

  // Efecto para seleccionar el candidato correspondiente cuando cambia el partido seleccionado
  useEffect(() => {
    if (selectedParty) {
      const candidateIndex = candidatesData.findIndex(c => c.partyShort === selectedParty);
      if (candidateIndex !== -1) {
        setActiveIndex(candidateIndex);
      }
    }
  }, [selectedParty]);

  // Renderizar las tarjetas de los candidatos
  const renderCandidateCards = () => {
    const totalVisible = isMobile ? 3 : 5;
    const cards = [];
    
    // Calculamos qué candidatos serán visibles en el carrusel arqueado
    for (let i = -Math.floor(totalVisible/2); i <= Math.floor(totalVisible/2); i++) {
      // Calcular el índice real con wrapping
      let idx = (activeIndex + i + candidates.length) % candidates.length;
      const candidate = candidates[idx];
      const isActive = i === 0;
      
      // Calcular posición arqueada:
      // - Escala: central más grande, laterales más pequeños
      // - Posición Y: central arriba, laterales más abajo en un arco
      // - Posición Z: central al frente, laterales atrás
      // - Opacidad: central 100%, laterales menos opacas
      const scale = isActive ? 1 : Math.max(0.55, 1 - Math.abs(i) * 0.25);
      
      // Efecto arco: tarjetas laterales más abajo siguiendo una curva
      const xOffset = i * (isMobile ? 80 : 150); // Espaciado horizontal
      const yOffset = Math.abs(i) * (isMobile ? 20 : 40); // Efecto arco: más lejos = más abajo
      const zIndex = 100 - Math.abs(i) * 10; // Central al frente, laterales atrás
      
      cards.push(
        <div
          key={candidate.id}
          className="absolute transition-all duration-300"
          style={{
            transform: `translateX(${xOffset}px) translateY(${yOffset}px) scale(${scale})`,
            zIndex,
            opacity: 1 - Math.abs(i) * 0.15, // Más alejado = más transparente
          }}
        >
          <CandidateCard 
            candidate={candidate} 
            isActive={isActive} 
            onClick={() => setActiveIndex(idx)}
          />
        </div>
      );
    }

    return cards;
  };
  
  return (
    <div className="w-full h-full overflow-hidden">
      {/* Contenido principal - sin superponer al fondo */}
      <div className="relative w-full h-full flex flex-col items-center justify-center py-10 px-4">
        {/* Contenedor semitransparente para el título */}
        <div 
          className="relative z-10 text-center mb-8 py-3 px-6 rounded-lg" 
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            maxWidth: '90%',
            width: 'auto',
            display: 'inline-block'
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">Candidatos Presidenciales 2025</h2>
          <p className="text-gray-300 mt-1 text-sm md:text-base">Conoce a los aspirantes a la presidencia de Bolivia</p>
        </div>
        
        {/* Carrusel arqueado de candidatos */}
        <div ref={carouselRef} className="relative z-10 w-full flex justify-center items-center mx-auto">
          <div className="flex justify-center items-center" style={{ height: isMobile ? '400px' : '500px', width: '100%', maxWidth: '800px' }}>
            {renderCandidateCards()}
          </div>
          
          {/* Controles de navegación */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevCandidate}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors border border-white/20"
              aria-label="Candidato anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Indicadores de posición */}
            <div className="flex items-center gap-2">
              {candidatesData.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`w-2.5 h-2.5 rounded-full transition-all ${activeIndex === idx ? 'bg-white scale-125' : 'bg-white/30'}`}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Ver candidato ${idx + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextCandidate}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors border border-white/20"
              aria-label="Siguiente candidato"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCandidates;
