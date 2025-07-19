import { useState, useEffect, useRef } from 'react';
import { boliviaelecciones } from '../../data/boliviaelecciones.js';

export default function EleccionesTimelineHorizontal() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef(null);
  const periods = boliviaelecciones.periods;

  // Colores para cada tipo de evento
  const eventColors = {
    'transition': '#3b82f6',  // blue-500
    'reform': '#10b981',      // emerald-500
    'conflict': '#ef4444',    // red-500
    'crisis': '#f59e0b',      // amber-500
    'election': '#8b5cf6'     // violet-500
  };

  // Actualizar la barra de progreso cuando cambie la sección activa
  useEffect(() => {
    if (typeof window !== 'undefined' && window.updateEleccionesProgress) {
      window.updateEleccionesProgress(scrollProgress);
    }
  }, [activeSection, scrollProgress]);

  // Manejar el scroll horizontal
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = scrollLeft / (scrollWidth - clientWidth);
      setScrollProgress(progress);
      
      // Determinar la sección activa basada en el progreso del scroll
      const sectionIndex = Math.min(
        Math.floor(progress * periods.length),
        periods.length - 1
      );
      setActiveSection(sectionIndex);
    }
  };

  // Función para navegar a un período específico
  const scrollToPeriod = (index) => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      const scrollableWidth = scrollWidth - clientWidth;
      const targetScroll = (index / (periods.length - 1)) * scrollableWidth;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  // Función para obtener el icono según el tipo de evento
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

  return (
    <div className="w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
        <span className="text-yellow-400">Línea Temporal</span> <span className="text-white">de sucesos que precedieron a las elecciones 2020</span>
      </h2>

      {/* Navegación rápida por períodos */}
      <div className="flex justify-center mb-4 md:mb-6 gap-1 md:gap-2 flex-wrap">
        {periods.map((period, index) => (
          <button
            key={period.id}
            onClick={() => scrollToPeriod(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeSection === index
                ? 'bg-white/20 text-white shadow-md scale-105'
                : 'bg-black/30 text-gray-300 hover:bg-black/40'
            }`}
            style={{
              borderLeft: `3px solid ${period.color || '#ffffff'}`
            }}
          >
            {period.yearStart}-{period.yearEnd}
          </button>
        ))}
      </div>

      {/* Contenedor de scroll horizontal */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="w-full overflow-x-auto custom-scrollbar pb-4 -mx-2 px-2"
        style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
      >
        <div className="flex min-w-max gap-4">
          {periods.map((period, index) => (
            <div
              key={period.id}
              className="w-[calc(100vw-3rem)] md:w-[calc(100vw-8rem)] lg:w-[calc(80vw-8rem)] xl:w-[calc(70vw-8rem)] flex-shrink-0 scroll-snap-align-start"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div
                className="bg-black/50 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/10 shadow-lg h-full"
                style={{ borderColor: period.color || '#ffffff' }}
              >
                <div className="flex flex-col lg:flex-row gap-6 overflow-hidden">
                  {/* Columna izquierda: Información del período */}
                  <div className="flex-1 lg:max-w-[55%]">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-2">{period.name}</h3>
                      <p
                        className="text-lg font-semibold mb-4 text-white"
                      >
                        {period.yearStart} - {period.yearEnd}
                      </p>
                    </div>
                    <p className="text-gray-200 mb-6 leading-relaxed">{period.description}</p>
                    
                    {period.president && (
                      <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg mb-6 border border-white/10">
                        <p className="text-blue-200 font-medium">
                          <span className="font-bold">Presidente:</span> {period.president}
                        </p>
                      </div>
                    )}

                    {/* Eventos importantes */}
                    {period.events && period.events.length > 0 && (
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                          <span
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: period.color || '#ffffff' }}
                          ></span>
                          Eventos Importantes
                        </h4>
                        <div className="space-y-4 max-h-[200px] md:max-h-[250px] lg:max-h-60 overflow-y-auto custom-scrollbar pr-2">
                          {period.events.map((event, idx) => (
                            <div
                              key={idx}
                              className="bg-black/60 backdrop-blur-sm p-4 rounded-lg border-l-4 hover:bg-black/70 transition-all"
                              style={{
                                borderLeftColor: eventColors[event.type] || '#ffffff',
                              }}
                            >
                              <div className="flex items-center mb-2">
                                <span
                                  className="px-3 py-1 rounded text-white text-xs font-semibold mr-2 shadow-md flex items-center"
                                  style={{
                                    backgroundColor: eventColors[event.type] || '#3b82f6',
                                    color: '#ffffff',
                                    textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                                  }}
                                >
                                  <span className="mr-1">{getEventIcon(event.type)}</span>
                                  {event.date}
                                </span>
                                <h5 className="text-white font-semibold text-shadow">{event.title}</h5>
                              </div>
                              <p className="text-gray-300 text-sm">{event.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Columna derecha: Multimedia */}
                  <div className="flex-1 lg:max-w-[45%]">
                    {period.videoUrl && (
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-white mb-3">Video Histórico</h4>
                        <div className="relative w-full pb-[56.25%] h-0">
                          <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg border border-white/10"
                            src={period.videoUrl}
                            title={`Video de ${period.name}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                          ></iframe>
                        </div>
                        <p className="text-xs text-gray-400 mt-2 italic">Video: El Colega Sad - YouTube</p>
                      </div>
                    )}

                    {period.imageUrl && (
                      <div>
                        <h4 className="text-lg font-bold text-white mb-3">Imagen Histórica</h4>
                        <div className="rounded-lg overflow-hidden shadow-lg border border-white/10">
                          <img
                            src={period.imageUrl}
                            alt={`Imagen de ${period.name}`}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
