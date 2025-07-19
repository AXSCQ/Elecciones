import { libre } from './libre.js';

export const parties = [
  {
    id: "mas",
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
  libre,
  {
    id: "unidad",
    name: "Unidad Nacional",
    shortName: "UN",
    logo: "/images/parties/un.png",
    color: "#ffcc00",
    founded: "12 de diciembre de 2003",
    ideology: ["Social Demócrata", "Emprendimiento", "Libertad", "Justicia", "Solidaridad", "Desarrollo Sostenible"],
    description: "El Frente de Unidad Nacional (UN) es un partido político boliviano fundado el 12 de diciembre de 2003 por Samuel Doria Medina, quien previamente fue militante del Movimiento de Izquierda Revolucionaria (MIR). Se identifica como un proyecto Social Demócrata que busca una economía robusta basada en el emprendimiento popular, diseñada para evitar el extractivismo y promover la movilidad social de los sectores más pobres e indígenas.",
    keyFigures: [
      { name: "Samuel Doria Medina", role: "Fundador y líder principal" },
      { name: "José Luis Lupo", role: "Candidato a vicepresidente 2025" }
    ],
    currentCandidates: [4], // IDs de candidatos afiliados
    history: [
      { year: "2003", event: "Fundación del partido por Samuel Doria Medina tras su salida del MIR" },
      { year: "2005", event: "Primera participación electoral con Samuel Doria Medina como candidato presidencial (7.81% de votos)" },
      { year: "2009", event: "Segunda participación electoral presidencial (5.65% de votos)" },
      { year: "2014", event: "Alianza Unidad Demócrata (UD) con el MDS, obteniendo el 24% de los votos" },
      { year: "2016", event: "Samuel Doria Medina enfrenta procesos judiciales en el caso FOCAS" },
      { year: "2020", event: "Doria Medina se postula como vicepresidente junto a Jeanine Áñez, pero la fórmula se retira" },
      { year: "2024", event: "Formación del 'Bloque de Unidad' con otras fuerzas opositoras" },
      { year: "2025", event: "Samuel Doria Medina es designado candidato presidencial de la alianza 'Unidad'" }
    ],
    alliances: ["Unidad Demócrata (2014)", "Alianza Unidad (2025)"],
    finances: {
      budget2023: "Bs 347,637.48",
      expenses2023: "Bs 243,516.74"
    },
    structure: {
      headquarters: "Av. Sánchez Lima Nº 2482, Sopocachi, La Paz",
      regions: 20,
      leadership: "Estructura descentralizada con Congreso Nacional, Comité Político Nacional y Dirección Nacional"
    },
    audioPath: "/PartidosP/Unidad/UnidadNacional.mp3"
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
  },
  {
    id: "apbsumate",
    name: "APB Súmate",
    shortName: "APB",
    logo: "/images/parties/APBsumate.png", // Actualizar si se usa un logo distinto
    color: "#e74c3c",
    founded: "2024",
    ideology: ["Centro-derecha", "Autonomismo", "Conservadurismo"],
    description: "APB Súmate (Autonomía Para Bolivia - Súmate) es un partido político boliviano fundado en 2024 por Manfred Reyes Villa, a partir de la fusión de agrupaciones regionales. El partido promueve la descentralización, la autonomía departamental y una economía de mercado, con una postura firme contra el MAS. Con fuerte base en Cochabamba, apunta a consolidarse como alternativa nacional de centro-derecha.",
    keyFigures: [
      { name: "Manfred Reyes Villa", role: "Fundador y líder del partido" },
      { name: "Henry Paredes", role: "Presidente del partido" }
    ],
    currentCandidates: [7], // Asignar el ID real del candidato en tu sistema
    history: [
      { year: "2024", event: "Fusión de agrupaciones regionales y solicitud de personería jurídica" },
      { year: "2024", event: "Otorgamiento de personería jurídica por el TSE" },
      { year: "2025", event: "Registro del binomio Reyes Villa - Medrano para las elecciones generales" }
    ],
    alliances: ["46 agrupaciones ciudadanas"]
 },
 {
  id: "fuerzadelpueblo",
  name: "Fuerza del Pueblo",
  shortName: "FDP",
  logo: "/images/parties/fdp.png", // Actualizar con logo real
  color: "#2ecc71",
  founded: "2019",
  ideology: ["Centro", "Descentralización", "Pragmatismo político"],
  description: "Fuerza del Pueblo es un partido político boliviano fundado en 2019, liderado por Jhonny Fernández. Su enfoque se centra en una visión pragmática y de centro, priorizando la descentralización, la eficiencia en la gestión pública y el desarrollo regional. Con fuerte presencia en Santa Cruz, ha buscado posicionarse como una opción alternativa frente a los extremos políticos.",
  keyFigures: [
    { name: "Jhonny Fernández", role: "Fundador y líder del partido" }
  ],
  currentCandidates: [8],
  history: [
    { year: "2019", event: "Fundación del partido y participación en elecciones generales" },
    { year: "2021", event: "Elección de Jhonny Fernández como alcalde de Santa Cruz" }
  ],
  alliances: ["Aliados regionales y agrupaciones municipales"]
},
{
  id: "morena",
  name: "Movimiento Renovador Nacional",
  shortName: "MORENA",
  logo: "/images/parties/morena.png", // Actualizar con logo real
  color: "#3498db",
  founded: "2021",
  ideology: ["Centro-izquierda", "Renovación política", "Progresismo"],
  description: "El Movimiento Renovador Nacional (MORENA) es un partido político boliviano de centro-izquierda, fundado en 2021. Eva Copa, exsenadora y figura emergente del ala renovadora del MAS, lidera el partido, que apuesta por una política progresista con énfasis en la juventud, el desarrollo regional y la renovación institucional.",
  keyFigures: [
    { name: "Eva Copa", role: "Fundadora y líder del partido" }
  ],
  currentCandidates: [9],
  history: [
    { year: "2021", event: "Fundación del partido tras ruptura con el MAS" },
    { year: "2021", event: "Victoria de Eva Copa en las elecciones municipales de El Alto" }
  ],
  alliances: ["Plataformas juveniles", "Organizaciones ciudadanas"]
},
{
  id: "pdc",
  name: "Partido Demócrata Cristiano",
  shortName: "PDC",
  logo: "/images/parties/pdc.png", // Actualizar con logo real
  color: "#34495e",
  founded: "1954",
  ideology: ["Centro", "Democracia Cristiana", "Humanismo"],
  description: "El Partido Demócrata Cristiano (PDC) es uno de los partidos tradicionales de Bolivia, fundado en 1954. Inspirado en los principios de la democracia cristiana, promueve una visión humanista y centrada en la dignidad de la persona, la justicia social y la economía social de mercado. Ha tenido participación continua en el escenario político boliviano desde su creación.",
  keyFigures: [
    { name: "Rodrigo Paz Pereira", role: "Candidato presidencial y figura destacada actual" },
    { name: "Jorge Quiroga", role: "Exmiembro destacado del partido" }
  ],
  currentCandidates: [10],
  history: [
    { year: "1954", event: "Fundación del partido" },
    { year: "1989", event: "Participación en gobierno de coalición con ADN y MIR" },
    { year: "2019", event: "Participación en elecciones generales con Chi Hyun Chung como candidato" }
  ],
  alliances: ["Organismos de la Internacional Demócrata de Centro"]
},
{
  id: "alianzapopular",
  name: "Alianza Popular",
  shortName: "AP",
  logo: "/images/parties/ap.png", // Actualizar con logo real
  color: "#c0392b",
  founded: "2023",
  ideology: ["Izquierda", "Sindicalismo", "Socialismo democrático"],
  description: "Alianza Popular es un partido político boliviano fundado en 2023 por Andrónico Rodríguez, una figura emergente del movimiento cocalero y del MAS. El partido representa una nueva corriente de izquierda con raíces sindicales e indígenas, enfocada en una mayor participación de las bases y la defensa de los logros sociales alcanzados en años anteriores.",
  keyFigures: [
    { name: "Andrónico Rodríguez", role: "Fundador y líder del partido" }
  ],
  currentCandidates: [11],
  history: [
    { year: "2023", event: "Fundación del partido tras tensiones internas en el MAS" },
    { year: "2025", event: "Participación esperada en elecciones generales" }
  ],
  alliances: ["Federación de Cocaleros del Trópico de Cochabamba"]
},
{
  id: "ngp",
  name: "Nueva Generación Patriótica",
  shortName: "NPG",
  logo: "/images/parties/ngp.png", // Actualizar con logo real
  color: "#9b59b6",
  founded: "2024",
  ideology: ["Derecha", "Nacionalismo", "Patriotismo"],
  description: "Nueva Generación Patriótica (NPG) es un partido político boliviano fundado en 2024 con un enfoque en el nacionalismo cívico, la defensa de la soberanía y la recuperación de los valores patrióticos. Está dirigido a una nueva generación de votantes que buscan un cambio desde posiciones conservadoras, enfatizando el orden, la seguridad y el desarrollo económico con identidad nacional.",
  keyFigures: [
    { name: "Nombre por confirmar", role: "Líder o candidato presidencial (actualizar cuando se confirme)" }
  ],
  currentCandidates: [], // Actualizar cuando haya candidatos definidos
  history: [
    { year: "2024", event: "Fundación del partido y registro ante el TSE" },
    { year: "2025", event: "Inicio de actividades electorales rumbo a elecciones generales" }
  ],
  alliances: ["Movimientos ciudadanos patrióticos"]
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
