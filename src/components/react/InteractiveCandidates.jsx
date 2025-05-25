import React, { useState } from 'react';

const InteractiveCandidates = () => {
  // Estado para rastrear sobre qué candidato está el mouse
  const [hoveredCandidate, setHoveredCandidate] = useState(null);

  // Definición de los candidatos con sus coordenadas y datos precisos
  const candidates = [
    // Fila superior (de izquierda a derecha)
    { id: 1, name: "Candidata 1", image: "/Fondos/Candidatos1x1/image (2).png", coords: { top: '5%', left: '15%', width: '18%', height: '30%' } },  // Mujer con lentes
    { id: 2, name: "Candidato 2", image: "/Fondos/Candidatos1x1/image (3).png", coords: { top: '5%', left: '33%', width: '18%', height: '30%' } },  // Hombre con barba
    { id: 3, name: "Candidato 3", image: "/Fondos/Candidatos1x1/image (4).png", coords: { top: '5%', left: '51%', width: '18%', height: '30%' } },  // Hombre con lentes
    { id: 4, name: "Candidato 4", image: "/Fondos/Candidatos1x1/image (5).png", coords: { top: '5%', left: '69%', width: '18%', height: '30%' } },  // Joven sonriente
    { id: 5, name: "Candidato 5", image: "/Fondos/Candidatos1x1/image (6).png", coords: { top: '5%', left: '87%', width: '18%', height: '30%' } },  // Hombre con barba clara
    
    // Fila inferior (de izquierda a derecha)
    { id: 6, name: "Candidato 6", image: "/Fondos/Candidatos1x1/image (7).png", coords: { top: '50%', left: '15%', width: '18%', height: '30%' } },  // Hombre serio
    { id: 7, name: "Candidato 7", image: "/Fondos/Candidatos1x1/image (8).png", coords: { top: '50%', left: '33%', width: '18%', height: '30%' } },  // Hombre sonriente
    { id: 8, name: "Candidato 8", image: "/Fondos/Candidatos1x1/image (9).png", coords: { top: '50%', left: '51%', width: '18%', height: '30%' } },  // Hombre serio con traje
    { id: 9, name: "Candidato 9", image: "/Fondos/Candidatos1x1/image (10).png", coords: { top: '50%', left: '69%', width: '18%', height: '30%' } }, // Hombre con bigote
    { id: 10, name: "Candidato 10", image: "/Fondos/Candidatos1x1/image (11).png", coords: { top: '50%', left: '87%', width: '18%', height: '30%' } }, // Hombre mayor
  ];

  return (
    <div className="relative w-full h-full">
      {/* Imagen principal de todos los candidatos - se oscurece cuando hay hover */}
      <div 
        className="relative w-full h-full overflow-hidden" 
        style={{
          background: 'rgba(0,0,0,0.85)',
          border: '5px solid rgba(0,0,0,0.95)',
          padding: '0px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.7)',
        }}
      >
        <img 
          src="/Fondos/Candidatos.png" 
          alt="Candidatos Elecciones Bolivia 2025" 
          className="w-full object-contain" 
          style={{
            maxHeight: '42vh',
            display: 'block',
            filter: hoveredCandidate ? 'brightness(0.4)' : 'brightness(1)',
            transition: 'filter 0.3s ease',
          }}
        />

        {/* Áreas sensibles al hover para cada candidato */}
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="absolute cursor-pointer"
            style={{
              top: candidate.coords.top,
              left: candidate.coords.left,
              width: candidate.coords.width,
              height: candidate.coords.height,
              zIndex: 20,
            }}
            onMouseEnter={() => setHoveredCandidate(candidate.id)}
            onMouseLeave={() => setHoveredCandidate(null)}
          >
            {/* Este div es invisible, solo para detectar el hover */}
          </div>
        ))}

        {/* Imágenes individuales de candidatos que aparecen en hover */}
        {candidates.map((candidate) => (
          hoveredCandidate === candidate.id && (
            <div
              key={`highlight-${candidate.id}`}
              className="absolute transition-all duration-300"
              style={{
                top: candidate.coords.top,
                left: candidate.coords.left,
                width: candidate.coords.width,
                height: candidate.coords.height,
                zIndex: 10,
                transform: 'scale(1.15)',
                filter: 'brightness(1.3) drop-shadow(0 0 8px rgba(255,255,255,0.5))',
                animation: 'pulse 1.5s infinite',
              }}
            >
              <img 
                src={candidate.image} 
                alt={candidate.name} 
                className="w-full h-full object-contain"
              />
              {/* Nombre del candidato que aparece al hacer hover */}
              <div 
                className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-1 px-2 text-sm"
                style={{ transform: 'translateY(100%)', opacity: 0.9 }}
              >
                {candidate.name}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default InteractiveCandidates;
