// Datos de candidatos para las elecciones de Bolivia 2025
import { samuel } from './samuel.js';
import { tuto } from './tuto.js';
export const candidates = [
  {
    id: "1",
    name: "Eduardo Del Castillo Del Carpio",
    image: "/PartidosP/MAS/Eduardo Del Castillo.png",
    party: "Movimiento al Socialismo - Instrumento Político por la Soberanía de los Pueblos",
    partyShort: "MAS-IPSP",
    partyColor: "#3045b5",
    age: 36,
    birthDate: "27 de diciembre de 1988",
    birthPlace: "Santa Cruz, Bolivia",
    maritalStatus: "Casado con Adriana Paola Omonte Tames",
    children: 2,
    education: {
      primary: "Santa Cruz",
      secondary: "Bachiller (2006)",
      university: "Universidad Autónoma Gabriel René Moreno (UAGRM)",
      degrees: [
        "Licenciatura en Derecho",
        "Maestría en Derecho Tributario y Financiero",
        "Cursando Doctorado en Derecho Constitucional (UMSA)"
      ],
      specializations: [
        "Diplomado en Educación Superior",
        "Diplomado en Derechos Económicos, Sociales y Culturales"
      ]
    },
    profession: "Abogado y Político",
    region: "sc", // Santa Cruz
    role: "Candidato Presidencial",
    bio: "Carlos Eduardo Del Castillo Del Carpio es un abogado y político boliviano nacido en Santa Cruz. Inició su carrera como gestor jurídico en el municipio de Porongo y posteriormente ocupó cargos como asesor legal en la Dirección de Migración en Santa Cruz y abogado de Impuestos Nacionales en el Ministerio Público. Su trayectoria política se consolidó al ser nombrado Ministro de Gobierno de Bolivia desde noviembre de 2020 hasta mayo de 2025, cargo en el que fue ratificado en junio de 2023 tras una censura por la Asamblea Legislativa. Ha sido designado candidato presidencial del MAS-IPSP por el Pacto de Unidad para las elecciones generales de 2025, aunque ha enfrentado resistencia por parte del expresidente Evo Morales.",
    professionalExperience: [
      "Gestor jurídico en el municipio de Porongo",
      "Asesor legal en la Dirección de Migración en Santa Cruz",
      "Abogado de Impuestos Nacionales en el Ministerio Público",
      "Oficial superior del Senado"
    ],
    socialMedia: {
      facebook: "No disponible oficialmente",
      twitter: "No disponible oficialmente",
      instagram: "No disponible oficialmente",
      tiktok: "No disponible oficialmente",
      youtube: "No disponible oficialmente",
      website: "www.masipsp.bo"
    },
    vicepresident: {
      name: "Milán Berna",
      image: "/Fondos/Candidatos1x1/Milan.jpg",
      bio: "Líder campesino y dirigente de la Confederación Sindical Única de Trabajadores Campesinos de Bolivia (CSUTCB). Fue designado candidato a la vicepresidencia por el Pacto de Unidad junto a Eduardo Del Castillo el 16 de mayo de 2025. Se desempeñó como presidente del Presidium en el X Congreso del MAS-IPSP.",
      profession: "Dirigente de la CSUTCB",
      age: 45,
      birthYear: 1980
    },
    timeline: [
      { year: 2006, event: "Bachiller en Santa Cruz" },
      { year: 2020, event: "Nombrado Ministro de Gobierno de Bolivia (9 de noviembre)" },
      { year: 2023, event: "Censurado por la Asamblea Legislativa y reposicionado por el presidente Luis Arce (29 de junio)" },
      { year: 2025, event: "Designado candidato presidencial del MAS-IPSP por el Pacto de Unidad (16 de mayo)" }
    ],
    proposals: [
      "Mantener la estabilidad y el crecimiento del sector financiero, recuperando excedentes extraordinarios de la banca comercial",
      "Potenciar las empresas públicas estratégicas, fortaleciéndolas, capitalizándolas y haciéndolas eficientes",
      "Consolidar la política de producción e industrialización del litio y sus componentes con soberanía",
      "Profundizar la industrialización con sustitución de importaciones mediante planificación territorial",
      "Diversificar mercados internacionales a través de la negociación de acuerdos comerciales",
      "Ajustar la carga horaria educativa a 6 periodos diarios para desarrollo de capacidades en lectoescritura y matemáticas",
      "Mayor inversión en servicios básicos, priorizando comunidades vulnerables y alejadas",
      "Asegurar acceso a asistencia legal gratuita para todos los ciudadanos",
      "Impulsar la creación del Movimiento Internacional contra formas análogas al neocolonialismo",
      "Incentivar la creación de organizaciones económicas comunitarias en diferentes niveles territoriales"
    ],
    controversies: [
      "Resistencia por parte de Evo Morales y la oposición",
      "Acusaciones de supuesta protección al narcotráfico",
      "Censura por la Asamblea Legislativa Plurinacional en junio de 2023"
    ],
    achievements: [
      "Ministro de Gobierno de Bolivia (2020-2025)",
      "Candidato presidencial del MAS-IPSP para las elecciones de 2025"
    ],
    partyInfo: {
      fullName: "Movimiento al Socialismo - Instrumento Político por la Soberanía de los Pueblos",
      acronym: "MAS-IPSP",
      colors: "Azul cobalto, negro y blanco",
      ideology: "Plurinacionalismo, populismo de izquierda, antiimperialismo, antineoliberalismo",
      foundingDate: "30 de julio de 1987 (reconocimiento legal)",
      historicalLeaders: [
        "David Áñez Pedraza (presidente vitalicio desde la fundación)",
        "Evo Morales (presidente del partido de 1997 a 2024)",
        "Grover García (presidente desde mayo de 2024)"
      ]
    }
  },
  samuel,
  tuto,
  {
    id: "4",
    name: "Manfred Reyes Villa",
    image: "/PartidosP/APBSúmate/Manfred Reyes Villa.png",
    party: "Autonomía Para Bolivia-Súmate",
    partyShort: "APB Súmate",
    partyColor: "#e74c3c",
    age: 68,
    education: "Colegio Militar, Academia de Guerra",
    profession: "Militar y Político",
    region: "cb", // Cochabamba
    role: "Candidato Presidencial",
    bio: "Manfred Reyes Villa es un político y ex-militar boliviano con amplia trayectoria. Fue alcalde de Cochabamba por tres períodos consecutivos y prefecto del departamento. Después de años de exilio, regresó a Bolivia y fue elegido alcalde de Cochabamba nuevamente en 2021. Es conocido por su estilo directo y su enfoque en obras públicas.",
    socialMedia: {
      twitter: "https://twitter.com/ManfredReyesV",
      facebook: "https://facebook.com/ManfredReyesVillaOficial"
    },
    vicepresident: {
      name: "Juan Carlos Medrano",
      image: "/Fondos/Candidatos1x1/JuanM.jpg", // Imagen temporal: "/PartidosP/APBSúmate/Juan Carlos Medrano.png",
      bio: "Político y profesional con experiencia en gestión pública regional.",
      profession: "Abogado",
      age: 52
    },
    timeline: [
      { year: 1993, event: "Elegido alcalde de Cochabamba por primera vez" },
      { year: 2005, event: "Candidato presidencial" },
      { year: 2021, event: "Regresa del exilio y es elegido alcalde de Cochabamba" },
      { year: 2024, event: "Candidato presidencial por APB Súmate" }
    ],
    proposals: [
      "Descentralización y fortalecimiento de autonomías regionales",
      "Inversión en infraestructura y obras públicas",
      "Reforma del sistema de seguridad ciudadana",
      "Modernización de la gestión pública"
    ]
  },
  {
    id: "5",
    name: "Andrónico Rodríguez",
    image: "/PartidosP/Alianza Popular/Andrónico Rodríguez.png",
    party: "Alianza Popular",
    partyShort: "AP",
    partyColor: "#3045b5",
    age: 33,
    education: "Estudiante de Derecho, Universidad Mayor de San Simón",
    profession: "Dirigente Sindical",
    region: "cb", // Cochabamba
    role: "Candidato Presidencial",
    bio: "Andrónico Rodríguez es un joven líder sindical cocalero que ganó notoriedad durante la crisis política de 2019. Nacido en el Chapare, siguió los pasos de Evo Morales en el sindicalismo cocalero. Su juventud y carisma lo han posicionado como una figura emergente en la política boliviana.",
    socialMedia: {
      twitter: "https://twitter.com/AndronicoRod",
      facebook: "https://facebook.com/AndronicoRodriguezOficial"
    },
    vicepresident: {
      name: "Mariana Prado",
      image: "/Fondos/Candidatos1x1/Mariana.jpg", // Imagen temporal: "/PartidosP/Alianza Popular/Mariana Prado.png",
      bio: "Profesional con experiencia en desarrollo económico y políticas públicas.",
      profession: "Economista",
      age: 42
    },
    timeline: [
      { year: 2010, event: "Inicia su carrera como dirigente sindical en el Chapare" },
      { year: 2019, event: "Emerge como líder durante la crisis política" },
      { year: 2020, event: "Elegido senador por Cochabamba" },
      { year: 2024, event: "Candidato presidencial por Alianza Popular" }
    ],
    proposals: [
      "Profundización del modelo económico social",
      "Soberanía alimentaria y apoyo a productores campesinos",
      "Industrialización con respeto a la Madre Tierra",
      "Fortalecimiento de organizaciones sociales y sindicales"
    ]
  },
  {
    id: "6",
    name: "Fidel Tapia Zambrana",
    image: "/PartidosP/NuevaGeneraciónPatriótica/Fidel Tapia.png",
    image: "/PartidosP/NuevaGeneraciónPatriótica/Definir.png",
    party: "Nueva Generación Patriótica",
    partyShort: "NGP",
    partyColor: "#9b59b6",
    age: 48,
    education: "Ciencias Políticas, Universidad Mayor de San Andrés",
    profession: "Político",
    region: "lp", // La Paz
    role: "Candidato Presidencial",
    bio: "Fidel Tapia Zambrana es un político boliviano que representa a una nueva generación de liderazgo. Ha trabajado en diversos proyectos de desarrollo comunitario y ha sido activista por los derechos de los jóvenes.",
    socialMedia: {
      facebook: "https://facebook.com/FidelTapiaZambrana"
    },
    vicepresident: {
      name: "Edgar Uriona Veizaga",
      image: "/Fondos/Candidatos1x1/Edgar.jpg", // Imagen temporal: "/PartidosP/NuevaGeneraciónPatriótica/Edgar Uriona.png",
      bio: "Profesional con experiencia en gestión pública y desarrollo social.",
      profession: "Administrador",
      age: 46
    },
    timeline: [
      { year: 2015, event: "Inicia su carrera política en movimientos ciudadanos" },
      { year: 2020, event: "Funda el movimiento Nueva Generación Patriótica" },
      { year: 2024, event: "Candidato presidencial por NGP" }
    ],
    proposals: [
      "Renovación de la clase política boliviana",
      "Políticas de desarrollo sostenible",
      "Apoyo a emprendimientos juveniles",
      "Transparencia en la gestión pública"
    ]
  },
  {
    id: "7",
    name: "Rodrigo Paz",
    image: "/PartidosP/PartidoDemócrataCristiano/Rodrigo Paz Pereira.png",
    party: "Partido Demócrata Cristiano",
    partyShort: "PDC",
    partyColor: "#2980b9",
    age: 55,
    education: "Derecho, Universidad Católica Boliviana",
    profession: "Abogado y Político",
    region: "lp", // La Paz
    role: "Candidato Presidencial",
    bio: "Rodrigo Paz es un político y abogado boliviano con trayectoria en el Partido Demócrata Cristiano. Ha trabajado en proyectos de desarrollo social y derechos humanos.",
    socialMedia: {
      twitter: "https://twitter.com/RodrigoPazBol",
      facebook: "https://facebook.com/RodrigoPazOficial"
    },
    vicepresident: {
      name: "Edmán Lara",
      image: "/Fondos/Candidatos1x1/Edman.jpg", // Imagen temporal: "/PartidosP/PartidoDemócrataCristiano/Edman Lara.png",
      bio: "Profesional con experiencia en gestión pública y desarrollo comunitario.",
      profession: "Ingeniero",
      age: 50
    },
    timeline: [
      { year: 2010, event: "Ingresa al Partido Demócrata Cristiano" },
      { year: 2018, event: "Asume liderazgo en el PDC" },
      { year: 2024, event: "Candidato presidencial por el PDC" }
    ],
    proposals: [
      "Fortalecimiento de la democracia participativa",
      "Políticas sociales con enfoque cristiano",
      "Desarrollo económico sostenible",
      "Protección de la familia y valores tradicionales"
    ]
  },
  {
    id: "8",
    name: "Eva Copa Murga",
    image: "/PartidosP/Morena/Eva Copa Murga.png",
    party: "Movimiento de Renovación Nacional",
    partyShort: "MORENA",
    partyColor: "#e67e22",
    age: 38,
    education: "Ciencias Políticas, Universidad Pública de El Alto",
    profession: "Política",
    region: "lp", // La Paz
    role: "Candidata Presidencial",
    bio: "Eva Copa Murga es una política boliviana que ganó protagonismo como presidenta del Senado durante la crisis política de 2019. Originaria de El Alto, su carrera política comenzó en movimientos estudiantiles. Fue elegida alcaldesa de El Alto en 2021 y ahora busca la presidencia con MORENA.",
    socialMedia: {
      twitter: "https://twitter.com/EvaCopaMurga",
      facebook: "https://facebook.com/EvaCopaMurgaOficial"
    },
    vicepresident: {
      name: "Jorge Richter",
      image: "/Fondos/Candidatos1x1/Jorge.jpg", // Imagen temporal: "/PartidosP/Morena/Jorge Richter.png",
      bio: "Analista político y profesional con experiencia en comunicación gubernamental.",
      profession: "Analista Político",
      age: 52
    },
    timeline: [
      { year: 2015, event: "Elegida senadora por el departamento de La Paz" },
      { year: 2019, event: "Asume la presidencia del Senado durante la crisis política" },
      { year: 2021, event: "Elegida alcaldesa de El Alto" },
      { year: 2024, event: "Candidata presidencial por MORENA" }
    ],
    proposals: [
      "Renovación de la política boliviana",
      "Desarrollo urbano inclusivo",
      "Fortalecimiento de la economía popular",
      "Políticas de género e inclusión social"
    ]
  },
  {
    id: "9",
    name: "Jhonny Fernández",
    image: "/PartidosP/FuerzadelPueblo/Jhonny Fernández.png",
    party: "Fuerza del Pueblo",
    partyShort: "FP",
    partyColor: "#d35400",
    age: 60,
    education: "Administración de Empresas, Universidad Autónoma Gabriel René Moreno",
    profession: "Político y Empresario",
    region: "sc", // Santa Cruz
    role: "Candidato Presidencial",
    bio: "Jhonny Fernández es un político y empresario boliviano con amplia trayectoria en Santa Cruz. Ha sido alcalde de Santa Cruz de la Sierra en varios períodos y ahora busca la presidencia con su partido Fuerza del Pueblo.",
    socialMedia: {
      facebook: "https://facebook.com/JhonnyFernandezOficial"
    },
    vicepresident: {
      name: "Por definir",
      image: "/Fondos/Candidatos1x1/Definir.jpg", // Imagen temporal: "/PartidosP/FuerzadelPueblo/placeholder.png",
      bio: "Candidato(a) a vicepresidente aún por definir.",
      profession: "Por definir",
      age: 0
    },
    timeline: [
      { year: 2000, event: "Elegido alcalde de Santa Cruz por primera vez" },
      { year: 2010, event: "Funda su propio partido político" },
      { year: 2021, event: "Regresa a la alcaldía de Santa Cruz" },
      { year: 2024, event: "Candidato presidencial por Fuerza del Pueblo" }
    ],
    proposals: [
      "Descentralización administrativa",
      "Desarrollo económico regional",
      "Fortalecimiento de la seguridad ciudadana",
      "Modernización de la infraestructura urbana"
    ]
  }
];
