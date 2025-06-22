import React, { useState } from 'react';

const EnhancedPartyGrid = () => {
  const [activeTab, setActiveTab] = useState('todos');

  // Datos de partidos políticos con sus candidatos
  const partidos = [
    {
      id: "mas",
      nombre: "Movimiento al Socialismo",
      sigla: "MAS",
      color: "#3045b5",
      logo: "/PartidosP/MAS/MAS.png",
      candidato: {
        nombre: "Eduardo Del Castillo",
        imagen: "/PartidosP/MAS/Eduardo Del Castillo.png",
        cargo: "Candidato Presidencial"
      },
      ideologia: "Socialismo, Indigenismo",
      fundacion: "1995"
    },
    {
      id: "apbsumate",
      nombre: "APB Súmate",
      sigla: "APB",
      color: "#e74c3c",
      logo: "/PartidosP/APBSúmate/APBsumate.png",
      candidato: {
        nombre: "Manfred Reyes Villa",
        imagen: "/PartidosP/APBSúmate/Manfred Reyes Villa.png",
        cargo: "Candidato Presidencial"
      },
      ideologia: "Centro-derecha, Conservadurismo",
      fundacion: "2020"
    },
    {
      id: "frilibre",
      nombre: "FRI Libre",
      sigla: "LIBRE",
      color: "#f39c12",
      logo: "/PartidosP/FRILibre/Libre.png",
      candidato: {
        nombre: "Jorge Quiroga Ramírez",
        imagen: "/PartidosP/FRILibre/Jorge Quiroga Ramírez.png",
        cargo: "Candidato Presidencial"
      },
      ideologia: "Centro-derecha, Liberalismo",
      fundacion: "2020"
    },
    {
      id: "fuerzadelpueblo",
      nombre: "Fuerza del Pueblo",
      sigla: "FDP",
      color: "#27ae60",
      logo: "/PartidosP/FuerzadelPueblo/FuerzadelPueblo.png",
      candidato: {
        nombre: "Jhonny Fernández",
        imagen: "/PartidosP/FuerzadelPueblo/Jhonny Fernández.png",
        cargo: "Candidato Presidencial"
      },
      ideologia: "Centro, Populismo",
      fundacion: "2019"
    },
    {
      id: "morena",
      nombre: "Movimiento Renovador Nacional",
      sigla: "MORENA",
      color: "#8e44ad",
      logo: "/PartidosP/Morena/Morena.png",
      candidato: {
        nombre: "Eva Copa Murga",
        imagen: "/PartidosP/Morena/Eva Copa Murga.png",
        cargo: "Candidata Presidencial"
      },
      ideologia: "Centro-izquierda, Progresismo",
      fundacion: "2021"
    },
    {
      id: "pdc",
      nombre: "Partido Demócrata Cristiano",
      sigla: "PDC",
      color: "#2980b9",
      logo: "/PartidosP/PartidoDemócrataCristiano/PartidoDemocrata.png",
      candidato: {
        nombre: "Rodrigo Paz Pereira",
        imagen: "/PartidosP/PartidoDemócrataCristiano/Rodrigo Paz Pereira.png",
        cargo: "Candidato Presidencial"
      },
      ideologia: "Centro, Democracia Cristiana",
      fundacion: "1954"
    },
    {
      id: "unidad",
      nombre: "Unidad Nacional",
      sigla: "UN",
      color: "#1abc9c",
      logo: "/PartidosP/Unidad/Unidad.png",
      candidato: {
        nombre: "Samuel Doria Medina",
        imagen: "/PartidosP/Unidad/Samuel Doria Medina.png",
        cargo: "Candidato Presidencial"
      },
      ideologia: "Centro-derecha, Liberalismo económico",
      fundacion: "2003"
    },
    {
      id: "alianzapopular",
      nombre: "Alianza Popular",
      sigla: "AP",
      color: "#9b59b6",
      logo: "/PartidosP/Alianza Popular/AlianzaPopular.png",
      candidato: {
        nombre: "Andrónico Rodríguez",
        imagen: "/PartidosP/Alianza Popular/Andrónico Rodríguez.png",
        cargo: "Candidato Presidencial"
      },
      ideologia: "Izquierda, Populismo",
      fundacion: "2023"
    }
  ];

  // Filtrar partidos según la pestaña activa
  const filteredPartidos = activeTab === 'todos' 
    ? partidos 
    : partidos.filter(partido => {
        if (activeTab === 'izquierda') return partido.ideologia.toLowerCase().includes('izquierda') || partido.ideologia.toLowerCase().includes('socialismo');
        if (activeTab === 'centro') return partido.ideologia.toLowerCase().includes('centro');
        if (activeTab === 'derecha') return partido.ideologia.toLowerCase().includes('derecha') || partido.ideologia.toLowerCase().includes('liberal');
        return true;
      });

  return (
    <div className="w-full">
      {/* Pestañas de filtrado */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button 
          onClick={() => setActiveTab('todos')}
          className={`px-4 py-2 rounded-full transition-all ${activeTab === 'todos' 
            ? 'bg-blue-600 text-white font-bold shadow-lg' 
            : 'bg-black/30 text-gray-300 hover:bg-black/40'}`}
        >
          Todos los partidos
        </button>
        <button 
          onClick={() => setActiveTab('izquierda')}
          className={`px-4 py-2 rounded-full transition-all ${activeTab === 'izquierda' 
            ? 'bg-red-600 text-white font-bold shadow-lg' 
            : 'bg-black/30 text-gray-300 hover:bg-black/40'}`}
        >
          Izquierda
        </button>
        <button 
          onClick={() => setActiveTab('centro')}
          className={`px-4 py-2 rounded-full transition-all ${activeTab === 'centro' 
            ? 'bg-purple-600 text-white font-bold shadow-lg' 
            : 'bg-black/30 text-gray-300 hover:bg-black/40'}`}
        >
          Centro
        </button>
        <button 
          onClick={() => setActiveTab('derecha')}
          className={`px-4 py-2 rounded-full transition-all ${activeTab === 'derecha' 
            ? 'bg-blue-500 text-white font-bold shadow-lg' 
            : 'bg-black/30 text-gray-300 hover:bg-black/40'}`}
        >
          Derecha
        </button>
      </div>

      {/* Grid de partidos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPartidos.map((partido) => (
          <div 
            key={partido.id}
            className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              boxShadow: `0 8px 32px ${partido.color}30`
            }}
          >
            {/* Cabecera del partido */}
            <div 
              className="h-24 flex items-center justify-between p-4"
              style={{ 
                background: `linear-gradient(135deg, ${partido.color}90, ${partido.color}40)`
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full p-1 flex items-center justify-center">
                  <img 
                    src={partido.logo} 
                    alt={`Logo de ${partido.nombre}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">{partido.sigla}</h3>
                  <p className="text-white/80 text-xs">{partido.fundacion}</p>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white text-xs font-medium">{partido.ideologia.split(',')[0]}</span>
              </div>
            </div>
            
            {/* Contenido del partido */}
            <div className="p-4">
              <h4 className="text-white font-bold mb-1 text-sm">{partido.nombre}</h4>
              
              {/* Candidato */}
              <div className="mt-4 flex items-center gap-3">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                  <img 
                    src={partido.candidato.imagen} 
                    alt={partido.candidato.nombre}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h5 className="text-white font-bold">{partido.candidato.nombre}</h5>
                  <p className="text-gray-300 text-xs">{partido.candidato.cargo}</p>
                </div>
              </div>
              
              {/* Botón de acción */}
              <div className="mt-4">
                <a 
                  href={`/partido/${partido.id}`}
                  className="block w-full py-2 text-center rounded-lg text-white font-medium transition-colors"
                  style={{ backgroundColor: partido.color }}
                >
                  Ver perfil completo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredPartidos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-300 text-lg">No se encontraron partidos con el filtro seleccionado</p>
        </div>
      )}
    </div>
  );
};

export default EnhancedPartyGrid;
