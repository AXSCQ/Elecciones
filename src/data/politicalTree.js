// Datos para el árbol político de Bolivia 2025
export const politicalTree = {
  // Frente de izquierda - MAS
  mas: {
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
        image: '/Fondos/Candidatos1x1/DavidAnez.png'
      },
      {
        name: 'Evo Morales',
        role: 'Presidente del partido de 1997 a 2024',
        image: '/Fondos/Candidatos1x1/EvoMorales.png'
      },
      {
        name: 'Grover García',
        role: 'Presidente desde mayo de 2024',
        image: '/Fondos/Candidatos1x1/GroverGarcia.png'
      }
    ],
    candidates: {
      president: {
        id: 'pres1',
        name: 'Eduardo Del Castillo',
        role: 'Candidato Presidencial',
        image: '/Fondos/Candidatos1x1/DelCastillo.png',
        bio: 'Abogado y político, ex Ministro de Gobierno de Bolivia (2020-2025). Fue designado candidato presidencial del MAS por el Pacto de Unidad para las elecciones de 2025.',
        vicepresident: {
          id: 'vpres1',
          name: 'Milán Berna',
          role: 'Candidato Vicepresidencial',
          image: '/Fondos/Candidatos1x1/MilanBerna.png',
          bio: 'Dirigente de la Confederación Sindical Única de Trabajadores Campesinos de Bolivia (CSUTCB). Fue designado candidato a la vicepresidencia por el Pacto de Unidad junto a Eduardo Del Castillo el 16 de mayo de 2025.'
        }
      },
      senators: [
        {
          id: 'sen1',
          name: 'Pedro Benjamín Vargas Fernández',
          role: 'Candidato a Senador',
          region: 'Chuquisaca, Potosí',
          image: '/Fondos/Candidatos1x1/PedroVargas.png',
          bio: 'Senador del MAS-IPSP en el periodo 2020-2025. Representante con experiencia en las regiones de Chuquisaca y Potosí.'
        },
        {
          id: 'sen2',
          name: 'Felix Ajpi Ajpi',
          role: 'Candidato a Senador',
          region: 'La Paz',
          image: '/Fondos/Candidatos1x1/FelixAjpi.png',
          bio: 'Senador del MAS-IPSP en el periodo 2020-2025. Representante de La Paz con enfoque en derechos indígenas.'
        },
        {
          id: 'sen3',
          name: 'Gladys Valentina Alarcón Farfán',
          role: 'Candidata a Senadora',
          region: 'Tarija',
          image: '/Fondos/Candidatos1x1/GladysAlarcon.png',
          bio: 'Senadora del MAS-IPSP en el periodo 2020-2025. Representante de Tarija con trayectoria en movimientos sociales.'
        },
        {
          id: 'sen4',
          name: 'María Patricia Arce Guzmán',
          role: 'Candidata a Senadora',
          region: 'Cochabamba',
          image: '/Fondos/Candidatos1x1/PatriciaArce.png',
          bio: 'Senadora del MAS-IPSP en el periodo 2020-2025. Ex-alcaldesa de Vinto, conocida por su resistencia durante la crisis política de 2019.'
        },
        {
          id: 'sen5',
          name: 'Ana María Castillo Negrette',
          role: 'Candidata a Senadora',
          region: 'Potosí',
          image: '/Fondos/Candidatos1x1/AnaCastillo.png',
          bio: 'Senadora del MAS-IPSP en el periodo 2020-2025. Representante de Potosí con enfoque en desarrollo regional.'
        },
        {
          id: 'sen10',
          name: 'Leonardo Loza',
          role: 'Candidato a Senador',
          region: 'Cochabamba',
          image: '/Fondos/Candidatos1x1/LeonardoLoza.png',
          bio: 'Senador del MAS-IPSP en el periodo 2020-2025. Dirigente cocalero del trópico de Cochabamba, cercano a Evo Morales.'
        },
        {
          id: 'sen12',
          name: 'Andrónico Rodríguez Ledezma',
          role: 'Candidato a Senador',
          region: 'Cochabamba',
          image: '/Fondos/Candidatos1x1/Rodrigo.png',
          bio: 'Senador del MAS-IPSP en el periodo 2020-2025. Joven líder sindical cocalero que ganó notoriedad durante la crisis política de 2019.'
        }
      ],
      deputies: [
        {
          id: 'dep1',
          name: 'Omar Al Yabhat Yujra Santos',
          role: 'Candidato a Diputado - Presidencia de la Cámara',
          region: 'La Paz',
          image: '/Fondos/Candidatos1x1/OmarYujra.png',
          bio: 'Presidente de la Cámara de Diputados en el periodo 2020-2025. Representante del MAS-IPSP con experiencia legislativa.'
        },
        {
          id: 'dep2',
          name: 'Deisy Judith Choque Arnez',
          role: 'Candidata a Diputada - Primera Vicepresidencia',
          region: 'Cochabamba',
          image: '/Fondos/Candidatos1x1/DeisyChoque.png',
          bio: 'Primera Vicepresidenta de la Cámara de Diputados en el periodo 2020-2025. Representante del MAS-IPSP.'
        },
        {
          id: 'dep3',
          name: 'Delfor Germán Burgos Aguirre',
          role: 'Candidato a Diputado - Primera Secretaría',
          region: 'Santa Cruz',
          image: '/Fondos/Candidatos1x1/DelforBurgos.png',
          bio: 'Primer Secretario de la Cámara de Diputados en el periodo 2020-2025. Representante del MAS-IPSP.'
        },
        {
          id: 'dep4',
          name: 'Abad Farfán Mamani',
          role: 'Candidato a Diputado Uninominal',
          region: 'Potosí - C-37',
          image: '/Fondos/Candidatos1x1/AbadFarfan.png',
          bio: 'Diputado Uninominal del MAS-IPSP en el periodo 2020-2025. Representante de la circunscripción 37 de Potosí.'
        },
        {
          id: 'dep5',
          name: 'Abelardo Colque Vicente',
          role: 'Candidato a Diputado Plurinominal',
          region: 'Potosí',
          image: '/Fondos/Candidatos1x1/AbelardoColque.png',
          bio: 'Diputado Plurinominal del MAS-IPSP en el periodo 2020-2025. Representante del bloque renovador.'
        }
      ]
    },
    allies: ['renovador', 'radical', 'pacto-unidad'],
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
  },
  
  // Comunidad Ciudadana
  cc: {
    id: 'cc',
    name: 'Comunidad Ciudadana',
    shortName: 'CC',
    color: '#db2b1f',
    candidates: {
      president: {
        id: '2',
        name: 'Luis Arce',
        role: 'Candidato Presidencial',
        image: '/Fondos/Candidatos1x1/Castillo.png',
        bio: 'Economista y político boliviano que sirvió como Ministro de Economía durante gran parte de los gobiernos de Evo Morales.',
        vicepresident: {
          id: 'vp2',
          name: 'Carlos Mesa',
          role: 'Candidato Vicepresidencial',
          image: '/Fondos/Candidatos1x1/placeholder-profile.jpg',
          bio: 'Ex-presidente de Bolivia y periodista con amplia trayectoria política.'
        }
      },
      senators: [
        {
          id: 'sen3',
          name: 'Cecilia Requena',
          role: 'Candidata a Senadora',
          region: 'La Paz',
          image: '/Fondos/Candidatos1x1/placeholder-profile.jpg',
          bio: 'Ambientalista y activista política con enfoque en desarrollo sostenible.'
        }
      ],
      deputies: [
        {
          id: 'dep3',
          name: 'Carlos Alarcón',
          role: 'Candidato a Diputado',
          region: 'La Paz',
          image: '/Fondos/Candidatos1x1/placeholder-profile.jpg',
          bio: 'Abogado constitucionalista con experiencia en reformas legales.'
        }
      ]
    },
    allies: ['creemos'],
    mediaContent: {
      videos: [
        { 
          title: 'Propuesta Económica', 
          url: '/videos/cc-economia.mp4', 
          thumbnail: '/images/thumbnails/cc-video1.jpg',
          duration: 210
        }
      ]
    }
  },
  
  // LIBRE 21
  libre: {
    id: 'libre',
    name: 'LIBRE 21',
    shortName: 'LIBRE',
    color: '#ffa500',
    candidates: {
      president: {
        id: '3',
        name: 'Jorge Quiroga',
        role: 'Candidato Presidencial',
        image: '/Fondos/Candidatos1x1/TUTO-Photoroom.png',
        bio: 'Político y empresario boliviano que fue presidente de Bolivia entre 2001 y 2002.',
        vicepresident: {
          id: 'vp3',
          name: 'María René Liévana',
          role: 'Candidata Vicepresidencial',
          image: '/Fondos/Candidatos1x1/placeholder-profile.jpg',
          bio: 'Abogada especializada en derecho constitucional y derechos humanos.'
        }
      },
      senators: [
        {
          id: 'sen4',
          name: 'Oscar Ortiz',
          role: 'Candidato a Senador',
          region: 'Santa Cruz',
          image: '/Fondos/Candidatos1x1/placeholder-profile.jpg',
          bio: 'Ex-senador con trayectoria en fiscalización y transparencia.'
        }
      ],
      deputies: [
        {
          id: 'dep4',
          name: 'Tomasa Yarhui',
          role: 'Candidata a Diputada',
          region: 'Chuquisaca',
          image: '/Fondos/Candidatos1x1/placeholder-profile.jpg',
          bio: 'Abogada indígena con experiencia en derechos de pueblos originarios.'
        }
      ]
    },
    allies: ['un'],
    mediaContent: {
      videos: [
        { 
          title: 'Plan de Gobierno', 
          url: '/videos/libre-plan.mp4', 
          thumbnail: '/images/thumbnails/libre-video1.jpg',
          duration: 245
        }
      ]
    }
  },
  
  // Unidad Nacional
  un: {
    id: 'un',
    name: 'Unidad Nacional',
    shortName: 'UN',
    color: '#1bbc9d',
    candidates: {
      president: {
        id: '4',
        name: 'Samuel Doria Medina',
        role: 'Candidato Presidencial',
        image: '/Fondos/Candidatos1x1/Samuel.png',
        bio: 'Empresario y político boliviano, fundador del partido Unidad Nacional.',
        vicepresident: {
          id: 'vp4',
          name: 'Soledad Chapetón',
          role: 'Candidata Vicepresidencial',
          image: '/Fondos/Candidatos1x1/placeholder-profile.jpg',
          bio: 'Ex-alcaldesa de El Alto con experiencia en gestión municipal y desarrollo urbano.'
        }
      },
      senators: [
        {
          id: 'sen5',
          name: 'Alejandro Zapata',
          role: 'Candidato a Senador',
          region: 'La Paz',
          image: '/Fondos/Candidatos1x1/placeholder-profile.jpg',
          bio: 'Economista con experiencia en desarrollo productivo y empresarial.'
        }
      ],
      deputies: [
        {
          id: 'dep5',
          name: 'Jimena Costa',
          role: 'Candidata a Diputada',
          region: 'La Paz',
          image: '/Fondos/Candidatos1x1/placeholder-profile.jpg',
          bio: 'Politóloga y analista con enfoque en institucionalidad democrática.'
        }
      ]
    },
    allies: ['libre'],
    mediaContent: {
      videos: [
        { 
          title: 'Propuesta de Empleo', 
          url: '/videos/un-empleo.mp4', 
          thumbnail: '/images/thumbnails/un-video1.jpg',
          duration: 198
        }
      ]
    }
  },
  
  // Alianzas y grupos adicionales
  'mas-ipsp': {
    id: 'mas-ipsp',
    name: 'MAS-IPSP Ala Sindical',
    shortName: 'MAS-IPSP',
    color: '#2a3d99',
    parent: 'mas',
    candidates: {
      deputies: [
        {
          id: 'dep6',
          name: 'Segundina Flores',
          role: 'Candidata a Diputada',
          region: 'La Paz',
          image: '/Fondos/Candidatos1x1/placeholder-profile.jpg',
          bio: 'Dirigente de las Bartolinas con amplia trayectoria en movimientos sociales indígenas.'
        }
      ]
    }
  },
  
  'mas-evo': {
    id: 'mas-evo',
    name: 'MAS Ala Evista',
    shortName: 'MAS-EVO',
    color: '#3045b5',
    parent: 'mas',
    candidates: {
      senators: [
        {
          id: 'sen6',
          name: 'Leonardo Loza',
          role: 'Candidato a Senador',
          region: 'Cochabamba',
          image: '/Fondos/Candidatos1x1/placeholder-profile.jpg',
          bio: 'Dirigente cocalero del trópico de Cochabamba, cercano a Evo Morales.'
        }
      ]
    }
  },
  
  'creemos': {
    id: 'creemos',
    name: 'Creemos',
    shortName: 'CREEMOS',
    color: '#e63946',
    allies: ['cc'],
    candidates: {
      senators: [
        {
          id: 'sen7',
          name: 'Luis Fernando Camacho',
          role: 'Candidato a Senador',
          region: 'Santa Cruz',
          image: '/Fondos/Candidatos1x1/placeholder-profile.jpg',
          bio: 'Empresario y político cruceño, ex-candidato presidencial.'
        }
      ]
    }
  }
};

// Relaciones entre partidos y alianzas
export const politicalRelations = [
  { source: 'mas', target: 'renovador', type: 'alliance', strength: 'moderate' },
  { source: 'mas', target: 'radical', type: 'alliance', strength: 'moderate' },
  { source: 'mas', target: 'pacto-unidad', type: 'alliance', strength: 'strong' },
  { source: 'cc', target: 'creemos', type: 'alliance', strength: 'moderate' },
  { source: 'libre', target: 'un', type: 'alliance', strength: 'strong' },
  { source: 'mas', target: 'cc', type: 'opposition', strength: 'strong' },
  { source: 'mas', target: 'libre', type: 'opposition', strength: 'strong' },
  { source: 'mas', target: 'un', type: 'opposition', strength: 'strong' },
  { source: 'cc', target: 'libre', type: 'cooperation', strength: 'weak' },
  { source: 'cc', target: 'un', type: 'cooperation', strength: 'weak' },
  { source: 'renovador', target: 'radical', type: 'opposition', strength: 'moderate' }
];
