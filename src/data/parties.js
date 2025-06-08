export const parties = [
  {
    id: 1,
    name: "Movimiento al Socialismo",
    shortName: "MAS",
    logo: "/images/parties/mas.png", // Placeholder - actualizar con imagen real
    color: "#3045b5",
    founded: "1995",
    ideology: ["Socialismo", "Indigenismo", "Anti-imperialismo"],
    description: "El Movimiento al Socialismo (MAS) es un partido político boliviano de izquierda fundado en 1995. Surgió de los movimientos sociales, principalmente de los cocaleros del Chapare. Bajo el liderazgo de Evo Morales, el MAS gobernó Bolivia desde 2006 hasta 2019, implementando políticas de nacionalización de recursos naturales, reconocimiento de derechos indígenas y redistribución económica.",
    keyFigures: [
      { name: "Evo Morales", role: "Ex-presidente y fundador" },
      { name: "Luis Arce", role: "Presidente actual" },
      { name: "David Choquehuanca", role: "Vicepresidente actual" }
    ],
    currentCandidates: [1, 5], // IDs de candidatos afiliados
    history: [
      { year: "1995", event: "Fundación como instrumento político de los movimientos sociales" },
      { year: "2005", event: "Primera victoria presidencial con Evo Morales" },
      { year: "2006-2019", event: "Período de gobierno de Evo Morales" },
      { year: "2020", event: "Victoria electoral de Luis Arce" }
    ],
    alliances: ["Pacto de Unidad"]
  },
  {
    id: 2,
    name: "Comunidad Ciudadana",
    shortName: "CC",
    logo: "/images/parties/cc.png", // Placeholder - actualizar con imagen real
    color: "#db2b1f",
    founded: "2018",
    ideology: ["Centro-izquierda", "Progresismo", "Socialdemocracia"],
    description: "Comunidad Ciudadana es una coalición política boliviana fundada en 2018 como alternativa al MAS. Liderada por Carlos Mesa, quedó en segundo lugar en las elecciones de 2019 y 2020. Su plataforma combina elementos de liberalismo económico con políticas sociales progresistas, enfocándose en la descentralización, fortalecimiento institucional y lucha contra la corrupción.",
    keyFigures: [
      { name: "Carlos Mesa", role: "Líder y ex-candidato presidencial" },
      { name: "Gustavo Pedraza", role: "Político y ex-candidato a vicepresidente" }
    ],
    currentCandidates: [2], // IDs de candidatos afiliados
    history: [
      { year: "2018", event: "Fundación como coalición política" },
      { year: "2019", event: "Segunda fuerza en elecciones anuladas" },
      { year: "2020", event: "Segunda fuerza en elecciones generales" }
    ],
    alliances: ["Frente Revolucionario de Izquierda", "Sol.bo"]
  },
  {
    id: 3,
    name: "LIBRE 21",
    shortName: "LIBRE",
    logo: "/images/parties/libre21.png", // Placeholder - actualizar con imagen real
    color: "#ffa500",
    founded: "2020",
    ideology: ["Centro-derecha", "Liberalismo", "Conservadurismo"],
    description: "LIBRE 21 es una alianza política boliviana formada para las elecciones de 2020. Liderada por Jorge 'Tuto' Quiroga, ex-presidente de Bolivia, representa una opción de centro-derecha con énfasis en la economía de mercado, fortalecimiento institucional y oposición al MAS. Aunque no logró resultados significativos en 2020, mantiene presencia en el debate político nacional.",
    keyFigures: [
      { name: "Jorge Quiroga", role: "Líder y ex-presidente de Bolivia" }
    ],
    currentCandidates: [3], // IDs de candidatos afiliados
    history: [
      { year: "2020", event: "Formación de la alianza para elecciones generales" },
      { year: "2021", event: "Reorganización tras resultados electorales" }
    ],
    alliances: ["Alianza Democrática"]
  },
  {
    id: 4,
    name: "Unidad Nacional",
    shortName: "UN",
    logo: "/images/parties/un.png", // Placeholder - actualizar con imagen real
    color: "#1bbc9d",
    founded: "2003",
    ideology: ["Centro-derecha", "Liberalismo económico", "Conservadurismo social"],
    description: "Unidad Nacional es un partido político boliviano fundado en 2003 por el empresario Samuel Doria Medina. Representa una visión de centro-derecha con énfasis en el desarrollo económico, la inversión privada y la modernización del estado. Ha participado en varias elecciones presidenciales y ha formado parte de diversas coaliciones opositoras al MAS.",
    keyFigures: [
      { name: "Samuel Doria Medina", role: "Fundador y líder" }
    ],
    currentCandidates: [4], // IDs de candidatos afiliados
    history: [
      { year: "2003", event: "Fundación del partido" },
      { year: "2005", event: "Primera participación en elecciones presidenciales" },
      { year: "2014", event: "Alianza con el Movimiento Demócrata Social" },
      { year: "2020", event: "Apoyo a la candidatura de Jeanine Áñez" }
    ],
    alliances: ["Alianza UNIDAD", "Bolivia Dice No"]
  },
  {
    id: 5,
    name: "Creemos",
    shortName: "Creemos",
    logo: "/images/parties/creemos.png", // Placeholder - actualizar con imagen real
    color: "#8e44ad",
    founded: "2019",
    ideology: ["Derecha", "Federalismo", "Conservadurismo"],
    description: "Creemos es una alianza política boliviana liderada por Luis Fernando Camacho, surgida en 2019 tras las protestas que llevaron a la renuncia de Evo Morales. Con base principal en Santa Cruz, promueve un modelo de autonomías departamentales, políticas económicas liberales y valores conservadores. Representa una oposición firme al MAS desde posiciones de derecha.",
    keyFigures: [
      { name: "Luis Fernando Camacho", role: "Líder y gobernador de Santa Cruz" },
      { name: "Marco Pumari", role: "Ex-aliado político" }
    ],
    currentCandidates: [6], // IDs de candidatos afiliados
    history: [
      { year: "2019", event: "Surgimiento durante la crisis política" },
      { year: "2020", event: "Tercera fuerza en elecciones generales" },
      { year: "2021", event: "Victoria en las elecciones departamentales de Santa Cruz" }
    ],
    alliances: ["Comité Cívico Pro Santa Cruz"]
  }
];

// Función para obtener un partido por su ID
export const getPartyById = (id) => {
  return parties.find(party => party.id === parseInt(id));
};

// Función para obtener un partido por su nombre corto
export const getPartyByShortName = (shortName) => {
  return parties.find(party => party.shortName === shortName);
};
