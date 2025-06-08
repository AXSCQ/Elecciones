import React from 'react';
import { candidates } from '../../data/candidates.js';

const CandidateGrid = () => {
  if (!candidates || candidates.length === 0) {
    return <div className="text-white text-center py-8">No hay candidatos disponibles</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {candidates.map((candidate) => (
        <div 
          key={candidate.id} 
          className="bg-black/60 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          style={{
            borderTop: `4px solid ${candidate.partyColor}`,
            boxShadow: `0 4px 20px ${candidate.partyColor}30`
          }}
        >
          <div className="relative">
            <img 
              src={candidate.image} 
              alt={candidate.name} 
              className="w-full h-48 object-cover object-top"
            />
            <div 
              className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: candidate.partyColor }}
            >
              {candidate.partyShort}
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="text-xl font-bold text-white mb-1">{candidate.name}</h3>
            <p className="text-gray-300 text-sm mb-4">{candidate.party}</p>
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{candidate.bio.substring(0, 100)}...</p>
            <a 
              href={`/candidato/${candidate.id}`}
              className="inline-block w-full px-4 py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors"
            >
              Ver perfil completo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CandidateGrid;
