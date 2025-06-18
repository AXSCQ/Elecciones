// Datos de candidatos para las elecciones de Bolivia 2025
export const candidates = [
  {
    id: "1",
    name: "Eva Copa",
    image: "/Fondos/Candidatos1x1/Copa.png",
    party: "Movimiento al Socialismo",
    partyShort: "MAS",
    partyColor: "#3045b5",
    age: 37,
    education: "Licenciatura en Derecho, Universidad Pública de El Alto",
    profession: "Abogada y Política",
    region: "lp", // La Paz
    role: "Candidata Presidencial",
    bio: "Eva Copa es una política boliviana que ganó protagonismo como presidenta del Senado durante la crisis política de 2019. Originaria de El Alto, su carrera política comenzó en movimientos estudiantiles y luego en el MAS. Tras diferencias con la dirigencia del partido, fundó su propio movimiento político y fue elegida alcaldesa de El Alto en 2021. Su estilo directo y pragmático le ha ganado popularidad entre diversos sectores.",
    socialMedia: {
      twitter: "https://twitter.com/EvaCopa",
      facebook: "https://facebook.com/EvaCopa",
      instagram: "https://instagram.com/EvaCopa"
    },
    vicePresident: {
      name: "Santos Ramírez",
      image: "/Fondos/Candidatos1x1/placeholder-profile.jpg",
      bio: "Ex-dirigente del MAS con experiencia en gestión pública y movimientos sociales.",
      profession: "Sociólogo",
      age: 52
    },
    timeline: [
      { year: 2015, event: "Elegida senadora por el departamento de La Paz" },
      { year: 2019, event: "Asume la presidencia del Senado durante la crisis política" },
      { year: 2020, event: "Ruptura con la dirigencia del MAS" },
      { year: 2021, event: "Elegida alcaldesa de El Alto" }
    ],
    proposals: [
      "Industrialización de los recursos naturales con enfoque sostenible",
      "Fortalecimiento del sistema de salud público y gratuito",
      "Políticas de desarrollo urbano inclusivo para ciudades intermedias",
      "Reforma educativa con enfoque tecnológico y cultural"
    ]
  },
  {
    id: "2",
    name: "Luis Arce",
    image: "/Fondos/Candidatos1x1/Castillo.png",
    party: "Comunidad Ciudadana",
    partyShort: "CC",
    partyColor: "#db2b1f",
    age: 58,
    education: "Licenciatura en Economía, Universidad Mayor de San Andrés; Maestría en Economía, Universidad de Warwick",
    profession: "Economista",
    region: "lp", // La Paz
    role: "Candidato Presidencial",
    bio: "Luis Arce es un economista y político boliviano que sirvió como Ministro de Economía durante gran parte de los gobiernos de Evo Morales. Es considerado el arquitecto del modelo económico boliviano que combinó políticas estatistas con prudencia fiscal, logrando altas tasas de crecimiento y reducción de la pobreza. En 2020, fue elegido presidente de Bolivia representando al MAS.",
    socialMedia: {
      twitter: "https://twitter.com/LuchoXBolivia",
      facebook: "https://facebook.com/LuisArceOficial"
    },
    vicePresident: {
      name: "Carlos Mesa",
      image: "/Fondos/Candidatos1x1/placeholder-profile.jpg",
      bio: "Ex-presidente de Bolivia y periodista con amplia trayectoria política.",
      profession: "Historiador y Periodista",
      age: 68
    },
    timeline: [
      { year: 2006, event: "Designado Ministro de Economía y Finanzas Públicas" },
      { year: 2017, event: "Reconocido por organismos internacionales por la gestión económica" },
      { year: 2019, event: "Renuncia al cargo tras la crisis política" },
      { year: 2020, event: "Candidato presidencial por el MAS" }
    ],
    proposals: [
      "Continuidad del modelo económico social comunitario productivo",
      "Industrialización del litio y otros recursos estratégicos",
      "Ampliación de bonos sociales y subsidios",
      "Fortalecimiento de empresas estatales estratégicas"
    ]
  },
  {
    id: "3",
    name: "Jorge Quiroga",
    image: "/Fondos/Candidatos1x1/TUTO-Photoroom.png",
    party: "LIBRE 21",
    partyShort: "LIBRE",
    partyColor: "#ffa500",
    age: 62,
    education: "Ingeniería Industrial, Texas A&M University; MBA, St. Edward's University",
    profession: "Ingeniero y Consultor Internacional",
    region: "cb", // Cochabamba
    role: "Candidato Presidencial",
    bio: "Jorge 'Tuto' Quiroga es un político y empresario boliviano que fue presidente de Bolivia entre 2001 y 2002. Con formación en Estados Unidos, ha alternado su carrera entre la política y consultorías internacionales. Ha sido candidato presidencial en varias ocasiones representando posiciones de centro-derecha. Es conocido por su postura crítica hacia los gobiernos del MAS y su defensa de la economía de mercado.",
    socialMedia: {
      twitter: "https://twitter.com/tutoquiroga",
      facebook: "https://facebook.com/tutoquirogaoficial",
      instagram: "https://instagram.com/tutoquiroga"
    },
    vicePresident: {
      name: "María René Liévana",
      image: "/Fondos/Candidatos1x1/placeholder-profile.jpg",
      bio: "Abogada especializada en derecho constitucional y derechos humanos.",
      profession: "Abogada",
      age: 45
    },
    timeline: [
      { year: 1997, event: "Elegido Vicepresidente de Bolivia" },
      { year: 2001, event: "Asume la Presidencia tras la renuncia de Hugo Banzer" },
      { year: 2005, event: "Candidato presidencial por PODEMOS" },
      { year: 2020, event: "Funda LIBRE 21 y se presenta como candidato presidencial" }
    ],
    proposals: [
      "Reforma del sistema judicial para garantizar independencia",
      "Apertura a inversiones extranjeras en sectores estratégicos",
      "Descentralización administrativa y fortalecimiento de autonomías",
      "Modernización tecnológica del Estado"
    ]
  },
  {
    id: "4",
    name: "Samuel Doria Medina",
    image: "/Fondos/Candidatos1x1/Samuel.png",
    party: "Unidad Nacional",
    partyShort: "UN",
    partyColor: "#1bbc9d",
    age: 64,
    education: "Economía, Universidad de Chicago",
    profession: "Empresario y Economista",
    region: "lp", // La Paz
    role: "Candidato Presidencial",
    bio: "Samuel Doria Medina es un empresario y político boliviano, fundador del partido Unidad Nacional. Como empresario, construyó uno de los grupos económicos más importantes de Bolivia. En política, ha sido candidato presidencial en varias ocasiones, posicionándose como una alternativa de centro-derecha. Su discurso combina propuestas de libre mercado con preocupaciones sociales.",
    socialMedia: {
      twitter: "https://twitter.com/SDoriaMedina",
      facebook: "https://facebook.com/SamuelDoriaMedinaOficial",
      instagram: "https://instagram.com/samueldoriamedina"
    },
    vicePresident: {
      name: "Soledad Chapetón",
      image: "/Fondos/Candidatos1x1/placeholder-profile.jpg",
      bio: "Ex-alcaldesa de El Alto con experiencia en gestión municipal y desarrollo urbano.",
      profession: "Administradora Pública",
      age: 41
    },
    timeline: [
      { year: 1991, event: "Ministro de Planeamiento durante el gobierno de Jaime Paz Zamora" },
      { year: 2003, event: "Funda el partido Unidad Nacional" },
      { year: 2005, event: "Primera candidatura presidencial" },
      { year: 2014, event: "Alianza con el Movimiento Demócrata Social" }
    ],
    proposals: [
      "Creación de un millón de empleos formales",
      "Reforma tributaria para simplificar impuestos",
      "Fortalecimiento de la seguridad ciudadana",
      "Modernización de la infraestructura productiva"
    ]
  },
  {
    id: "5",
    name: "Andrónico Rodríguez",
    image: "/Fondos/Candidatos1x1/Rodrigo.png",
    party: "Movimiento al Socialismo",
    partyShort: "MAS",
    partyColor: "#3045b5",
    age: 33,
    education: "Estudiante de Derecho, Universidad Mayor de San Simón",
    profession: "Dirigente Sindical",
    region: "cb", // Cochabamba
    role: "Candidato Presidencial",
    bio: "Andrónico Rodríguez es un joven líder sindical cocalero que ganó notoriedad durante la crisis política de 2019. Nacido en el Chapare, siguió los pasos de Evo Morales en el sindicalismo cocalero. Su juventud y carisma lo han posicionado como una figura emergente dentro del MAS, representando una renovación generacional. Actualmente es vicepresidente del Senado boliviano.",
    socialMedia: {
      twitter: "https://twitter.com/AndronicoRod",
      facebook: "https://facebook.com/AndronicoRodriguezOficial"
    },
    vicePresident: {
      name: "Segundina Flores",
      image: "/Fondos/Candidatos1x1/placeholder-profile.jpg",
      bio: "Dirigente de las Bartolinas con amplia trayectoria en movimientos sociales indígenas.",
      profession: "Líder Sindical",
      age: 48
    },
    timeline: [
      { year: 2010, event: "Inicia su carrera como dirigente sindical en el Chapare" },
      { year: 2019, event: "Emerge como líder durante las protestas tras la renuncia de Evo Morales" },
      { year: 2020, event: "Elegido senador por Cochabamba" },
      { year: 2021, event: "Asume la vicepresidencia del Senado" }
    ],
    proposals: [
      "Profundización del modelo económico del MAS",
      "Soberanía alimentaria y apoyo a productores campesinos",
      "Industrialización con respeto a la Madre Tierra",
      "Fortalecimiento de organizaciones sociales y sindicales"
    ]
  }
];
