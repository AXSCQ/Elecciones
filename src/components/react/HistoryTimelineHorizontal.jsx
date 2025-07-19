import { useState, useEffect, useRef } from 'react';
import { boliviaHistory } from '../../data/boliviaHistory.js';

export default function HistoryTimelineHorizontal() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef(null);
  const periods = boliviaHistory.periods;

  // Colores para cada período histórico
  const periodColors = {
    'retorno-democracia': '#3b82f6', // blue-500
    'era-neoliberal': '#10b981',     // emerald-500
    'estado-plurinacional': '#8b5cf6', // violet-500
    'gobierno-transicion': '#ef4444', // red-500
    'retorno-mas': '#f59e0b',        // amber-500
  };

  // Actualizar el fondo y la barra de progreso cuando cambie la sección activa
  useEffect(() => {
    if (typeof window !== 'undefined' && window.updateHistoryBackground) {
      window.updateHistoryBackground(activeSection, scrollProgress);
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

  return (
    <div className="w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 md:mb-8">
        Línea Temporal de la Democracia Boliviana
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
              borderLeft: `3px solid ${periodColors[period.id] || '#ffffff'}`
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
                className="bg-black/30 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/10 shadow-lg h-full"
                style={{ borderColor: periodColors[period.id] || '#ffffff' }}
              >
                <div className="flex flex-col lg:flex-row gap-6 overflow-hidden">
                  {/* Columna izquierda: Información del período */}
                  <div className="flex-1 lg:max-w-[55%]">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{period.name}</h3>
                      <p
                        className="text-lg font-semibold mb-4"
                        style={{ color: periodColors[period.id] || '#ffffff' }}
                      >
                        {period.yearStart} - {period.yearEnd}
                      </p>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{period.description}</p>
                    
                    {period.president && (
                      <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg mb-6 border border-white/10">
                        <p className="text-blue-200 font-medium">
                          <span className="font-bold">Presidente:</span> {period.president}
                        </p>
                      </div>
                    )}

                    {/* Eventos importantes */}
                    {period.keyEvents && period.keyEvents.length > 0 && (
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                          <span
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: periodColors[period.id] || '#ffffff' }}
                          ></span>
                          Eventos Importantes
                        </h4>
                        <div className="space-y-4 max-h-[200px] md:max-h-[250px] lg:max-h-60 overflow-y-auto custom-scrollbar pr-2">
                          {period.keyEvents.map((event, idx) => (
                            <div
                              key={idx}
                              className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border-l-4 hover:bg-black/60 transition-all"
                              style={{
                                borderLeftColor: periodColors[period.id] || '#ffffff',
                              }}
                            >
                              <div className="flex items-center mb-2">
                                <span
                                  className="px-3 py-1 rounded text-white text-xs font-semibold mr-2 shadow-md"
                                  style={{
                                    backgroundColor: periodColors[period.id] || '#3b82f6',
                                    color: '#ffffff',
                                    textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                                  }}
                                >
                                  {event.year}
                                </span>
                                <h5 className="font-bold text-white drop-shadow-md">{event.title}</h5>
                              </div>
                              <p className="text-gray-200 text-sm leading-relaxed drop-shadow-sm">
                                {event.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Columna derecha: Video o imagen */}
                  <div className="flex-1 lg:max-w-[45%] flex flex-col justify-center">
                    {period.videoUrl ? (
                      <div className="w-full">
                        <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                          <span
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: periodColors[period.id] || '#ffffff' }}
                          ></span>
                          Video Histórico
                        </h4>
                        <div className="relative w-full bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-lg">
                          <div className="relative w-full pb-[56.25%] h-0 max-h-[350px]">
                            <video
                              src={period.videoUrl}
                              title={`Video sobre ${period.name}`}
                              className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
                              controls
                              preload="metadata"
                              poster={period.imageUrl || ''}
                              controlsList="nodownload"
                              playsInline
                            ></video>
                          </div>
                        </div>
                      </div>
                    ) : period.imageUrl ? (
                      <div className="w-full">
                        <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                          <span
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: periodColors[period.id] || '#ffffff' }}
                          ></span>
                          Imagen Histórica
                        </h4>
                        <div className="relative w-full bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-lg">
                          <div className="relative w-full pb-[56.25%] h-0 max-h-[350px]">
                            <img
                              src={period.imageUrl}
                              alt={`Imagen de ${period.name}`}
                              className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicador de navegación */}
      <div className="flex justify-center mt-6 gap-2">
        {periods.map((period, index) => (
          <button
            key={period.id}
            onClick={() => scrollToPeriod(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeSection === index ? 'scale-125' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              backgroundColor: periodColors[period.id] || '#ffffff',
              transform: activeSection === index ? 'scale(1.25)' : 'scale(1)',
            }}
            aria-label={`Ir a ${period.name}`}
          />
        ))}
      </div>
    </div>
  );
}
