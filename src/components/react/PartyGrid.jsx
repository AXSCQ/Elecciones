import React from 'react';
import { parties } from '../../data/parties.js';

const PartyGrid = () => {
  if (!parties || parties.length === 0) {
    return <div className="text-white text-center py-8">No hay partidos disponibles</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {parties.map((party) => (
        <div 
          key={party.id} 
          className="bg-black/60 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          style={{
            borderLeft: `4px solid ${party.color}`,
            boxShadow: `0 4px 20px ${party.color}30`
          }}
        >
          <div className="p-5 flex items-center gap-4">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
              style={{ backgroundColor: party.color }}
            >
              {party.logo ? (
                <img src={party.logo} alt={party.name} className="w-full h-full object-contain p-2" />
              ) : (
                party.shortName
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{party.name}</h3>
              <p className="text-gray-300 text-sm">{party.founded && `Fundado en ${party.founded}`}</p>
            </div>
          </div>
          
          <div className="px-5 pb-5">
            <div className="flex flex-wrap gap-2 mb-4">
              {party.ideology && party.ideology.map((item, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
            
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
              {party.description && party.description.substring(0, 120)}...
            </p>
            
            <a 
              href={`/partido/${party.id}`}
              className="inline-block w-full px-4 py-2 text-center rounded-md transition-colors"
              style={{ 
                backgroundColor: `${party.color}CC`,
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              Ver perfil completo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartyGrid;
