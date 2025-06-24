// Historia Política de Bolivia - Etapa Democrática Moderna
export const boliviaHistory = {
  periods: [
    {
      id: "retorno-democracia",
      name: "Retorno a la Democracia",
      yearStart: 1982,
      yearEnd: 1985,
      color: "#3B82F6",
      description: "Tras años de dictaduras militares, Bolivia retorna a la democracia con la presidencia de Hernán Siles Zuazo.",
      president: "Hernán Siles Zuazo",
      party: "UDP",
      keyEvents: [
        {
          year: 1982,
          month: "Octubre",
          title: "Retorno a la Democracia",
          description: "Hernán Siles Zuazo asume la presidencia, marcando el fin de las dictaduras militares.",
          type: "transition",
          media: {
            video: "/videos/retorno-democracia-1982.mp4",
            image: "/images/siles-zuazo-1982.jpg"
          }
        },
        {
          year: 1985,
          month: "Agosto",
          title: "Crisis Hiperinflacionaria",
          description: "Bolivia enfrenta una de las peores hiperinflaciones de su historia, con tasas superiores al 20,000%.",
          type: "crisis",
          media: {
            image: "/images/hiperinflacion-1985.jpg"
          }
        }
      ]
    },
    {
      id: "neoliberalismo",
      name: "Era Neoliberal",
      yearStart: 1985,
      yearEnd: 2005,
      color: "#10B981",
      description: "Período de reformas económicas neoliberales y privatizaciones.",
      presidents: [
        { name: "Víctor Paz Estenssoro", period: "1985-1989", party: "MNR" },
        { name: "Jaime Paz Zamora", period: "1989-1993", party: "MIR" },
        { name: "Gonzalo Sánchez de Lozada", period: "1993-1997", party: "MNR" },
        { name: "Hugo Banzer Suárez", period: "1997-2001", party: "ADN" },
        { name: "Jorge Quiroga", period: "2001-2002", party: "ADN" },
        { name: "Gonzalo Sánchez de Lozada", period: "2002-2003", party: "MNR" },
        { name: "Carlos Mesa", period: "2003-2005", party: "Independiente" }
      ],
      keyEvents: [
        {
          year: 1985,
          month: "Agosto",
          title: "Nueva Política Económica",
          description: "Víctor Paz Estenssoro implementa el D.S. 21060, iniciando las reformas neoliberales.",
          type: "reform",
          media: {
            video: "/videos/ds-21060.mp4"
          }
        },
        {
          year: 1994,
          title: "Ley de Participación Popular",
          description: "Descentralización administrativa y reconocimiento de organizaciones territoriales de base.",
          type: "reform"
        },
        {
          year: 2000,
          month: "Abril",
          title: "Guerra del Agua",
          description: "Conflicto social en Cochabamba contra la privatización del agua.",
          type: "conflict",
          media: {
            video: "/videos/guerra-del-agua.mp4",
            gallery: [
              "/images/guerra-agua-1.jpg",
              "/images/guerra-agua-2.jpg",
              "/images/guerra-agua-3.jpg"
            ]
          }
        },
        {
          year: 2003,
          month: "Octubre",
          title: "Guerra del Gas",
          description: "Conflicto social que resulta en la renuncia del presidente Sánchez de Lozada.",
          type: "conflict",
          media: {
            video: "/videos/guerra-del-gas.mp4",
            gallery: [
              "/images/octubre-negro-1.jpg",
              "/images/octubre-negro-2.jpg"
            ]
          }
        }
      ]
    },
    {
      id: "estado-plurinacional",
      name: "Estado Plurinacional",
      yearStart: 2006,
      yearEnd: 2019,
      color: "#3045B5",
      description: "Transformación del Estado con la llegada de Evo Morales y el MAS al poder.",
      president: "Evo Morales Ayma",
      party: "MAS-IPSP",
      keyEvents: [
        {
          year: 2006,
          month: "Enero",
          title: "Primera Presidencia Indígena",
          description: "Evo Morales asume como el primer presidente indígena de Bolivia.",
          type: "transition",
          media: {
            video: "/videos/evo-asuncion-2006.mp4",
            image: "/images/evo-2006.jpg"
          }
        },
        {
          year: 2006,
          month: "Mayo",
          title: "Nacionalización de Hidrocarburos",
          description: "Decreto Supremo 28701 'Héroes del Chaco' nacionaliza los hidrocarburos.",
          type: "reform",
          media: {
            video: "/videos/nacionalizacion-hidrocarburos.mp4"
          }
        },
        {
          year: 2009,
          month: "Enero",
          title: "Nueva Constitución",
          description: "Se aprueba la nueva Constitución Política del Estado Plurinacional.",
          type: "reform",
          media: {
            image: "/images/constitucion-2009.jpg"
          }
        },
        {
          year: 2019,
          month: "Octubre",
          title: "Crisis Electoral",
          description: "Protestas por presunto fraude electoral llevan a la renuncia de Evo Morales.",
          type: "crisis",
          media: {
            video: "/videos/crisis-2019.mp4",
            gallery: [
              "/images/protestas-2019-1.jpg",
              "/images/protestas-2019-2.jpg"
            ]
          }
        }
      ]
    },
    {
      id: "transicion-2019",
      name: "Gobierno de Transición",
      yearStart: 2019,
      yearEnd: 2020,
      color: "#EF4444",
      description: "Gobierno interino tras la renuncia de Evo Morales.",
      president: "Jeanine Áñez",
      party: "Demócratas",
      keyEvents: [
        {
          year: 2019,
          month: "Noviembre",
          title: "Gobierno de Transición",
          description: "Jeanine Áñez asume la presidencia interina.",
          type: "transition"
        },
        {
          year: 2020,
          month: "Marzo",
          title: "Pandemia COVID-19",
          description: "Bolivia enfrenta la pandemia con cuarentena estricta.",
          type: "crisis",
          media: {
            image: "/images/pandemia-bolivia.jpg"
          }
        }
      ]
    },
    {
      id: "retorno-mas",
      name: "Retorno del MAS",
      yearStart: 2020,
      yearEnd: "presente",
      color: "#3045B5",
      description: "El MAS retorna al poder con Luis Arce como presidente.",
      president: "Luis Arce Catacora",
      party: "MAS-IPSP",
      keyEvents: [
        {
          year: 2020,
          month: "Octubre",
          title: "Elecciones 2020",
          description: "Luis Arce gana las elecciones con más del 55% de los votos.",
          type: "election",
          media: {
            video: "/videos/elecciones-2020.mp4"
          }
        },
        {
          year: 2023,
          month: "Diciembre",
          title: "División del MAS",
          description: "Conflicto interno entre Luis Arce y Evo Morales divide al partido.",
          type: "conflict"
        },
        {
          year: 2025,
          month: "Agosto",
          title: "Elecciones 2025",
          description: "Bolivia se prepara para nuevas elecciones presidenciales.",
          type: "election",
          isFuture: true
        }
      ]
    }
  ],
  
  // División de poderes
  powerStructure: {
    executive: {
      title: "Poder Ejecutivo",
      description: "Presidencia y Vicepresidencia del Estado Plurinacional",
      icon: "🏛️",
      components: [
        "Presidente del Estado",
        "Vicepresidente",
        "Ministros de Estado",
        "Gobernadores",
        "Alcaldes"
      ]
    },
    legislative: {
      title: "Poder Legislativo",
      description: "Asamblea Legislativa Plurinacional",
      icon: "📜",
      components: [
        "Cámara de Senadores (36 miembros)",
        "Cámara de Diputados (130 miembros)",
        "Asambleas Departamentales",
        "Concejos Municipales"
      ]
    },
    judicial: {
      title: "Poder Judicial",
      description: "Sistema de justicia del Estado",
      icon: "⚖️",
      components: [
        "Tribunal Supremo de Justicia",
        "Tribunal Constitucional Plurinacional",
        "Consejo de la Magistratura",
        "Tribunal Agroambiental"
      ]
    },
    electoral: {
      title: "Órgano Electoral",
      description: "Sistema electoral independiente",
      icon: "🗳️",
      components: [
        "Tribunal Supremo Electoral",
        "Tribunales Electorales Departamentales",
        "Juzgados Electorales",
        "Notarías Electorales"
      ]
    }
  },
  
  // Estadísticas importantes
  statistics: {
    democraticYears: 43,
    presidents: 15,
    elections: 12,
    constitutions: 2,
    majorConflicts: 5
  }
};

// Función para obtener eventos por tipo
export function getEventsByType(type) {
  const events = [];
  boliviaHistory.periods.forEach(period => {
    period.keyEvents?.forEach(event => {
      if (event.type === type) {
        events.push({
          ...event,
          periodName: period.name,
          periodColor: period.color
        });
      }
    });
  });
  return events.sort((a, b) => a.year - b.year);
}

// Función para obtener presidentes
export function getAllPresidents() {
  const presidents = [];
  boliviaHistory.periods.forEach(period => {
    if (period.president) {
      presidents.push({
        name: period.president,
        party: period.party,
        period: `${period.yearStart}-${period.yearEnd}`,
        periodName: period.name
      });
    } else if (period.presidents) {
      period.presidents.forEach(p => {
        presidents.push({
          ...p,
          periodName: period.name
        });
      });
    }
  });
  return presidents;
}
