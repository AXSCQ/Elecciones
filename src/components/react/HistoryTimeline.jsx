import { useState } from 'react';
import { boliviaHistory } from '../../data/boliviaHistory.js';

export default function HistoryTimeline() {

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
  const [expandedPeriod, setExpandedPeriod] = useState(null); // Para clicks (persistente)
  const [hoveredPeriod, setHoveredPeriod] = useState(null);   // Para hover (temporal)

  // Componente para el contenido detallado del período (reutilizable)
  const PeriodDetailContent = ({ period, getEventColor }) => (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
      {/* Columna izquierda: Texto y eventos */}
      <div className="flex-1 lg:w-1/2">
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
          <div className="mb-4">
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
      </div>

      {/* Columna derecha: Video */}
      {period.videoUrl && (
        <div className="flex-1 lg:w-1/2 flex flex-col justify-center">
          <h4 className="text-lg font-bold text-white mb-3 flex items-center">
            <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: period.color }}></span>
            Video Histórico
          </h4>
          <div className="relative w-full bg-black/40 rounded-lg overflow-hidden">
            <video
              src={period.videoUrl}
              title={`Video sobre ${period.name}`}
              className="w-full h-auto rounded-lg"
              controls
              preload="metadata"
              autoPlay
              muted={true}
            >
            </video>
          </div>
          {period.videoDescription && (
            <p className="text-gray-400 text-xs mt-2 italic">{period.videoDescription}</p>
          )}
        </div>
      )}
    </div>
  );

  // Componente para el contenido básico del período (reutilizable)
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

  // Componente para el círculo animado (reutilizable)
  const AnimatedCircle = ({ period, className = "", onClick, onMouseEnter, onMouseLeave, isExpanded }) => (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full border-4 border-white shadow-lg z-30 
    cursor-pointer transform transition-all duration-300 ease-in-out
    hover:scale-125 hover:shadow-2xl relative 
    ${isExpanded ? 'scale-125 shadow-2xl ring-4 ring-white/30' : ''}
    ${className}`}
      style={{ backgroundColor: period.color }}
    >
      <div className={`w-full h-full rounded-full animate-ping absolute inset-0 
      ${isExpanded ? 'opacity-30' : 'opacity-0 hover:opacity-30'}`}
        style={{ backgroundColor: period.color }}
      ></div>

      {/* Indicador de que es clickeable */}
      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full shadow-md flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
      </div>
    </div>
  );

  // Componente para la flecha conectora (reutilizable)
  const ConnectorArrow = ({ period, direction, position = "center" }) => {
    const arrowStyles = {
      center: {
        left: '50%',
        transform: 'translateX(-50%)'
      },
      left: { left: '2rem' },
      right: { right: '2rem' }
    };

    const borderConfig = direction === 'up'
      ? {
        borderLeft: '15px solid transparent',
        borderRight: '15px solid transparent',
        borderTop: `15px solid ${period.color}`
      }
      : direction === 'down'
        ? {
          borderLeft: '15px solid transparent',
          borderRight: '15px solid transparent',
          borderBottom: `15px solid ${period.color}`
        }
        : {
          borderTop: '12px solid transparent',
          borderBottom: '12px solid transparent',
          borderRight: `12px solid ${period.color}`
        };

    const positionClass = direction === 'up' ? 'top-full' : direction === 'down' ? 'bottom-full' : 'right-full top-1/2 transform -translate-y-1/2';

    return (
      <div
        className={`absolute ${positionClass} w-0 h-0`}
        style={{ ...arrowStyles[position], ...borderConfig }}
      />
    );
  };

  return (
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
                const isExpanded = expandedPeriod === period.id;

                return (
                  <div key={period.id} className="flex md:flex-col flex-row items-start md:items-center relative group w-full md:w-auto">

                    {/* MOBILE LAYOUT */}
                    <div className="md:hidden flex flex-col w-full relative">
                      <div className="flex items-start gap-6 w-full relative">
                        <AnimatedCircle
                          period={period}
                          className="-ml-4 mt-1 flex-shrink-0"
                          onClick={() => setExpandedPeriod(isExpanded ? null : period.id)}
                          onMouseEnter={() => !isExpanded && setExpandedPeriod(period.id)}
                          onMouseLeave={() => !isExpanded && setExpandedPeriod(null)}
                          isExpanded={isExpanded}
                        />

                        <div className="flex-1 pt-0">
                          <PeriodBasicContent period={period} />
                        </div>
                      </div>

                      {/* Acordeón móvil - se expande debajo del contenido básico */}
                      <div className={`ml-12 mt-4 overflow-hidden transition-all duration-500 ease-in-out
    ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="bg-gray-900/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 border-2 shadow-2xl
      transform transition-transform duration-300 ease-in-out"
                          style={{ borderColor: period.color }}>
                          <PeriodDetailContent period={period} getEventColor={getEventColor} />
                        </div>
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

                      <AnimatedCircle
                        period={period}
                        onClick={() => setExpandedPeriod(isExpanded ? null : period.id)}
                        onMouseEnter={() => !isExpanded && setExpandedPeriod(period.id)}
                        onMouseLeave={() => !isExpanded && setExpandedPeriod(null)}
                        isExpanded={isExpanded}
                      />

                      {/* Acordeón desktop - se despliega con hover Y click */}
                      <div className={`absolute ${isEven ? 'top-full mt-8' : 'bottom-full mb-4'}
                      ${isFirst ? 'left-0' : isLast ? 'right-0' : 'left-1/2 transform -translate-x-1/2'}
                      w-100 xl:w-[32rem] 2xl:w-[36rem] transition-all duration-500 ease-in-out z-40
                      ${isExpanded ? 'max-h-none opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
                        <div className="bg-gray-900/95 backdrop-blur-sm rounded-xl p-6 border-2 shadow-2xl
                          transform transition-transform duration-300 ease-in-out min-h-[400px] max-h-[660px]"
                          style={{ borderColor: period.color }}>
                          <PeriodDetailContent period={period} getEventColor={getEventColor} />
                        </div>
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
  );
}