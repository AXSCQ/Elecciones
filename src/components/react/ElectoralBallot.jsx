import React, { useState } from 'react';
import { candidates } from '../../data/candidates.js';

const ElectoralBallot = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  // Organizar candidatos para la boleta (máximo 10)
  const ballotCandidates = candidates.slice(0, 10);
  
  // Dividir en dos filas de 5
  const topRow = ballotCandidates.slice(0, 5);
  const bottomRow = ballotCandidates.slice(5, 10);

  const handleCandidateClick = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const renderCandidateCard = (candidate, index) => {
    const cardNumber = index + 1;
    
    return (
      <div 
        key={candidate.id}
        className="relative bg-gradient-to-b from-gray-900 to-black rounded-xl shadow-xl border border-gray-700 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
        onClick={() => handleCandidateClick(candidate)}
        style={{ minHeight: '400px' }}
      >
        {/* Número de la boleta - Estilo electoral */}
        <div 
          className="absolute top-2 left-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 border-2 border-white"
          style={{ backgroundColor: candidate.partyColor }}
        >
          {cardNumber}
        </div>

        {/* Etiqueta del partido en la esquina superior derecha */}
        <div className="absolute top-2 right-2 z-10">
          <span 
            className="px-2 py-1 rounded text-xs font-bold text-white"
            style={{ backgroundColor: candidate.partyColor }}
          >
            {candidate.partyShort}
          </span>
        </div>

        {/* Imagen del candidato */}
        <div className="relative h-80 overflow-hidden">
          <img 
            src={candidate.image} 
            alt={candidate.name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = '/Fondos/Candidatos1x1/placeholder-profile.jpg';
            }}
          />
          
          {/* Gradiente overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          
          {/* Información del candidato sobre la imagen */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-bold mb-1">{candidate.name}</h3>
            <p className="text-sm text-gray-300 mb-2">{candidate.party}</p>
            
            {/* Información del vicepresidente */}
            {candidate.vicepresident && (
              <div className="flex items-center space-x-2 mt-2">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white">
                  <img 
                    src={candidate.vicepresident.image || '/Fondos/Candidatos1x1/placeholder-profile.jpg'} 
                    alt={candidate.vicepresident.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-300">→ {candidate.vicepresident.name}</p>
                  <p className="text-xs text-gray-400">{candidate.vicepresident.profession}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Checkbox para simular voto */}
        <div className="absolute bottom-2 right-2">
          <div className="w-5 h-5 border-2 border-white rounded bg-white/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded bg-white/50"></div>
          </div>
        </div>
      </div>
    );
  };

  const renderEmptySlot = (number) => {
    return (
      <div 
        key={`empty-${number}`}
        className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl border-2 border-dashed border-gray-600 flex items-center justify-center opacity-50"
        style={{ minHeight: '400px' }}
      >
        {/* Número del slot vacío */}
        <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold text-lg border-2 border-gray-400">
          {number}
        </div>
        
        <div className="text-center text-gray-400">
          <div className="text-4xl mb-2">📋</div>
          <p className="text-sm">Espacio disponible</p>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Fila superior (1-5) */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {topRow.map((candidate, index) => renderCandidateCard(candidate, index))}
        
        {/* Llenar espacios vacíos si hay menos de 5 candidatos */}
        {Array.from({ length: 5 - topRow.length }, (_, i) => 
          renderEmptySlot(topRow.length + i + 1)
        )}
      </div>

      {/* Fila inferior (6-10) */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {bottomRow.map((candidate, index) => renderCandidateCard(candidate, index + 5))}
        
        {/* Llenar espacios vacíos si hay menos de 5 candidatos */}
        {Array.from({ length: 5 - bottomRow.length }, (_, i) => 
          renderEmptySlot(5 + bottomRow.length + i + 1)
        )}
      </div>


      {/* Modal de candidato seleccionado - Manteniendo el estilo original */}
      {selectedCandidate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedCandidate(null)}>
          <div 
            className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedCandidate.name}</h2>
              <button
                onClick={() => setSelectedCandidate(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 shadow-lg mx-auto" style={{ borderColor: selectedCandidate.partyColor }}>
                  <img 
                    src={selectedCandidate.image} 
                    alt={selectedCandidate.name} 
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.src = '/Fondos/Candidatos1x1/placeholder-profile.jpg';
                    }}
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="space-y-4">
                  <div>
                    <span 
                      className="inline-block px-4 py-2 rounded-full text-white font-semibold"
                      style={{ backgroundColor: selectedCandidate.partyColor }}
                    >
                      {selectedCandidate.party} ({selectedCandidate.partyShort})
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-blue-400 mb-2">Información Personal</h3>
                    <p className="text-gray-300"><strong>Edad:</strong> {selectedCandidate.age} años</p>
                    <p className="text-gray-300"><strong>Profesión:</strong> {selectedCandidate.profession}</p>
                    <p className="text-gray-300">
                      <strong>Educación:</strong>{" "}
                      {typeof selectedCandidate.education === "string" ? (
                        selectedCandidate.education
                      ) : (
                        <>
                          {selectedCandidate.education.primary}, {selectedCandidate.education.secondary}, {selectedCandidate.education.university}
                          {selectedCandidate.education.degrees?.length > 0 && (
                            <>. Grados: {selectedCandidate.education.degrees.join(", ")}</>
                          )}
                          {selectedCandidate.education.specializations?.length > 0 && (
                            <>. Especializaciones: {selectedCandidate.education.specializations.join(", ")}</>
                          )}
                        </>
                      )}
                    </p>
                    {selectedCandidate.region && (
                      <p className="text-gray-300"><strong>Región:</strong> {selectedCandidate.region.toUpperCase()}</p>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-blue-400 mb-2">Biografía</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedCandidate.bio}</p>
                  </div>

                  {selectedCandidate.vicepresident && (
                    <div>
                      <h3 className="font-bold text-blue-400 mb-2">Vicepresidente</h3>
                      <p className="text-gray-300"><strong>{selectedCandidate.vicepresident.name}</strong></p>
                      <p className="text-gray-300">{selectedCandidate.vicepresident.bio}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center space-x-4">
              <a
                href={`/candidato/${selectedCandidate.id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Ver Perfil Completo
              </a>
              <button
                onClick={() => setSelectedCandidate(null)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ElectoralBallot;
