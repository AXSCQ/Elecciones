import React, { useState, useEffect } from 'react';
import { candidates } from '../../data/candidates.js';

const EnhancedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  
  // Función para determinar la posición de la imagen según el ID del candidato
  const getImagePosition = (candidateId) => {
    switch(candidateId) {
      case "1": // Eduardo Del Castillo
        return "object-center"; // Centrado
      case "2": // Samuel Doria Medina
        return "object-center"; // Arriba
      case "3": // Tuto Quiroga
        return "object-center-bottom"; // Abajo para mostrar más la cara
      case "4": // Manfred Reyes Villa
        return "object-center"; // Centrado arriba
      case "5": // Andrónico Rodríguez
        return "object-center"; // Centrado
      case "6": // Luis Fernando Camacho
        return "object-center"; // Centrado
      case "7": // Samuel Doria Medina
        return "object-center"; // Arriba
      case "8": // Chi Hyun Chung
        return "object-center"; // Centrado
      default:
        return "object-center"; // Valor predeterminado
    }
  };

  // Ya no hay auto-play

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? candidates.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === candidates.length - 1 ? 0 : currentIndex + 1);
  };

  const openCandidateModal = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const closeCandidateModal = () => {
    setSelectedCandidate(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      {/* Carrusel Principal */}
      <div className="relative overflow-hidden rounded-xl md:rounded-3xl shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10">
        {/* Candidato Principal */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img 
              src={candidates[currentIndex].image} 
              alt={candidates[currentIndex].name}
              className={`w-full h-full object-cover ${getImagePosition(candidates[currentIndex].id)}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80"></div>
          </div>
          
          {/* Información del candidato principal */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-4 sm:px-8 md:px-12">
            {/* Información a la izquierda */}
            <div className="flex-1 text-white">
              <div className="mb-4">
                <span 
                  className="inline-block px-4 py-2 rounded-full text-sm font-bold text-white mb-4"
                  style={{ backgroundColor: candidates[currentIndex].partyColor }}
                >
                  {candidates[currentIndex].partyShort}
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg text-center md:text-left">
                {candidates[currentIndex].name}
              </h2>
              
              <p className="text-lg sm:text-xl text-blue-200 mb-2 md:mb-4 font-medium text-center md:text-left">
                {candidates[currentIndex].party}
              </p>
              
              <p className="text-base sm:text-lg text-gray-300 mb-4 md:mb-6 max-w-lg leading-relaxed text-center md:text-left hidden sm:block">
                {candidates[currentIndex].bio.substring(0, 200)}...
              </p>
              
              {/* Información del vicepresidente */}
              {(candidates[currentIndex].vicepresident || candidates[currentIndex].vicePresident) && (
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/20">
                  <p className="text-sm text-blue-300 mb-2">Vicepresidente:</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/50">
                      <img 
                        src={(candidates[currentIndex].vicepresident || candidates[currentIndex].vicePresident)?.image || '/Fondos/Candidatos1x1/placeholder-profile.jpg'} 
                        alt={(candidates[currentIndex].vicepresident || candidates[currentIndex].vicePresident)?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{(candidates[currentIndex].vicepresident || candidates[currentIndex].vicePresident)?.name}</p>
                      <p className="text-gray-300 text-sm">{(candidates[currentIndex].vicepresident || candidates[currentIndex].vicePresident)?.profession}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-center md:items-start">
                <a
                  href="/arbol-politico"
                  className="w-full sm:w-auto text-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Ver Árbol Político
                </a>
                <a
                  href={`/candidato/${candidates[currentIndex].id}`}
                  className="w-full sm:w-auto text-center px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Perfil Completo
                </a>
              </div>
            </div>
            
            {/* Imagen del candidato a la derecha */}
            <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-8">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-white/30 shadow-2xl">
                <img 
                  src={candidates[currentIndex].image} 
                  alt={candidates[currentIndex].name}
                  className={`w-full h-full object-cover ${getImagePosition(candidates[currentIndex].id)}`}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Controles de navegación */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 shadow-lg border-2 border-white z-20"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 shadow-lg border-2 border-white z-20"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Indicadores de progreso */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {candidates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
        
        {/* El control de auto-play ha sido eliminado */}
      </div>
      
      {/* Miniatura de otros candidatos */}
      <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center">
        <div className="flex space-x-2 sm:space-x-3 md:space-x-4 overflow-x-auto pb-4 max-w-full px-2 sm:px-0">
          {candidates.map((candidate, index) => (
            <button
              key={candidate.id}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden border-2 sm:border-3 transition-all duration-300 transform hover:scale-110 ${
                index === currentIndex 
                  ? 'border-white shadow-lg scale-110' 
                  : 'border-white/30 hover:border-white/60'
              }`}
            >
              <img 
                src={candidate.image} 
                alt={candidate.name}
                className={`w-full h-full object-cover ${getImagePosition(candidate.id)}`}
              />
            </button>
          ))}
        </div>
      </div>
      
      {/* Botón para ver todos los candidatos */}
      <div className="text-center mt-4 sm:mt-6 md:mt-8">
        <a
          href="/candidatos"
          className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg sm:shadow-xl"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Ver Todos los Candidatos
        </a>
      </div>

      {/* Modal de detalles del candidato */}
      {selectedCandidate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeCandidateModal}>
          <div 
            className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedCandidate.name}</h2>
              <button
                onClick={closeCandidateModal}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-xl overflow-hidden border-4 shadow-lg mx-auto" style={{ borderColor: selectedCandidate.partyColor }}>
                  <img 
                    src={selectedCandidate.image} 
                    alt={selectedCandidate.name} 
                    className="object-cover object-top w-full h-full"
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
                    <p className="text-gray-300"><strong>Educación:</strong> {selectedCandidate.education}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-blue-400 mb-2">Biografía</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedCandidate.bio}</p>
                  </div>

                  {(selectedCandidate.vicepresident || selectedCandidate.vicePresident) && (
                    <div>
                      <h3 className="font-bold text-blue-400 mb-2">Vicepresidente</h3>
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <p className="text-gray-300"><strong>{(selectedCandidate.vicepresident || selectedCandidate.vicePresident)?.name}</strong></p>
                        <p className="text-gray-400 text-sm">{(selectedCandidate.vicepresident || selectedCandidate.vicePresident)?.profession}</p>
                        <p className="text-gray-300 text-sm mt-2">{(selectedCandidate.vicepresident || selectedCandidate.vicePresident)?.bio}</p>
                      </div>
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
                onClick={closeCandidateModal}
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

export default EnhancedCarousel;
