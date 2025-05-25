import React, { useState } from 'react';
import InteractiveCandidates from './InteractiveCandidates';

const ElectionApp = () => {
  const [selectedParty, setSelectedParty] = useState(null);

  const handleSelectParty = (party) => {
    setSelectedParty(party);
  };

  return (
    <main className="relative h-[calc(100vh-170px)] min-h-[500px] overflow-hidden w-full max-w-[100vw]">
      {/* Contenedor principal con la imagen de candidatos */}
      <div className="flex flex-col h-full w-full">
        {/* Contenedor de la imagen de candidatos posicionado en la parte inferior como pie de página */}
        <div 
          className="fixed w-full flex justify-center" 
          style={{ 
            bottom: '-5px', /* Posición fija en la parte inferior */
            left: '0',
            right: '0',
            zIndex: 10 /* Asegura que esté por encima de otros elementos */
          }}
        >
          {/* Contenedor centrado con ancho fijo para hacer un cuadro más definido */}
          <div className="relative" style={{ width: '550px', maxWidth: '90%' }}>
            {/* Componente interactivo de candidatos */}
            <div style={{ width: '100%', height: '42vh' }}>
              <InteractiveCandidates />
            </div>
          </div>
        </div>
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
