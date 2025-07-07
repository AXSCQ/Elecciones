import React, { useState } from 'react';
import { politicalTree } from '../../data/politicalTree.js';

const EnhancedPoliticalTree = () => {
  const [selectedParty, setSelectedParty] = useState('mas');
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const parties = Object.keys(politicalTree).filter(key => !politicalTree[key].parent);

  const openCandidateModal = (candidate) => {
    setSelectedCandidate(candidate);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCandidate(null);
  };

  const renderCandidate = (candidate, cardType = 'default') => {
    const cardStyles = {
      president: 'bg-gradient-to-br from-blue-400/20 to-blue-600/20 border-blue-400/50 shadow-blue-500/20',
      vicepresident: 'bg-gradient-to-br from-blue-400/20 to-blue-600/20 border-blue-400/50 shadow-blue-500/20',
      senator: 'bg-gradient-to-br from-green-500/20 to-emerald-600/20 border-green-400/50 shadow-green-500/20',
      deputy: 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-400/50 shadow-yellow-500/20',
      default: 'bg-gradient-to-br from-gray-500/20 to-slate-600/20 border-gray-400/50 shadow-gray-500/20'
    };

    const imageStyles = {
      president: 'w-24 h-24 border-4 border-blue-400/70',
      vicepresident: 'w-20 h-20 border-4 border-blue-400/70',
      senator: 'w-16 h-16 border-3 border-green-400/70',
      deputy: 'w-14 h-14 border-2 border-yellow-400/70',
      default: 'w-20 h-20 border-4 border-yellow-400/70'
    };

    const textSizes = {
      president: 'text-xl',
      vicepresident: 'text-lg',
      senator: 'text-sm',
      deputy: 'text-xs',
      default: 'text-base'
    };

    const cardSizes = {
      president: 'w-64 h-auto',
      vicepresident: 'w-56 h-auto',
      senator: 'w-48 h-auto',
      deputy: 'w-40 h-auto',
      default: 'w-48 h-auto'
    };

    return (
      <div
        key={candidate.id}
        className={`${cardStyles[cardType]} ${cardSizes[cardType]} rounded-2xl shadow-xl border backdrop-blur-sm p-4 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group`}
        onClick={() => openCandidateModal(candidate)}
      >
        <div className={`${imageStyles[cardType]} mx-auto rounded-full overflow-hidden shadow-lg mb-3 bg-black/20 group-hover:shadow-2xl transition-shadow duration-300`}>
          <img
            src={candidate.image}
            alt={candidate.name}
            className="object-cover w-full h-full"
            onError={(e) => {
              const isFemale = candidate.gender === 'female';
              e.target.src = isFemale
                ? '/PartidosP/SiluetaM.png'
                : '/PartidosP/SiluetaH.png';
            }}
          />
        </div>
        <h3 className={`${textSizes[cardType]} font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors`}>
          {candidate.name}
        </h3>
        <p className="text-xs text-blue-200 mb-2 font-medium">{candidate.role}</p>
        {candidate.region && (
          <p className="text-xs text-blue-300 mb-2 bg-blue-900/30 rounded-full px-2 py-1 inline-block">
            {candidate.region}
          </p>
        )}
        <p className="text-xs text-gray-300 line-clamp-2 mb-3 leading-relaxed">
          {candidate.bio}
        </p>
        <button className="text-xs text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-3 py-1 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          Ver Detalles
        </button>
      </div>
    );
  };

  const renderTreeStructure = (partyData) => {
    if (!partyData || !partyData.candidates) return null;

    const { candidates } = partyData;

    return (
      <div className="relative">
        {/* Presidente - Nivel 1 */}
        {candidates.president && (
          <div className="flex flex-col items-center mb-8">
            <div className="relative z-10">
              {renderCandidate(candidates.president, 'president')}
            </div>
            
            {/* Línea conectora hacia abajo */}
            {candidates.president.vicepresident && (
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400/70 to-blue-600/70 rounded-full"></div>
            )}
          </div>
        )}

        {/* Vicepresidente - Nivel 2 */}
        {candidates.president?.vicepresident && (
          <div className="flex flex-col items-center mb-8">
            <div className="relative z-10">
              {renderCandidate(candidates.president.vicepresident, 'vicepresident')}
            </div>
            
            {/* Línea conectora hacia abajo */}
            {candidates.senators && candidates.senators.length > 0 && (
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400/70 to-green-400/70 rounded-full"></div>
            )}
          </div>
        )}

        {/* Senadores - Nivel 3 */}
        {candidates.senators && candidates.senators.length > 0 && (
          <div className="flex flex-col items-center mb-8">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">Senadores</h3>
              <div className="h-0.5 w-16 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>
            
            {/* Líneas conectoras para senadores */}
            <div className="relative">
              {/* Línea horizontal principal */}
              {candidates.senators.length > 1 && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div 
                    className="h-0.5 bg-gradient-to-r from-green-400/70 to-green-600/70 rounded-full"
                    style={{ width: `${(candidates.senators.length - 1) * 250}px` }}
                  ></div>
                </div>
              )}
              
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                {candidates.senators.map((senator, index) => (
                  <div key={senator.id} className="relative">
                    {/* Línea conectora vertical individual */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-green-400/70 rounded-full"></div>
                    {renderCandidate(senator, 'senator')}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Línea conectora hacia diputados */}
            {candidates.deputies && candidates.deputies.length > 0 && (
              <div className="w-1 h-8 bg-gradient-to-b from-green-400/70 to-yellow-400/70 rounded-full"></div>
            )}
          </div>
        )}

        {/* Diputados - Nivel 4 */}
        {candidates.deputies && candidates.deputies.length > 0 && (
          <div className="flex flex-col items-center">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Diputados</h3>
              <div className="h-0.5 w-16 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
            </div>
            
            {/* Líneas conectoras para diputados */}
            <div className="relative">
              {/* Línea horizontal principal */}
              {candidates.deputies.length > 1 && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div 
                    className="h-0.5 bg-gradient-to-r from-yellow-400/70 to-yellow-600/70 rounded-full"
                    style={{ width: `${Math.min(candidates.deputies.length, 5) * 250}px` }}
                  ></div>
                </div>
              )}
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl">
                {candidates.deputies.map((deputy, index) => (
                  <div key={deputy.id} className="relative">
                    {/* Línea conectora vertical individual */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-yellow-400/70 rounded-full"></div>
                    {renderCandidate(deputy, 'deputy')}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const selectedPartyData = politicalTree[selectedParty];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Party Selector */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Selecciona un Partido Político</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {parties.map(partyId => {
              const party = politicalTree[partyId];
              return (
                <button
                  key={partyId}
                  onClick={() => setSelectedParty(partyId)}
                  className={`group relative overflow-hidden px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 ${selectedParty === partyId
                    ? 'text-white shadow-2xl'
                    : 'text-gray-300 hover:text-white bg-black/30 hover:bg-black/50'
                    } border-2 backdrop-blur-sm`}
                  style={{
                    backgroundColor: selectedParty === partyId ? party.color : undefined,
                    borderColor: party.color,
                    boxShadow: selectedParty === partyId ? `0 20px 40px ${party.color}30` : undefined
                  }}
                >
                  <div className="relative z-10">
                    <div className="text-lg font-bold">{party.shortName}</div>
                    <div className="text-sm opacity-90">{party.name}</div>
                  </div>
                  {selectedParty !== partyId && (
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ backgroundColor: party.color }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Political Tree Structure */}
        <div className="bg-black/20 rounded-3xl p-8 border border-white/10 backdrop-blur-lg shadow-2xl">
          {selectedPartyData && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ color: selectedPartyData.color }}>
                  {selectedPartyData.name}
                </h2>
                <p className="text-xl text-gray-300">({selectedPartyData.shortName})</p>
                <div className="h-1 w-32 mx-auto mt-4 rounded-full" style={{ backgroundColor: selectedPartyData.color }}></div>
              </div>

              {renderTreeStructure(selectedPartyData)}
            </div>
          )}
        </div>

        {/* Modal */}
        {showModal && selectedCandidate && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm" onClick={closeModal}>
            <div
              className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-blue-400/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedCandidate.name}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white text-3xl transition-colors hover:rotate-90 transform duration-300"
                >
                  ×
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-400/70 shadow-2xl bg-black/20 mx-auto mb-4">
                    <img
                      src={selectedCandidate.image}
                      alt={selectedCandidate.name}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        const isFemale = selectedCandidate.gender === 'female';
                        e.target.src = isFemale
                          ? '/PartidosP/SiluetaM.png'
                          : '/PartidosP/SiluetaH.png';
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-blue-900/30 rounded-2xl p-4 mb-4 border border-blue-400/30">
                    <p className="text-blue-200 font-bold text-lg mb-2">{selectedCandidate.role}</p>
                    {selectedCandidate.region && (
                      <p className="text-blue-300 text-sm">📍 Región: {selectedCandidate.region}</p>
                    )}
                  </div>

                  <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-600/30">
                    <h3 className="font-bold text-blue-400 mb-3 text-lg">Biografía</h3>
                    <p className="text-white leading-relaxed">{selectedCandidate.bio}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={closeModal}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedPoliticalTree;