import { useState } from 'react';
import { boliviaelecciones } from '../../data/boliviaelecciones.js';

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
    <div className="w-full px-4 py-8 bg-transparent min-h-screen">
      {/* Contenido según el tab activo */}
      {activeTab === 'timeline' && (
        <div className="space-y-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="text-yellow-400">Línea Temporal</span> <span className="text-white">de sucesos que precedieron a las elecciones 2020</span>
          </h2>

          <div className="relative py-40">
            {/* Línea horizontal para desktop */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 transform -translate-y-1/2 z-10
              md:block hidden">
            </div>

            {/* Línea vertical para mobile - posicionada a la izquierda */}
            <div className="absolute left-3 top-0 h-full w-1 bg-gradient-to-b from-yellow-400 via-red-500 to-blue-500 z-10
              md:hidden block">
            </div>

            {/* Contenedor de eventos */}
            <div className="flex md:flex-row flex-col md:justify-between items-start md:items-center relative z-20 px-4 md:px-20 lg:px-32 xl:px-40 w-full gap-24 md:gap-8 lg:gap-12">
              {boliviaelecciones.periods.map((period, index) => (
                <div
                  key={period.id}
                  className="flex md:flex-col flex-row items-start md:items-center relative group w-full md:w-auto"
                >
                  {/* MOBILE LAYOUT - Círculo a la izquierda, texto estático a la derecha */}
                  <div className="md:hidden flex items-start gap-6 w-full relative">
                    {/* Círculo en la línea vertical */}
                    <div
                      className="w-8 h-8 rounded-full border-4 border-white shadow-lg z-30 
                      cursor-pointer transform transition-all duration-300 ease-in-out
                      group-hover:scale-125 group-hover:shadow-2xl relative flex-shrink-0 -ml-4 mt-1
                      shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                      style={{ backgroundColor: period.color }}
                    >
                      {/* Pulso */}
                      <div className="w-full h-full rounded-full animate-ping absolute inset-0 opacity-0 group-hover:opacity-30"
                        style={{ backgroundColor: period.color }}
                      ></div>
                    </div>

                    {/* Contenido estático a la derecha del círculo - MOBILE */}
                    <div className="flex-1 pt-0 bg-black/50 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                      <h3 className="text-yellow-400 font-bold text-lg mb-2 drop-shadow-lg">{period.name}</h3>
                      <p className="text-base font-semibold mb-3 drop-shadow-md text-white">
                        {period.yearStart} - {period.yearEnd}
                      </p>
                      <p className="text-gray-200 text-sm leading-relaxed drop-shadow-md mb-3">{period.description}</p>
                      {period.president && (
                        <p className="text-blue-300 font-medium text-sm drop-shadow-md">
                          Presidente: {period.president}
                        </p>
                      )}
                    </div>

                    {/* Info flotante EXTRA para mobile - información detallada en hover */}
                    <div
                      className="absolute left-12 top-1/2 transform -translate-y-1/2
                      w-80 sm:w-[550px] bg-black/70 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 shadow-2xl
                      opacity-0 scale-95 pointer-events-none
                      group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
                      transition-all duration-300 ease-in-out
                      z-50 max-h-80 overflow-y-auto"
                      style={{ borderColor: period.color }}
                    >

                      {/* Flecha conectora hacia el círculo */}
                      <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0"
                        style={{
                          borderTop: '12px solid transparent',
                          borderBottom: '12px solid transparent',
                          borderRight: `12px solid ${period.color}`
                        }}
                      ></div>

                      {/* Contenido detallado - IGUAL QUE EN DESKTOP */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-2">{period.name}</h3>
                        <p className="text-lg font-semibold" style={{ color: period.color }}>
                          {period.yearStart} - {period.yearEnd}
                        </p>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm">{period.description}</p>
                      {period.president && (
                        <div className="bg-black/30 p-3 rounded-lg mb-4">
                          <p className="text-blue-300 font-medium text-sm">Presidente: {period.president}</p>
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
                                  <h5 className="font-bold text-white text-sm">{event.title}</h5>
                                </div>
                                <p className="text-gray-300 text-xs leading-relaxed">{event.description}</p>
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
                    </div>
                  </div>

                  {/* DESKTOP LAYOUT - Layout original */}
                  <div className="hidden md:flex md:flex-col md:items-center relative group w-full md:w-auto">
                    {/* Texto arriba o abajo - DESKTOP */}
                    <div
                      className={`absolute w-64 lg:w-72 xl:w-80 text-center z-30
                      ${index % 2 === 0 ? 'bottom-full mb-6' : 'top-full mt-6'}
                      group-hover:scale-105 transition-all duration-300 ease-in-out
                      opacity-90 group-hover:opacity-100`}
                    >
                      <h3 className="text-white font-bold text-lg lg:text-xl mb-1 drop-shadow-lg">{period.name}</h3>
                      <p className="text-base lg:text-lg font-semibold mb-2 drop-shadow-md" style={{ color: period.color }}>
                        {period.yearStart} - {period.yearEnd}
                      </p>
                      <p className="text-gray-300 text-sm lg:text-base leading-relaxed drop-shadow-md">{period.description}</p>
                      {period.president && (
                        <p className="text-blue-300 mt-2 font-medium text-sm lg:text-base drop-shadow-md">
                          Presidente: {period.president}
                        </p>
                      )}
                    </div>

                    {/* Círculo en la línea */}
                    <div
                      className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-4 border-white shadow-lg z-30 
                      cursor-pointer transform transition-all duration-300 ease-in-out
                      group-hover:scale-125 group-hover:shadow-2xl relative"
                      style={{ backgroundColor: period.color }}
                    >
                      {/* Pulso */}
                      <div className="w-full h-full rounded-full animate-ping absolute inset-0 opacity-0 group-hover:opacity-30"
                        style={{ backgroundColor: period.color }}
                      ></div>
                    </div>

                    {/* Info flotante POSICIONADA EN EL CÍRCULO - SOLO DESKTOP */}
                    <div
                      className={`absolute ${index % 2 === 0 ? 'bottom-full mb-4' : 'top-full mt-4'} 
                      ${index === 0 ? 'left-0' : index === boliviaelecciones.periods.length - 1 ? 'right-0' : 'left-1/2 transform -translate-x-1/2'}
                      w-80 xl:w-96 bg-gray-900/95 backdrop-blur-sm rounded-xl p-6 border-2 shadow-2xl
                      opacity-0 scale-95 pointer-events-none
                      group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
                      transition-all duration-300 ease-in-out
                      z-50`}
                      style={{ borderColor: period.color }}
                    >
                      {/* Flecha conectora hacia el círculo */}
                      <div className={`absolute ${index % 2 === 0 ? 'top-full' : 'bottom-full'} 
                        ${index === 0 ? 'left-8' : index === boliviaelecciones.periods.length - 1 ? 'right-8' : 'left-1/2 transform -translate-x-1/2'} 
                        w-0 h-0`}
                        style={{
                          borderLeft: '15px solid transparent',
                          borderRight: '15px solid transparent',
                          [index % 2 === 0 ? 'borderTop' : 'borderBottom']: `15px solid ${period.color}`
                        }}
                      ></div>

                      {/* Contenido detallado */}
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
                          <div className="space-y-8 max-h-40 overflow-y-auto">
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  
}
