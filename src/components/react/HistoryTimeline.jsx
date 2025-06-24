import { useState } from 'react';
import { boliviaHistory } from '../../data/boliviaHistory.js';

export default function HistoryTimeline() {
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTab, setActiveTab] = useState('timeline');

  const getEventIcon = (type) => {
    const icons = {
      transition: '🏛️',
      reform: '📜',
      conflict: '⚔️',
      crisis: '🚨',
      election: '🗳️'
    };
    return icons[type] || '📍';
  };

  const getEventColor = (type) => {
    const colors = {
      transition: 'bg-blue-500',
      reform: 'bg-green-500',
      conflict: 'bg-red-500',
      crisis: 'bg-orange-500',
      election: 'bg-purple-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Navegación por tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveTab('timeline')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            activeTab === 'timeline' 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50' 
              : 'bg-black/50 text-blue-300 hover:bg-black/70'
          }`}
        >
          Línea Temporal
        </button>
        <button
          onClick={() => setActiveTab('powers')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            activeTab === 'powers' 
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/50' 
              : 'bg-black/50 text-purple-300 hover:bg-black/70'
          }`}
        >
          División de Poderes
        </button>
        <button
          onClick={() => setActiveTab('presidents')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            activeTab === 'presidents' 
              ? 'bg-green-600 text-white shadow-lg shadow-green-600/50' 
              : 'bg-black/50 text-green-300 hover:bg-black/70'
          }`}
        >
          Presidentes
        </button>
        <button
          onClick={() => setActiveTab('events')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            activeTab === 'events' 
              ? 'bg-red-600 text-white shadow-lg shadow-red-600/50' 
              : 'bg-black/50 text-red-300 hover:bg-black/70'
          }`}
        >
          Eventos Clave
        </button>
      </div>

      {/* Contenido según el tab activo */}
      {activeTab === 'timeline' && (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Línea Temporal de la Democracia Boliviana
          </h2>
          
          {/* Timeline visual */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-green-400"></div>
            
            {boliviaHistory.periods.map((period, index) => (
              <div 
                key={period.id}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div 
                  className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
                  onClick={() => setSelectedPeriod(period)}
                >
                  <div 
                    className="bg-black/80 p-6 rounded-xl border-2 cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl"
                    style={{ borderColor: period.color }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{period.name}</h3>
                    <p className="text-lg font-semibold mb-2" style={{ color: period.color }}>
                      {period.yearStart} - {period.yearEnd}
                    </p>
                    <p className="text-gray-300 text-sm">{period.description}</p>
                    {period.president && (
                      <p className="text-blue-300 mt-2 font-medium">
                        Presidente: {period.president}
                      </p>
                    )}
                  </div>
                </div>
                
                {/* Círculo central */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform"
                  style={{ backgroundColor: period.color }}
                  onClick={() => setSelectedPeriod(period)}
                ></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'powers' && (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            División de Poderes del Estado
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(boliviaHistory.powerStructure).map(([key, power]) => (
              <div 
                key={key}
                className="bg-black/80 rounded-xl p-6 border-2 border-purple-500/50 hover:border-purple-400 transition-all hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{power.icon}</span>
                  <h3 className="text-2xl font-bold text-purple-400">{power.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{power.description}</p>
                <ul className="space-y-2">
                  {power.components.map((component, idx) => (
                    <li key={idx} className="text-white flex items-start">
                      <span className="text-purple-400 mr-2">▸</span>
                      {component}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'presidents' && (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Presidentes de la Era Democrática
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {boliviaHistory.periods.map(period => {
              if (period.president) {
                return (
                  <div 
                    key={period.id}
                    className="bg-black/80 rounded-lg p-4 border-2 hover:shadow-lg transition-all"
                    style={{ borderColor: period.color }}
                  >
                    <h4 className="font-bold text-lg text-white">{period.president}</h4>
                    <p className="text-sm" style={{ color: period.color }}>{period.party}</p>
                    <p className="text-gray-400 text-sm">{period.yearStart} - {period.yearEnd}</p>
                  </div>
                );
              } else if (period.presidents) {
                return period.presidents.map((pres, idx) => (
                  <div 
                    key={`${period.id}-${idx}`}
                    className="bg-black/80 rounded-lg p-4 border-2 hover:shadow-lg transition-all"
                    style={{ borderColor: period.color }}
                  >
                    <h4 className="font-bold text-lg text-white">{pres.name}</h4>
                    <p className="text-sm" style={{ color: period.color }}>{pres.party}</p>
                    <p className="text-gray-400 text-sm">{pres.period}</p>
                  </div>
                ));
              }
              return null;
            })}
          </div>
        </div>
      )}

      {activeTab === 'events' && (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Eventos Históricos Clave
          </h2>
          
          <div className="space-y-4">
            {boliviaHistory.periods.map(period => 
              period.keyEvents?.map(event => (
                <div 
                  key={`${period.id}-${event.year}-${event.title}`}
                  className="bg-black/80 rounded-xl p-6 border-l-4 hover:shadow-xl transition-all cursor-pointer"
                  style={{ borderLeftColor: period.color }}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className={`${getEventColor(event.type)} px-3 py-1 rounded-full text-white text-sm font-semibold mr-3`}>
                          {getEventIcon(event.type)} {event.year}
                        </span>
                        <h3 className="text-xl font-bold text-white">{event.title}</h3>
                      </div>
                      <p className="text-gray-300">{event.description}</p>
                      {event.media && (
                        <p className="text-blue-400 text-sm mt-2">
                          📎 Contenido multimedia disponible
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Modal para período seleccionado */}
      {selectedPeriod && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedPeriod(null)}
        >
          <div 
            className="bg-gray-900 rounded-xl p-8 max-w-2xl max-h-[80vh] overflow-y-auto border-2"
            style={{ borderColor: selectedPeriod.color }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-white mb-4">{selectedPeriod.name}</h3>
            <p className="text-lg mb-4" style={{ color: selectedPeriod.color }}>
              {selectedPeriod.yearStart} - {selectedPeriod.yearEnd}
            </p>
            <p className="text-gray-300 mb-6">{selectedPeriod.description}</p>
            
            {selectedPeriod.keyEvents && (
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Eventos Importantes:</h4>
                <div className="space-y-4">
                  {selectedPeriod.keyEvents.map((event, idx) => (
                    <div key={idx} className="bg-black/50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <span className={`${getEventColor(event.type)} px-2 py-1 rounded text-white text-sm mr-2`}>
                          {event.year}
                        </span>
                        <h5 className="font-bold text-white">{event.title}</h5>
                      </div>
                      <p className="text-gray-300 text-sm">{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <button 
              onClick={() => setSelectedPeriod(null)}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal para evento seleccionado */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="bg-gray-900 rounded-xl p-8 max-w-2xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-white mb-4">{selectedEvent.title}</h3>
            <p className={`${getEventColor(selectedEvent.type)} inline-block px-3 py-1 rounded-full text-white mb-4`}>
              {getEventIcon(selectedEvent.type)} {selectedEvent.year} {selectedEvent.month || ''}
            </p>
            <p className="text-gray-300 mb-6">{selectedEvent.description}</p>
            
            {selectedEvent.media && (
              <div className="space-y-4">
                {selectedEvent.media.video && (
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="text-blue-400 mb-2">🎥 Video disponible</p>
                    <p className="text-gray-400 text-sm">Próximamente: {selectedEvent.media.video}</p>
                  </div>
                )}
                {selectedEvent.media.image && (
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="text-green-400 mb-2">📷 Imagen disponible</p>
                    <p className="text-gray-400 text-sm">Próximamente: {selectedEvent.media.image}</p>
                  </div>
                )}
                {selectedEvent.media.gallery && (
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="text-purple-400 mb-2">🖼️ Galería disponible</p>
                    <p className="text-gray-400 text-sm">{selectedEvent.media.gallery.length} imágenes</p>
                  </div>
                )}
              </div>
            )}
            
            <button 
              onClick={() => setSelectedEvent(null)}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
