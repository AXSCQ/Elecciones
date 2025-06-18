import React, { useState, useEffect } from 'react';
import { politicalTree } from '../../data/politicalTree.js';

const EnhancedPoliticalTree = () => {
  const [selectedParty, setSelectedParty] = useState('mas');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const parties = Object.keys(politicalTree).filter(key => !politicalTree[key].parent);

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.2, 2));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
  const resetZoom = () => setZoomLevel(1);

  const openCandidateModal = (candidate) => {
    setSelectedCandidate(candidate);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCandidate(null);
  };

  const renderCandidate = (candidate, level = 0, isVice = false) => {
    const marginLeft = level * 40;
    const cardSize = level === 0 ? 'w-64 h-80' : level === 1 ? 'w-56 h-72' : 'w-48 h-64';
    const textSize = level === 0 ? 'text-lg' : level === 1 ? 'text-base' : 'text-sm';
    
    return (
      <div 
        key={candidate.id}
        className={`${cardSize} bg-gradient-to-b from-blue-800/90 to-blue-900/90 rounded-xl shadow-xl border border-blue-400/50 p-4 text-center transform transition-all hover:scale-105 hover:shadow-blue-400/30 hover:shadow-2xl hover:-translate-y-1 cursor-pointer ${isVice ? 'border-purple-400/50' : ''}`}
        style={{ marginLeft: `${marginLeft}px` }}
        onClick={() => openCandidateModal(candidate)}
      >
        <div className={`${level === 0 ? 'w-20 h-20' : level === 1 ? 'w-16 h-16' : 'w-12 h-12'} mx-auto rounded-full overflow-hidden border-4 ${isVice ? 'border-purple-400/70' : 'border-blue-400/70'} shadow-lg mb-3 bg-blue-800/50`}>
          <img 
            src={candidate.image} 
            alt={candidate.name} 
            className="object-cover w-full h-full"
            onError={(e) => {
              e.target.src = '/Fondos/Candidatos1x1/placeholder-profile.jpg';
            }}
          />
        </div>
        <h3 className={`${textSize} font-bold text-white mb-1`}>{candidate.name}</h3>
        <p className={`${level === 0 ? 'text-sm' : 'text-xs'} text-blue-200 mb-2`}>{candidate.role}</p>
        {candidate.region && (
          <p className="text-xs text-blue-300 mb-2">Región: {candidate.region}</p>
        )}
        <p className={`${level === 0 ? 'text-xs' : 'text-xs'} text-gray-300 line-clamp-3`}>
          {candidate.bio}
        </p>
        <button className="text-xs text-blue-100 bg-blue-700/50 hover:bg-blue-700/70 rounded-full px-3 py-1 transition-colors border border-blue-500/30 shadow shadow-blue-500/20 mt-2">
          Ver Detalles
        </button>
      </div>
    );
  };

  const renderPartyStructure = (partyData) => {
    if (!partyData || !partyData.candidates) return null;

    const { candidates } = partyData;
    
    return (
      <div className="space-y-8">
        {/* Presidente y Vicepresidente */}
        {candidates.president && (
          <div className="flex flex-col items-center space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Ejecutivo</h3>
              <div className="h-1 w-20 bg-blue-500 mx-auto mb-4"></div>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              {renderCandidate(candidates.president, 0)}
              
              {/* Línea conectora */}
              <div className="w-0.5 h-8 bg-blue-400/50"></div>
              
              {candidates.president.vicepresident && 
                renderCandidate(candidates.president.vicepresident, 1, true)
              }
            </div>
          </div>
        )}

        {/* Senadores */}
        {candidates.senators && candidates.senators.length > 0 && (
          <div className="mt-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Senadores</h3>
              <div className="h-1 w-20 bg-green-500 mx-auto mb-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {candidates.senators.map(senator => renderCandidate(senator, 2))}
            </div>
          </div>
        )}

        {/* Diputados */}
        {candidates.deputies && candidates.deputies.length > 0 && (
          <div className="mt-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Diputados</h3>
              <div className="h-1 w-20 bg-yellow-500 mx-auto mb-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
              {candidates.deputies.map(deputy => renderCandidate(deputy, 3))}
            </div>
          </div>
        )}

        {/* Aliados */}
        {partyData.allies && partyData.allies.length > 0 && (
          <div className="mt-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Aliados y Coaliciones</h3>
              <div className="h-1 w-20 bg-purple-500 mx-auto mb-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partyData.allies.map(allyId => {
                const ally = politicalTree[allyId];
                if (!ally) return null;
                
                return (
                  <div key={allyId} className="bg-purple-800/30 rounded-xl p-4 border border-purple-400/30">
                    <h4 className="text-lg font-bold text-purple-200 mb-2">{ally.name}</h4>
                    <p className="text-sm text-purple-300 mb-3">({ally.shortName})</p>
                    
                    {ally.candidates && (
                      <div className="space-y-2">
                        {ally.candidates.senators && ally.candidates.senators.map(senator => (
                          <div key={senator.id} className="text-xs text-white bg-purple-700/30 rounded p-2">
                            <strong>{senator.name}</strong> - {senator.role}
                            {senator.region && <span className="text-purple-200"> ({senator.region})</span>}
                          </div>
                        ))}
                        {ally.candidates.deputies && ally.candidates.deputies.map(deputy => (
                          <div key={deputy.id} className="text-xs text-white bg-purple-700/30 rounded p-2">
                            <strong>{deputy.name}</strong> - {deputy.role}
                            {deputy.region && <span className="text-purple-200"> ({deputy.region})</span>}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  const selectedPartyData = politicalTree[selectedParty];

  return (
    <div className="w-full">
      {/* Selector de Partidos */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Selecciona un Partido Político</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {parties.map(partyId => {
            const party = politicalTree[partyId];
            return (
              <button
                key={partyId}
                onClick={() => setSelectedParty(partyId)}
                className={`px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 ${
                  selectedParty === partyId
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-black/50 text-gray-300 hover:bg-black/70'
                } border border-blue-400/30`}
                style={{ 
                  backgroundColor: selectedParty === partyId ? party.color : undefined,
                  borderColor: party.color + '50'
                }}
              >
                {party.shortName}
                <div className="text-xs mt-1">{party.name}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Controles de Zoom */}
      <div className="flex justify-center mb-6">
        <div className="bg-black/50 rounded-xl p-2 flex gap-2 border border-blue-400/30">
          <button
            onClick={zoomOut}
            className="bg-blue-700/50 hover:bg-blue-700/70 text-white rounded-lg w-10 h-10 flex items-center justify-center transition-colors"
            title="Alejar"
          >
            −
          </button>
          <button
            onClick={resetZoom}
            className="bg-blue-700/50 hover:bg-blue-700/70 text-white rounded-lg px-3 h-10 flex items-center justify-center transition-colors text-sm"
            title="Restablecer"
          >
            {Math.round(zoomLevel * 100)}%
          </button>
          <button
            onClick={zoomIn}
            className="bg-blue-700/50 hover:bg-blue-700/70 text-white rounded-lg w-10 h-10 flex items-center justify-center transition-colors"
            title="Acercar"
          >
            +
          </button>
        </div>
      </div>

      {/* Árbol Político */}
      <div className="bg-black/40 rounded-2xl p-8 border border-blue-400/30 overflow-auto">
        <div 
          className="transition-transform duration-300"
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
        >
          {selectedPartyData && (
            <div className="min-h-[600px]">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-white mb-2" style={{ color: selectedPartyData.color }}>
                  {selectedPartyData.name}
                </h2>
                <p className="text-xl text-gray-300">({selectedPartyData.shortName})</p>
                <div className="h-1 w-32 mx-auto mt-4" style={{ backgroundColor: selectedPartyData.color }}></div>
              </div>
              
              {renderPartyStructure(selectedPartyData)}
            </div>
          )}
        </div>
      </div>

      {/* Modal de Detalles del Candidato */}
      {showModal && selectedCandidate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div 
            className="bg-gradient-to-b from-blue-900 to-blue-950 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-blue-400/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedCandidate.name}</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-400/70 shadow-lg bg-blue-800/50">
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
                <p className="text-blue-200 font-medium text-lg mb-2">{selectedCandidate.role}</p>
                {selectedCandidate.region && (
                  <p className="text-blue-300 mb-4">Región: {selectedCandidate.region}</p>
                )}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-blue-400 mb-2">Biografía</h3>
                    <p className="text-white leading-relaxed">{selectedCandidate.bio}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <button
                onClick={closeModal}
                className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
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

export default EnhancedPoliticalTree;
