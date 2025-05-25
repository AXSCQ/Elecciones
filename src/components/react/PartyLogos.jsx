import React, { useState } from 'react';

const partyData = [
  { id: 'mas', name: 'MAS', logo: '/PartidosP/MAS.svg', delay: 0, x: '15%', y: '20%', rotation: -10, color: '#f44336' },
  { id: 'cc', name: 'CC', logo: null, delay: 200, x: '35%', y: '15%', rotation: 5, color: '#2196f3' },
  { id: 'un', name: 'UN', logo: null, delay: 400, x: '65%', y: '25%', rotation: -5, color: '#ff9800' },
  { id: 'mts', name: 'MTS', logo: null, delay: 600, x: '80%', y: '35%', rotation: 8, color: '#4caf50' },
  { id: 'pdc', name: 'PDC', logo: null, delay: 800, x: '25%', y: '45%', rotation: -8, color: '#9c27b0' },
  { id: 'fpv', name: 'FPV', logo: null, delay: 1000, x: '50%', y: '20%', rotation: 12, color: '#f44336' },
  { id: 'sol', name: 'SOL', logo: null, delay: 1200, x: '70%', y: '10%', rotation: -15, color: '#607d8b' }
];

const PartyLogos = ({ onSelectParty }) => {
  const [selectedParty, setSelectedParty] = useState(null);

  const handlePartyClick = (party) => {
    setSelectedParty(party.id);
    if (onSelectParty) {
      onSelectParty(party);
    }
  };

  return (
    <div className="logos-flotantes">
      {partyData.map((party) => (
        <div 
          key={party.id}
          className={`logo-partido animate-float ${selectedParty === party.id ? 'selected' : ''}`}
          style={{
            '--delay': `${party.delay}ms`,
            '--x': party.x,
            '--y': party.y,
            '--rotation': `${party.rotation}deg`
          }}
          onClick={() => handlePartyClick(party)}
        >
          {party.logo ? (
            <img src={party.logo} alt={party.name} />
          ) : (
            <div className="logo-placeholder" style={{ backgroundColor: party.color }}>
              {party.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PartyLogos;
