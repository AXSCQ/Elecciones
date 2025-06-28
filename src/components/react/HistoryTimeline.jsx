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
   // Componente para el contenido detallado del período 
  const PeriodDetailContent = ({ period, getEventColor }) => (
    <>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2">{period.name}</h3>
        <p className="text-lg font-semibold" style={{ color: period.color }}>
          {period.yearStart} - {period.yearEnd}
        </p>
      </div>
      <p className="text-gray-300 mb-4 leading-relaxed text-sm xl:text-base">{period.description}</p>
      {period.president && (
        <div className="bg-black/30 p-3 rounded-lg mb-4">
          <p className="text-blue-300 font-medium text-sm xl:text-base">Presidente: {period.president}</p>
        </div>
      )}
      {period.keyEvents && (
        <div>
          <h4 className="text-lg font-bold text-white mb-3 flex items-center">
            <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: period.color }}></span>
            Eventos Importantes
          </h4>
          <div className="space-y-3 max-h-40 overflow-y-auto">
            {period.keyEvents.slice(0, 3).map((event, idx) => (
              <div key={idx} className="bg-black/40 p-3 rounded-lg border-l-4"
                style={{ borderLeftColor: period.color }}>
                <div className="flex items-center mb-1">
                  <span className={`${getEventColor(event.type)} px-2 py-1 rounded text-white text-xs font-semibold mr-2`}>
                    {event.year}
                  </span>
                  <h5 className="font-bold text-white text-sm xl:text-base">{event.title}</h5>
                </div>
                <p className="text-gray-300 text-xs xl:text-sm leading-relaxed">{event.description}</p>
              </div>
            ))}
            {period.keyEvents.length > 3 && (
              <p className="text-gray-400 text-xs text-center italic">
                +{period.keyEvents.length - 3} eventos más...
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );

  // Componente para el contenido básico del período 
  const PeriodBasicContent = ({ period }) => (
    <>
      <h3 className="text-white font-bold text-lg lg:text-xl mb-1 lg:mb-2 drop-shadow-lg">{period.name}</h3>
      <p className="text-base lg:text-lg font-semibold mb-2 lg:mb-3 drop-shadow-md" style={{ color: period.color }}>
        {period.yearStart} - {period.yearEnd}
      </p>
      <p className="text-gray-300 text-sm lg:text-base leading-relaxed drop-shadow-md mb-3">{period.description}</p>
      {period.president && (
        <p className="text-blue-300 font-medium text-sm lg:text-base drop-shadow-md">
          Presidente: {period.president}
        </p>
      )}
    </>
  );

  // Componente para el círculo animado 
  const AnimatedCircle = ({ period, className = "" }) => (
    <div
      className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full border-4 border-white shadow-lg z-30 
    cursor-pointer transform transition-all duration-300 ease-in-out
    group-hover:scale-125 group-hover:shadow-2xl relative ${className}`}
      style={{ backgroundColor: period.color }}
    >
      <div className="w-full h-full rounded-full animate-ping absolute inset-0 opacity-0 group-hover:opacity-30"
        style={{ backgroundColor: period.color }}
      ></div>
    </div>
  );


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

      <div className="w-full px-4 py-8">
      {activeTab === 'timeline' && (
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Línea Temporal de la Democracia Boliviana
          </h2>

          <div className="relative py-40">
            {/* Líneas de tiempo */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 transform -translate-y-1/2 z-10 md:block hidden" />
            <div className="absolute left-3 top-0 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 z-10 md:hidden block" />

            {/* Contenedor de eventos */}
            <div className="flex md:flex-row flex-col md:justify-between items-start md:items-center relative z-20 px-4 md:px-20 lg:px-32 xl:px-40 w-full gap-24 md:gap-8 lg:gap-12">
              {boliviaHistory.periods.map((period, index) => {
                const isEven = index % 2 === 0;
                const isFirst = index === 0;
                const isLast = index === boliviaHistory.periods.length - 1;
                const arrowPosition = isFirst ? 'left' : isLast ? 'right' : 'center';

                return (
                  <div key={period.id} className="flex md:flex-col flex-row items-start md:items-center relative group w-full md:w-auto">

                    {/* MOBILE LAYOUT */}
                    <div className="md:hidden flex items-start gap-6 w-full relative">
                      <AnimatedCircle period={period} className="-ml-4 mt-1 flex-shrink-0" />

                      <div className="flex-1 pt-0">
                        <PeriodBasicContent period={period} />
                      </div>

                      {/* inform. móvil */}
                      <div
                        className="absolute left-12 top-1/2 transform -translate-y-1/2
                      w-80 sm:w-[550px] bg-gray-900 backdrop-blur-sm rounded-xl p-4 sm:p-6 border-2 shadow-2xl
                      opacity-0 scale-95 pointer-events-none
                      group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
                      transition-all duration-300 ease-in-out z-50 max-h-80 overflow-y-auto"
                        style={{ borderColor: period.color }}
                      > 
                        <PeriodDetailContent period={period} getEventColor={getEventColor} />
                      </div>
                    </div>

                    {/* DESKTOP LAYOUT */}
                    <div className="hidden md:flex md:flex-col md:items-center relative group w-full md:w-auto">
                      {/* Contenido básico */}
                      <div className={`absolute w-64 lg:w-72 xl:w-80 text-center z-30
                      ${isEven ? 'bottom-full mb-6' : 'top-full mt-6'}
                      group-hover:scale-105 transition-all duration-300 ease-in-out
                      opacity-90 group-hover:opacity-100`}
                      >
                        <PeriodBasicContent period={period} />
                      </div>

                      <AnimatedCircle period={period} />

                      {/* inform. desktop */}
                      <div
                        className={`absolute ${isEven ? 'bottom-full mb-4' : 'top-full mt-4'} 
                      ${isFirst ? 'left-0' : isLast ? 'right-0' : 'left-1/2 transform -translate-x-1/2'}
                      w-80 xl:w-96 bg-gray-900/95 backdrop-blur-sm rounded-xl p-6 border-2 shadow-2xl
                      opacity-0 scale-95 pointer-events-none
                      group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
                      transition-all duration-300 ease-in-out z-50`}
                        style={{ borderColor: period.color }}
                      >
                        
                        <PeriodDetailContent period={period} getEventColor={getEventColor} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  
      
    </div>
  );
}
