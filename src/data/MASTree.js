// Datos completos para el árbol político del MAS - Elecciones Bolivia 2025

export const MASTree = {
  // Información principal del partido
  id: 'mas',
  name: 'Movimiento al Socialismo - Instrumento Político por la Soberanía de los Pueblos',
  shortName: 'MAS-IPSP',
  color: '#3045b5', // Azul cobalto
  foundation: '30 de julio de 1987', // Fecha de reconocimiento legal
  ideology: 'Plurinacionalismo, populismo de izquierda, antiimperialismo, antineoliberalismo',
  officialColors: 'Azul cobalto, negro y blanco',
  historicalLeaders: [
    {
      name: 'David Áñez Pedraza',
      role: 'Presidente vitalicio desde la fundación',
      image: '/Fondos/Candidatos1x1/DavidAnez.png' // Necesitarás crear esta imagen
    },
    {
      name: 'Evo Morales',
      role: 'Presidente del partido de 1997 a 2024',
      image: '/Fondos/Candidatos1x1/EvoMorales.png' // Necesitarás crear esta imagen
    },
    {
      name: 'Grover García',
      role: 'Presidente desde mayo de 2024',
      image: '/Fondos/Candidatos1x1/GroverGarcia.png' // Necesitarás crear esta imagen
    }
  ],
  
  // Candidatos para las elecciones 2025
  candidates: {
    president: {
      id: 'pres1',
      name: 'Eduardo Del Castillo',
      role: 'Candidato Presidencial',
      image: '/Fondos/Candidatos1x1/DelCastillo.png', // Necesitarás crear esta imagen
      bio: 'Abogado y político, ex Ministro de Gobierno de Bolivia (2020-2025). Fue designado candidato presidencial del MAS por el Pacto de Unidad para las elecciones de 2025.',
      vicepresident: {
        id: 'vpres1',
        name: 'Milán Berna',
        role: 'Candidato Vicepresidencial',
        image: '/Fondos/Candidatos1x1/MilanBerna.png', // Necesitarás crear esta imagen
        bio: 'Dirigente de la Confederación Sindical Única de Trabajadores Campesinos de Bolivia (CSUTCB). Fue designado candidato a la vicepresidencia por el Pacto de Unidad junto a Eduardo Del Castillo el 16 de mayo de 2025.'
      }
    },
    
    // Senadores
    senators: [
      {
        id: 'sen1',
        name: 'Pedro Benjamín Vargas Fernández',
        role: 'Candidato a Senador',
        region: 'Chuquisaca, Potosí',
        image: '/Fondos/Candidatos1x1/PedroVargas.png', // Necesitarás crear esta imagen
        bio: 'Senador del MAS-IPSP en el periodo 2020-2025. Representante con experiencia en las regiones de Chuquisaca y Potosí.'
      },
      {
        id: 'sen2',
        name: 'Felix Ajpi Ajpi',
        role: 'Candidato a Senador',
        region: 'La Paz',
        image: '/Fondos/Candidatos1x1/FelixAjpi.png', // Necesitarás crear esta imagen
        bio: 'Senador del MAS-IPSP en el periodo 2020-2025. Representante de La Paz con enfoque en derechos indígenas.'
      },
      {
        id: 'sen3',
        name: 'Gladys Valentina Alarcón Farfán',
        role: 'Candidata a Senadora',
        region: 'Tarija',
        image: '/Fondos/Candidatos1x1/GladysAlarcon.png', // Necesitarás crear esta imagen
        bio: 'Senadora del MAS-IPSP en el periodo 2020-2025. Representante de Tarija con trayectoria en movimientos sociales.'
      },
      {
        id: 'sen4',
        name: 'María Patricia Arce Guzmán',
        role: 'Candidata a Senadora',
        region: 'Cochabamba',
        image: '/Fondos/Candidatos1x1/PatriciaArce.png', // Necesitarás crear esta imagen
        bio: 'Senadora del MAS-IPSP en el periodo 2020-2025. Ex-alcaldesa de Vinto, conocida por su resistencia durante la crisis política de 2019.'
      },
      {
        id: 'sen5',
        name: 'Ana María Castillo Negrette',
        role: 'Candidata a Senadora',
        region: 'Potosí',
        image: '/Fondos/Candidatos1x1/AnaCastillo.png', // Necesitarás crear esta imagen
        bio: 'Senadora del MAS-IPSP en el periodo 2020-2025. Representante de Potosí con enfoque en desarrollo regional.'
      },
      {
        id: 'sen6',
        name: 'Soledad Flores Velásquez',
        role: 'Candidata a Senadora',
        region: 'Santa Cruz',
        image: '/Fondos/Candidatos1x1/SoledadFlores.png', // Necesitarás crear esta imagen
        bio: 'Senadora del MAS-IPSP en el periodo 2020-2025. Representante de Santa Cruz con trayectoria en movimientos campesinos.'
      },
      {
        id: 'sen7',
        name: 'Luis Adolfo Flores Roberts',
        role: 'Candidato a Senador',
        region: 'Pando',
        image: '/Fondos/Candidatos1x1/LuisFlores.png', // Necesitarás crear esta imagen
        bio: 'Senador del MAS-IPSP en el periodo 2020-2025. Representante de Pando con enfoque en desarrollo amazónico.'
      },
      {
        id: 'sen8',
        name: 'Ruben Gutierrez Carrizo',
        role: 'Candidato a Senador',
        region: 'Oruro',
        image: '/Fondos/Candidatos1x1/RubenGutierrez.png', // Necesitarás crear esta imagen
        bio: 'Senador del MAS-IPSP en el periodo 2020-2025. Representante de Oruro con trayectoria en movimientos mineros.'
      },
      {
        id: 'sen9',
        name: 'Eva Luz Humerez Alvez',
        role: 'Candidata a Senadora',
        region: 'Pando',
        image: '/Fondos/Candidatos1x1/EvaHumerez.png', // Necesitarás crear esta imagen
        bio: 'Senadora del MAS-IPSP en el periodo 2020-2025. Representante de Pando con enfoque en derechos de las mujeres.'
      },
      {
        id: 'sen10',
        name: 'Leonardo Loza',
        role: 'Candidato a Senador',
        region: 'Cochabamba',
        image: '/Fondos/Candidatos1x1/LeonardoLoza.png', // Necesitarás crear esta imagen
        bio: 'Senador del MAS-IPSP en el periodo 2020-2025. Dirigente cocalero del trópico de Cochabamba, cercano a Evo Morales.'
      },
      {
        id: 'sen11',
        name: 'Hilarión Mamani Navarro',
        role: 'Candidato a Senador',
        region: 'Potosí',
        image: '/Fondos/Candidatos1x1/HilarionMamani.png', // Necesitarás crear esta imagen
        bio: 'Senador del MAS-IPSP en el periodo 2020-2025. Representante de Potosí con trayectoria en movimientos indígenas.'
      },
      {
        id: 'sen12',
        name: 'Andrónico Rodríguez Ledezma',
        role: 'Candidato a Senador',
        region: 'Cochabamba',
        image: '/Fondos/Candidatos1x1/Rodrigo.png', // Ya existe esta imagen
        bio: 'Senador del MAS-IPSP en el periodo 2020-2025. Joven líder sindical cocalero que ganó notoriedad durante la crisis política de 2019.'
      },
      {
        id: 'sen13',
        name: 'Virginia Velasco Condori',
        role: 'Candidata a Senadora',
        region: 'La Paz',
        image: '/Fondos/Candidatos1x1/VirginiaVelasco.png', // Necesitarás crear esta imagen
        bio: 'Senadora del MAS-IPSP en el periodo 2020-2025. Representante de La Paz con experiencia legislativa.'
      }
    ],
    
    // Diputados
    deputies: [
      {
        id: 'dep1',
        name: 'Omar Al Yabhat Yujra Santos',
        role: 'Candidato a Diputado - Presidencia de la Cámara',
        region: 'La Paz',
        image: '/Fondos/Candidatos1x1/OmarYujra.png', // Necesitarás crear esta imagen
        bio: 'Presidente de la Cámara de Diputados en el periodo 2020-2025. Representante del MAS-IPSP con experiencia legislativa.'
      },
      {
        id: 'dep2',
        name: 'Deisy Judith Choque Arnez',
        role: 'Candidata a Diputada - Primera Vicepresidencia',
        region: 'Cochabamba',
        image: '/Fondos/Candidatos1x1/DeisyChoque.png', // Necesitarás crear esta imagen
        bio: 'Primera Vicepresidenta de la Cámara de Diputados en el periodo 2020-2025. Representante del MAS-IPSP.'
      },
      {
        id: 'dep3',
        name: 'Delfor Germán Burgos Aguirre',
        role: 'Candidato a Diputado - Primera Secretaría',
        region: 'Santa Cruz',
        image: '/Fondos/Candidatos1x1/DelforBurgos.png', // Necesitarás crear esta imagen
        bio: 'Primer Secretario de la Cámara de Diputados en el periodo 2020-2025. Representante del MAS-IPSP.'
      },
      {
        id: 'dep4',
        name: 'Abad Farfán Mamani',
        role: 'Candidato a Diputado Uninominal',
        region: 'Potosí - C-37',
        image: '/Fondos/Candidatos1x1/AbadFarfan.png', // Necesitarás crear esta imagen
        bio: 'Diputado Uninominal del MAS-IPSP en el periodo 2020-2025. Representante de la circunscripción 37 de Potosí.'
      },
      {
        id: 'dep5',
        name: 'Abelardo Colque Vicente',
        role: 'Candidato a Diputado Plurinominal',
        region: 'Potosí',
        image: '/Fondos/Candidatos1x1/AbelardoColque.png', // Necesitarás crear esta imagen
        bio: 'Diputado Plurinominal del MAS-IPSP en el periodo 2020-2025. Representante del bloque renovador.'
      },
      {
        id: 'dep6',
        name: 'Adán Palacios Puma',
        role: 'Candidato a Diputado Uninominal',
        region: 'Chuquisaca - C-5',
        image: '/Fondos/Candidatos1x1/AdanPalacios.png', // Necesitarás crear esta imagen
        bio: 'Diputado Uninominal del MAS-IPSP en el periodo 2020-2025. Representante de la circunscripción 5 de Chuquisaca.'
      }
    ]
  },
  
  // Bloques internos del partido
  internalBlocks: [
    {
      id: 'renovador',
      name: 'Bloque Renovador',
      description: 'Facción que defiende la gestión de Luis Arce y busca la renovación de liderazgo dentro del partido.',
      leader: 'Luis Arce',
      image: '/Fondos/Candidatos1x1/LuisArce.png' // Necesitarás crear esta imagen
    },
    {
      id: 'radical',
      name: 'Bloque Radical',
      description: 'Facción que defiende el liderazgo de Evo Morales y busca su reelección. También conocida como "Ala Evista".',
      leader: 'Evo Morales',
      image: '/Fondos/Candidatos1x1/EvoMorales.png' // Necesitarás crear esta imagen
    },
    {
      id: 'androniquista',
      name: 'Facción Androniquista',
      description: 'Grupo emergente que apoya el liderazgo de Andrónico Rodríguez como figura de renovación generacional.',
      leader: 'Andrónico Rodríguez',
      image: '/Fondos/Candidatos1x1/Rodrigo.png' // Ya existe esta imagen
    }
  ],
  
  // Organizaciones aliadas y de base
  allies: [
    {
      id: 'pacto-unidad',
      name: 'Pacto de Unidad',
      description: 'La principal alianza política y social que respalda al MAS-IPSP.',
      image: '/Fondos/Organizaciones/PactoUnidad.png', // Necesitarás crear esta imagen
      members: [
        {
          name: 'Confederación Sindical Única de Trabajadores Campesinos de Bolivia (CSUTCB)',
          role: 'Organización fundadora',
          image: '/Fondos/Organizaciones/CSUTCB.png' // Necesitarás crear esta imagen
        },
        {
          name: 'Confederación Sindical de Comunidades Interculturales de Bolivia (CSCB)',
          role: 'Organización fundadora',
          image: '/Fondos/Organizaciones/CSCB.png' // Necesitarás crear esta imagen
        },
        {
          name: 'Federación Bartolina Sisa',
          role: 'Organización fundadora',
          image: '/Fondos/Organizaciones/BartoliniaSisa.png' // Necesitarás crear esta imagen
        },
        {
          name: 'Confederación Nacional de Maestros Rurales',
          role: 'Organización miembro',
          image: '/Fondos/Organizaciones/MaestrosRurales.png' // Necesitarás crear esta imagen
        },
        {
          name: 'Confederación Nacional de Ríos y Jubilados',
          role: 'Organización miembro',
          image: '/Fondos/Organizaciones/RiosJubilados.png' // Necesitarás crear esta imagen
        },
        {
          name: 'Confederación Nacional de la Micro y Pequeña Empresa (Conamype)',
          role: 'Organización miembro',
          image: '/Fondos/Organizaciones/Conamype.png' // Necesitarás crear esta imagen
        },
        {
          name: 'Federación Nacional de Cooperativas Mineras (Fencomin)',
          role: 'Organización miembro',
          image: '/Fondos/Organizaciones/Fencomin.png' // Necesitarás crear esta imagen
        },
        {
          name: 'Centro Regional de Trabajadores (COR) de El Alto',
          role: 'Organización miembro',
          image: '/Fondos/Organizaciones/CORElAlto.png' // Necesitarás crear esta imagen
        }
      ]
    },
    {
      id: 'apoyo-externo',
      name: 'Organizaciones de Apoyo Externo',
      description: 'Organizaciones que apoyan al gobierno pero no son miembros directos del MAS-IPSP.',
      members: [
        {
          name: 'Central Obrera Boliviana (COB)',
          role: 'Organización de apoyo',
          image: '/Fondos/Organizaciones/COB.png' // Necesitarás crear esta imagen
        },
        {
          name: 'Consejo Nacional de Ayllus y Markas de Qullasuyu (CONAMAQ)',
          role: 'Organización de apoyo',
          image: '/Fondos/Organizaciones/CONAMAQ.png' // Necesitarás crear esta imagen
        }
      ]
    }
  ],
  
  // Contenido multimedia
  mediaContent: {
    videos: [
      { 
        title: 'Presentación de Candidatos', 
        url: '/videos/mas-presentacion.mp4', 
        thumbnail: '/images/thumbnails/mas-video1.jpg',
        duration: 185
      },
      { 
        title: 'Historia del MAS-IPSP', 
        url: '/videos/mas-historia.mp4', 
        thumbnail: '/images/thumbnails/mas-video2.jpg',
        duration: 240
      }
    ],
    audio: [
      { 
        title: 'Entrevista a Eduardo Del Castillo', 
        url: '/audio/mas-entrevista-delcastillo.mp3', 
        duration: 320
      },
      { 
        title: 'Discurso de Milán Berna', 
        url: '/audio/mas-discurso-berna.mp3', 
        duration: 180
      }
    ],
    documents: [
      {
        title: 'Programa de Gobierno 2025-2030',
        url: '/documents/mas-programa-gobierno.pdf',
        pages: 45
      },
      {
        title: 'Historia y Principios del MAS-IPSP',
        url: '/documents/mas-historia-principios.pdf',
        pages: 28
      }
    ]
  }
};

// Exportar el árbol político del MAS
export default MASTree;