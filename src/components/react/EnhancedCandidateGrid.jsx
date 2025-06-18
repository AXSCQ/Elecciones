import React, { useState, useEffect } from 'react';
import { candidates } from '../../data/candidates.js';

const EnhancedCandidateGrid = () => {
  const [filter, setFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);

  // Regiones de Bolivia para el filtro
  const regions = [
    { id: 'lp', name: 'La Paz' },
    { id: 'sc', name: 'Santa Cruz' },
    { id: 'cb', name: 'Cochabamba' },
    { id: 'or', name: 'Oruro' },
    { id: 'pt', name: 'Potosí' },
    { id: 'tj', name: 'Tarija' },
    { id: 'ch', name: 'Chuquisaca' },
    { id: 'bn', name: 'Beni' },
    { id: 'pd', name: 'Pando' }
  ];

  // Extraer partidos únicos para el filtro
  const parties = [...new Set(candidates.map(c => c.partyShort))];

  useEffect(() => {
    let result = candidates;
    
    if (filter) {
      result = result.filter(c => c.partyShort === filter);
    }
    
    if (regionFilter) {
      result = result.filter(c => c.region === regionFilter);
    }
    
    setFilteredCandidates(result);
  }, [filter, regionFilter]);

  const clearFilters = () => {
    setFilter('');
    setRegionFilter('');
  };

  if (!candidates || candidates.length === 0) {
    return <div className="text-white text-center py-8">No hay candidatos disponibles</div>;
  }

  return (
    <div className="space-y-8">
      {/* Filtros */}
      <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-blue-500/20">
        <h2 className="text-xl font-bold text-blue-300 mb-4">Filtrar candidatos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-300 mb-2 text-sm">Por partido político</label>
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full bg-black/60 text-white border border-blue-500/30 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Todos los partidos</option>
              {parties.map(party => (
                <option key={party} value={party}>{party}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2 text-sm">Por región</label>
            <select 
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="w-full bg-black/60 text-white border border-blue-500/30 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Todas las regiones</option>
              {regions.map(region => (
                <option key={region.id} value={region.id}>{region.name}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-end">
            <button 
              onClick={clearFilters}
              className="w-full bg-blue-600/70 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredCandidates.map((candidate) => (
          <div 
            key={candidate.id} 
            className="bg-black/60 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl border border-blue-500/20"
          >
            <div className="flex flex-col md:flex-row">
              {/* Imagen y datos básicos */}
              <div className="md:w-1/3 relative">
                <div 
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ backgroundColor: candidate.partyColor }}
                ></div>
                <img 
                  src={candidate.image} 
                  alt={candidate.name} 
                  className="w-full h-64 md:h-full object-cover"
                />
                <div 
                  className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: candidate.partyColor }}
                >
                  {candidate.partyShort}
                </div>
              </div>
              
              {/* Información del candidato */}
              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{candidate.name}</h3>
                    <p className="text-blue-300 mb-2">{candidate.party}</p>
                  </div>
                  <div className="bg-blue-900/50 px-3 py-1 rounded-lg text-sm text-white">
                    {candidate.role || "Candidato Presidencial"}
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-black/40 p-2 rounded-lg">
                    <span className="text-gray-400 text-xs">Edad</span>
                    <p className="text-white">{candidate.age} años</p>
                  </div>
                  <div className="bg-black/40 p-2 rounded-lg">
                    <span className="text-gray-400 text-xs">Profesión</span>
                    <p className="text-white">{candidate.profession}</p>
                  </div>
                  {candidate.education && (
                    <div className="bg-black/40 p-2 rounded-lg col-span-2">
                      <span className="text-gray-400 text-xs">Educación</span>
                      <p className="text-white">{candidate.education}</p>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4 line-clamp-3">{candidate.bio.substring(0, 150)}...</p>
                
                {/* Vicepresidente (si existe) */}
                {candidate.vicePresident && (
                  <div className="bg-black/40 p-3 rounded-lg mb-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={candidate.vicePresident.image || "/placeholder-profile.jpg"} 
                        alt={candidate.vicePresident.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Vicepresidente</p>
                      <p className="text-white font-medium">{candidate.vicePresident.name}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between items-center">
                  <a 
                    href={`/candidato/${candidate.id}`}
                    className="inline-block px-6 py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Ver perfil completo
                  </a>
                  
                  {candidate.socialMedia && (
                    <div className="flex gap-2">
                      {candidate.socialMedia.twitter && (
                        <a href={candidate.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                      )}
                      {candidate.socialMedia.facebook && (
                        <a href={candidate.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                      )}
                      {candidate.socialMedia.instagram && (
                        <a href={candidate.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mensaje cuando no hay resultados */}
      {filteredCandidates.length === 0 && (
        <div className="bg-black/40 text-white text-center py-12 rounded-xl">
          <p className="text-xl">No se encontraron candidatos con los filtros seleccionados</p>
          <button 
            onClick={clearFilters}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
};

export default EnhancedCandidateGrid;
