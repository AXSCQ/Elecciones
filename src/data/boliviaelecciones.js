// ELECCIONES 2020
// src/data/boliviaelecciones.js
export const boliviaelecciones = {
  periods: [
    {
      id: 'elecciones-2019',
      name: 'Elecciones Generales 2019',
      yearStart: '20 Oct 2019',
      yearEnd: '20 Oct 2019',
      description: 'Evo Morales busca un cuarto mandato. Se interrumpe el conteo rápido (TREP), lo que genera sospechas de fraude. El Tribunal Supremo Electoral (TSE) detiene la transmisión de resultados preliminares cuando el conteo alcanzaba el 83% y mostraba una posible segunda vuelta entre Morales y Carlos Mesa. Al reanudarse, la tendencia cambia drásticamente a favor de Morales.',
      color: '#f59e0b', // naranja
      type: 'election',
      events: [
        {
          date: '20 Oct 2019',
          title: 'Interrupción del TREP',
          description: 'Se detiene el sistema de conteo rápido sin explicación clara, lo que genera desconfianza entre la población y observadores internacionales.',
          type: 'crisis',
        },
        {
          date: '20 Oct 2019',
          title: 'Proclamación de victoria',
          description: 'Evo Morales se declara ganador en primera vuelta, mientras la oposición denuncia fraude electoral.',
          type: 'election',
        }
      ],
      president: 'Evo Morales',
      videoUrl: 'https://www.youtube.com/embed/nBHCSVObrOA',
      imageUrl: '/images/Crisispolitica.jpeg'
    },
    {
      id: 'protestas-fraude',
      name: 'Protestas por Fraude',
      yearStart: '21 Oct 2019',
      yearEnd: 'Nov 2019',
      description: 'Oposición y sectores sociales movilizados exigen la anulación de las elecciones. Las protestas se intensifican en todo el país, con enfrentamientos entre manifestantes y fuerzas del orden. La OEA inicia una auditoría al proceso electoral mientras la tensión social aumenta día a día.',
      color: '#ef4444', // rojo
      type: 'conflict',
      events: [
        {
          date: '21 Oct 2019',
          title: 'Movilizaciones nacionales',
          description: 'Denuncias de fraude generan bloqueos, cabildos y enfrentamientos en las principales ciudades del país.',
          type: 'conflict',
        },
        {
          date: '25 Oct 2019',
          title: 'Cabildo en La Paz',
          description: 'Miles de ciudadanos se reúnen exigiendo nuevas elecciones y la renuncia de los vocales del TSE.',
          type: 'conflict',
        },
      ],
      videoUrl: 'https://www.youtube.com/embed/YhuaNR9F8lc',
      imageUrl: '/images/Enfrentamientos.jpg'
    },
    {
      id: 'renuncia-evo',
      name: 'Renuncia de Evo Morales',
      yearStart: '10 Nov 2019',
      yearEnd: '10 Nov 2019',
      description: 'Presionado por el informe de la OEA que identifica irregularidades graves en las elecciones y tras la "sugerencia" de las Fuerzas Armadas, Evo Morales presenta su renuncia a la presidencia. Junto a él dimiten el vicepresidente Álvaro García Linera y varios ministros. Morales denuncia un golpe de Estado y se exilia primero en México y luego en Argentina.',
      color: '#6366f1', // violeta
      type: 'transition',
      events: [
        {
          date: '10 Nov 2019',
          title: 'Informe de la OEA',
          description: 'La OEA publica un informe preliminar que identifica irregularidades graves en las elecciones, recomendando un nuevo proceso electoral.',
          type: 'crisis',
        },
        {
          date: '10 Nov 2019',
          title: 'Sugerencia de las FFAA',
          description: 'El comandante del Ejército, Williams Kaliman, "sugiere" a Morales que renuncie para pacificar el país.',
          type: 'transition',
        },
        {
          date: '10 Nov 2019',
          title: 'Anuncio de renuncia',
          description: 'En un mensaje televisado, Evo Morales anuncia su renuncia para "evitar más violencia" en el país.',
          type: 'transition',
        },
      ],
      videoUrl: 'https://www.youtube.com/embed/tc14TB9lvRQ',
      imageUrl: '/images/renunciaEVO.jpg'
    },
    {
      id: 'gobierno-anez',
      name: 'Gobierno Interino de Jeanine Áñez',
      yearStart: '12 Nov 2019',
      yearEnd: '8 Nov 2020',
      description: 'Tras un vacío de poder y en medio de una crisis institucional, la senadora Jeanine Áñez asume la presidencia interina de Bolivia con el mandato principal de convocar a nuevas elecciones. Su gobierno enfrenta protestas de sectores afines al MAS, la pandemia de COVID-19 y acusaciones de persecución política contra opositores.',
      color: '#10b981', // verde
      type: 'transition',
      events: [
        {
          date: '12 Nov 2019',
          title: 'Asunción de Áñez',
          description: 'Jeanine Áñez se proclama presidenta interina en una sesión legislativa sin quórum del MAS, apoyándose en una interpretación del orden sucesorio constitucional.',
          type: 'transition',
        },
        {
          date: 'Nov-Dic 2019',
          title: 'Protestas y represión',
          description: 'Enfrentamientos entre manifestantes pro-Morales y fuerzas de seguridad dejan más de 30 muertos en Sacaba y Senkata.',
          type: 'conflict',
        },
        {
          date: 'Ene 2020',
          title: 'Convocatoria a elecciones',
          description: 'El gobierno interino convoca oficialmente a nuevas elecciones generales para mayo de 2020.',
          type: 'election',
        },
        {
          date: 'Mar 2020',
          title: 'Pandemia COVID-19',
          description: 'La llegada del coronavirus a Bolivia obliga a postergar las elecciones y declarar cuarentena nacional.',
          type: 'crisis',
        }
      ],
      president: 'Jeanine Áñez',
      videoUrl: 'https://www.youtube.com/embed/u57MiXtfkW8',
      imageUrl: '/images/gobtransitorio.jpg'
    },
    {
      id: 'postergacion-electoral',
      name: 'Postergación Electoral',
      yearStart: 'Ene - Jul 2020',
      yearEnd: 'Jul 2020',
      description: 'La pandemia de COVID-19 obliga a postergar las elecciones varias veces.',
      color: '#eab308', // amarillo
      type: 'reform',
      events: [
        {
          date: 'Ene 2020',
          title: 'Primera postergación',
          description: 'Se anuncia el aplazamiento de las elecciones debido a la pandemia.',
          type: 'crisis',
        },
        {
          date: 'Mar 2020',
          title: 'Segunda postergación',
          description: 'La situación sanitaria obliga a un nuevo aplazamiento.',
          type: 'crisis',
        },
        {
          date: 'Jul 2020',
          title: 'Tercera postergación',
          description: 'La pandemia persiste y se anuncia un nuevo aplazamiento.',
          type: 'crisis',
        }
      ],
    },
    {
      id: 'elecciones-2020',
      name: 'Nuevas Elecciones',
      yearStart: '18 Oct 2020',
      yearEnd: '18 Oct 2020',
      description: 'Tras varios aplazamientos debido a la pandemia, se celebran nuevas elecciones generales con amplia observación internacional. El proceso electoral se desarrolla con normalidad y alta participación ciudadana, siendo reconocido por la comunidad internacional como transparente y legítimo.',
      color: '#8b5cf6', // púrpura
      type: 'election',
      events: [
        {
          date: '18 Oct 2020',
          title: 'Jornada electoral pacífica',
          description: 'Millones de bolivianos acuden a las urnas en un proceso ordenado y con estrictas medidas sanitarias por la pandemia.',
          type: 'election',
        },
        {
          date: '18 Oct 2020',
          title: 'Victoria del MAS',
          description: 'Luis Arce, candidato del MAS y exministro de Economía de Evo Morales, gana en primera vuelta con más del 55% de los votos.',
          type: 'election',
        },
        {
          date: '19 Oct 2020',
          title: 'Reconocimiento internacional',
          description: 'Observadores internacionales y gobiernos de la región reconocen rápidamente la victoria de Luis Arce.',
          type: 'election',
        }
      ],
      president: 'Luis Arce',
      videoUrl: 'https://www.youtube.com/embed/5TML1TT9VsI',
      imageUrl: '/images/Covid19Bo.jpg'
    },
    {
      id: 'gobierno-arce',
      name: 'Gobierno de Luis Arce',
      yearStart: '8 Nov 2020',
      yearEnd: 'Actualidad',
      description: 'Luis Arce asume la presidencia con el desafío de unificar el país, enfrentar la crisis económica agravada por la pandemia y reconstruir las instituciones democráticas. Su gobierno enfrenta la tensión entre mantener su propia identidad política y la influencia del expresidente Evo Morales dentro del MAS.',
      color: '#3b82f6', // azul
      type: 'reform',
      events: [
        {
          date: '8 Nov 2020',
          title: 'Toma de posesión',
          description: 'Luis Arce jura como presidente constitucional de Bolivia en una ceremonia con presencia internacional.',
          type: 'transition',
        },
        {
          date: '9 Nov 2020',
          title: 'Retorno de Evo Morales',
          description: 'El expresidente regresa a Bolivia desde Argentina tras casi un año de exilio, con una caravana multitudinaria desde la frontera.',
          type: 'transition',
        },
        {
          date: 'Dic 2020',
          title: 'Medidas económicas',
          description: 'El gobierno implementa el Bono Contra el Hambre y otras medidas para paliar la crisis económica derivada de la pandemia.',
          type: 'reform',
        },
        {
          date: 'Mar 2021',
          title: 'Detención de Jeanine Áñez',
          description: 'La expresidenta interina es arrestada acusada de terrorismo, sedición y conspiración por los eventos de 2019.',
          type: 'conflict',
        },
        {
          date: '2022-2023',
          title: 'Tensiones internas en el MAS',
          description: 'Crecen las diferencias entre los sectores leales a Luis Arce y aquellos que responden a Evo Morales.',
          type: 'conflict',
        }
      ],
      president: 'Luis Arce',
      videoUrl: 'https://www.youtube.com/embed/nYe9QjnC-GU',
      imageUrl: '/images/gobtransitorio.jpg'
    }
  ]
};
