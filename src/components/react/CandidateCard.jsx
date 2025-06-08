import React from 'react';

const CandidateCard = ({ candidate, isActive = false, onClick }) => {
  const { name, image, party, partyShort } = candidate;
  
  return (
    <div 
      className={`candidate-card relative flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
        isActive 
          ? 'transform -translate-y-2 scale-105 z-10' 
          : 'opacity-85 scale-95'
      }`}
      onClick={onClick}
    >
      <div className={`relative mb-3 ${isActive ? 'ring-4 ring-offset-2' : ''}`} 
           style={{ 
             ringColor: candidate.partyColor || '#FFD700',
             boxShadow: isActive ? `0 0 15px ${candidate.partyColor || '#FFD700'}` : 'none' 
           }}>
        <img 
          src={image} 
          alt={name} 
          className="w-32 h-32 object-cover rounded-full"
        />
        {partyShort && (
          <span 
            className="absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: candidate.partyColor || '#333' }}
          >
            {partyShort}
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold text-white text-center">{name}</h3>
      <p className="text-sm text-gray-300 text-center mb-3">{party}</p>
      {isActive && (
        <a 
          href={`/candidato/${candidate.id}`}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
        >
          Ver perfil completo
        </a>
      )}
    </div>
  );
};

export default CandidateCard;
