// Datos del partido LIBRE para las elecciones de Bolivia 2025
export const libre = {
  id: "frilibre",
  name: "Alianza Libre",
  shortName: "LIBRE",
  logo: "/images/parties/libre.png", // Actualizar con la ruta correcta del logo
  color: "#1E88E5", // Color azul para representar al partido
  founded: "2024",
  slogan: "Libertad y República",
  audioPath: "/PartidosP/FRILibre/Libre.mp3", // Ruta al podcast generado con IA
  
  // Ideología y valores
  ideology: [
    "Centrismo", 
    "Liberalismo", 
    "Socialdemocracia", 
    "Federalismo", 
    "Autonomismo", 
    "Reformismo", 
    "Anticomunismo", 
    "Antimasismo", 
    "Socioliberalismo"
  ],
  
  // Descripción general del partido
  description: "La Alianza Libre, formalmente conocida como LIBRE - Libertad y Democracia, se constituyó en diciembre de 2024 y se registró oficialmente en abril de 2025. Liderada por Jorge 'Tuto' Quiroga, ex-presidente de Bolivia, busca posicionarse como una opción de centro en un espectro político tradicionalmente dividido. Su plataforma se centra en la reconstrucción económica, la reactivación productiva y la recuperación institucional, proponiendo medidas orientadas a la reducción del déficit fiscal, la promoción de la inversión privada y la transparencia en la gestión pública.",
  
  // Figuras clave del partido
  keyFigures: [
    { name: "Jorge Quiroga Ramírez", role: "Líder y candidato presidencial" },
    { name: "Juan Pablo Velasco", role: "Candidato a vicepresidente" },
    { name: "Tomás Monasterios", role: "Vocero oficial" }
  ],
  
  // Candidatos actuales (IDs que coinciden con los de candidates.js)
  currentCandidates: ["tuto"],
  
  // Historia del partido
  history: [
    { year: "2020", event: "Antecedente: Formación de la alianza Libre21 para elecciones generales" },
    { year: "2024", event: "Conformación de la coalición electoral Alianza Libre (17 de diciembre)" },
    { year: "2025", event: "Inscripción oficial ante el Tribunal Supremo Electoral (17 de abril)" }
  ],
  
  // Alianzas políticas
  alliances: {
    current: [
      { name: "Frente Revolucionario de Izquierda (FRI)", type: "Partido político oficial" },
      { name: "Movimiento Demócrata Social (MDS)", type: "Partido político oficial" }
    ],
    supporting: [
      "15 agrupaciones ciudadanas regionales",
      "Movimientos sociales autónomos",
      "Sectores empresariales independientes"
    ],
    historical: [
      { name: "Libre21", year: "2020", description: "Alianza electoral liderada por Jorge Quiroga para las elecciones de 2020" },
      { name: "PODEMOS", year: "2005", description: "Agrupación ciudadana con la que Quiroga quedó en segundo lugar en las elecciones de 2005" }
    ],
    international: [
      "Foros internacionales de centro y centro-derecha",
      "Organizaciones pro-democracia en América Latina"
    ]
  },
  
  // Propuestas principales
  proposals: {
    economic: [
      "Reducción del déficit fiscal al 3% del PIB",
      "Revisión y reestructuración de empresas públicas deficitarias",
      "Mejora de la administración tributaria para combatir evasión y contrabando",
      "Reactivación del sector de hidrocarburos mediante cambios en la ley",
      "Focalización del subsidio a los combustibles"
    ],
    institutional: [
      "Reducción de instituciones públicas consideradas innecesarias",
      "Mejora del índice de presupuesto abierto para mayor transparencia",
      "Fortalecimiento de la Contraloría y el Ministerio Público independientes",
      "Simplificación de trámites para la inversión privada"
    ],
    social: [
      "Convertir a Bolivia en el 'Corazón Verde Digital de Sudamérica'",
      "Promoción de la inversión privada para generación de empleo",
      "Incentivos al sistema financiero para créditos a emprendimientos"
    ]
  },
  
  // Estructura organizativa
  structure: {
    leadership: "Liderazgo centralizado en la figura de Jorge Quiroga Ramírez",
    components: [
      "Frente Revolucionario de Izquierda (FRI) - partido político oficial",
      "Movimiento Demócrata Social (MDS) - partido político oficial",
      "15 agrupaciones ciudadanas regionales"
    ],
    decisionMaking: "Comité Ejecutivo Nacional con representantes de los partidos y agrupaciones miembros"
  },
  
  // Financiamiento y recursos
  financing: {
    sources: [
      "Aportes de militantes y simpatizantes",
      "Financiamiento público electoral (según normativa del TSE)",
      "Donaciones privadas reguladas"
    ],
    transparency: "Compromiso con la transparencia financiera y rendición de cuentas pública"
  },
  
  // Presencia territorial
  territorialPresence: {
    strongholds: ["Cochabamba", "Santa Cruz", "La Paz", "Tarija"],
    challenges: ["Áreas rurales del altiplano", "Regiones con fuerte presencia del MAS"]
  },
  
  // Controversias o desafíos
  challenges: [
    "Fragmentación de la oposición boliviana",
    "Ruptura del 'Bloque de Unidad' opositor por disputas internas",
    "Procesos judiciales contra Jorge Quiroga, denunciados como persecución política",
    "Dificultad para consolidar una base electoral amplia"
  ],
  
  // Visión y misión
  vision: "Convertir a Bolivia en el 'Corazón Verde Digital de Sudamérica', combinando desarrollo económico con sostenibilidad ambiental y modernización tecnológica.",
  mission: "Ofrecer una alternativa pragmática y centrada en la reconstrucción económica, la reactivación productiva y la recuperación institucional de Bolivia."
};
