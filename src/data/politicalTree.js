// Datos para el árbol político de Bolivia 2025
export const politicalTree = {
  // Frente de izquierda - MAS
  mas: {
    id: 'mas',
    name: 'Movimiento al Socialismo',
    shortName: 'MAS',
    color: '#3045b5',
    candidates: {
      president: {
        id: '1',
        name: 'Eva Copa',
        role: 'Candidata Presidencial',
        image: '/Fondos/Candidatos1x1/Copa.png',
        bio: 'Eva Copa es una política boliviana que ganó protagonismo como presidenta del Senado durante la crisis política de 2019.',
        vicepresident: {
          id: 'vp1',
          name: 'Santos Ramírez',
          role: 'Candidato Vicepresidencial',
          image: '/Fondos/Candidatos1x1/placeholder-profile.jpg',
          bio: 'Ex-dirigente del MAS con experiencia en gestión pública y movimientos sociales.'
        }
      },
      senators: [
        {
          id: 'sen1',
          name: 'Andrónico Rodríguez',
          role: 'Candidato a Senador',
          region: 'Cochabamba',
          image: '/Fondos/Candidatos1x1/Rodrigo.png',
          bio: 'Joven líder sindical cocalero que ganó notoriedad durante la crisis política de 2019.'
        },
        {
          id: 'sen2',
          name: 'María Arequipa',
          role: 'Candidata a Senadora',
          region: 'La Paz',
          image: '/Fondos/Candidatos1x1/placeholder-profile.jpg',
          bio: 'Dirigente social con amplia trayectoria en movimientos indígenas.'
        }
      ],
      deputies: [
        {
          id: 'dep1',
          name: 'Carlos Romero',
          role: 'Candidato a Diputado',
          region: 'Santa Cruz',
          image: '/Fondos/Candidatos1x1/placeholder-profile.jpg',
          bio: 'Ex-ministro de Gobierno con amplia experiencia en gestión pública.'
        },
        {
          id: 'dep2',
          name: 'Juanita Ancieta',
          role: 'Candidata a Diputada',
          region: 'Cochabamba',
          image: '/Fondos/Candidatos1x1/placeholder-profile.jpg',
          bio: 'Dirigente de las Bartolinas con trayectoria en movimientos sociales.'
        }
      ]
    },
    allies: ['mas-ipsp', 'mas-evo'],
    mediaContent: {
      videos: [
        { 
          title: 'Presentación de Candidatos', 
          url: '/videos/mas-presentacion.mp4', 
          thumbnail: '/images/thumbnails/mas-video1.jpg',
          duration: 185
        }
      ],
      audio: [
        { 
          title: 'Entrevista Radial', 
          url: '/audio/mas-entrevista.mp3', 
          duration: 320
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
  { source: 'mas', target: 'mas-ipsp', type: 'alliance', strength: 'strong' },
  { source: 'mas', target: 'mas-evo', type: 'alliance', strength: 'moderate' },
  { source: 'cc', target: 'creemos', type: 'alliance', strength: 'moderate' },
  { source: 'libre', target: 'un', type: 'alliance', strength: 'strong' },
  { source: 'mas', target: 'cc', type: 'opposition', strength: 'strong' },
  { source: 'mas', target: 'libre', type: 'opposition', strength: 'strong' },
  { source: 'mas', target: 'un', type: 'opposition', strength: 'strong' },
  { source: 'cc', target: 'libre', type: 'cooperation', strength: 'weak' },
  { source: 'cc', target: 'un', type: 'cooperation', strength: 'weak' }
];
