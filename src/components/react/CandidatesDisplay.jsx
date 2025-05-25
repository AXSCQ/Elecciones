import React from 'react';

const candidatesData = {
  mas: {
    name: 'MAS',
    logo: '/PartidosP/MAS.svg',
    candidates: [
      { position: 'Presidente', name: 'Berna', image: '/Politicos/CastilloMAS.png' },
      { position: 'Vicepresidente', name: 'Castillo', image: '/Politicos/BernaMAS.png' }
    ]
  },
  // Datos de ejemplo para otros partidos
  cc: {
    name: 'CC',
    logo: null,
    candidates: [
      { position: 'Presidente', name: 'Candidato CC', image: null },
      { position: 'Vicepresidente', name: 'Vice CC', image: null }
    ]
  },
  un: {
    name: 'UN',
    logo: null,
    candidates: [
      { position: 'Presidente', name: 'Candidato UN', image: null },
      { position: 'Vicepresidente', name: 'Vice UN', image: null }
    ]
  }
  // Puedes agregar más partidos según sea necesario
};

const CandidatesDisplay = ({ selectedParty }) => {
  // Si no hay partido seleccionado, mostrar el MAS por defecto
  const partyId = selectedParty?.id || 'mas';
  const party = candidatesData[partyId] || candidatesData.mas;

  return (
    <div className="candidatos-destacados">
      <div className="partido-destacado">
        <div className="partido-etiqueta">
          {party.logo ? (
            <img src={party.logo} alt={party.name} />
          ) : (
            <div className="logo-mini" style={{ width: '20px', height: '20px', backgroundColor: selectedParty?.color || '#f44336' }}></div>
          )}
          <span>{party.name}</span>
        </div>
        
        <div className="candidatos-grupo">
          {party.candidates.map((candidate, index) => (
            <div 
              key={index} 
              className={`candidato-imagen ${candidate.position === 'Presidente' ? 'presidente-container' : 'vicepresidente-container'}`}
            >
              {candidate.image ? (
                <img 
                  src={candidate.image} 
                  alt={candidate.name} 
                  className={candidate.position === 'Presidente' ? 'presidente-img' : 'vicepresidente-img'} 
                />
              ) : (
                <div className="candidato-placeholder">
                  {candidate.name.charAt(0)}
                </div>
              )}
              <div className="candidato-nombre">{candidate.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CandidatesDisplay;
