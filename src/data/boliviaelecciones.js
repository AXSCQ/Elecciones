// ELECCIONES 2020
// src/data/boliviaelecciones.js
export const boliviaelecciones = {
  periods: [
    {
      id: 1,
      name: 'Elecciones Generales 2019',
      yearStart: '20 Oct 2019',
      yearEnd: '20 Oct 2019',
      description: 'Evo Morales busca un cuarto mandato. Se interrumpe el conteo rápido (TREP), lo que genera sospechas de fraude.',
      color: '#f59e0b', // naranja
      type: 'election',
      keyEvents: [
        {
          year: 2019,
          title: 'Interrupción del TREP',
          description: 'Se detiene el sistema de conteo rápido sin explicación clara, lo que genera desconfianza.',
          type: 'crisis',
        },
      ],
      president: 'Evo Morales'
    },
    {
      id: 2,
      name: 'Protestas por Fraude',
      yearStart: '21 Oct 2019',
      yearEnd: 'Nov 2019',
      description: 'Oposición y sectores sociales movilizados exigen la anulación de las elecciones.',
      color: '#ef4444', // rojo
      type: 'conflict',
      keyEvents: [
        {
          year: 2019,
          title: 'Movilizaciones nacionales',
          description: 'Denuncias de fraude generan bloqueos, cabildos y enfrentamientos.',
          type: 'conflict',
        },
      ],
    },
    {
      id: 3,
      name: 'Renuncia de Evo Morales',
      yearStart: '10 Nov 2019',
      yearEnd: '10 Nov 2019',
      description: 'Presionado por el informe de la OEA y las Fuerzas Armadas, Evo Morales renuncia y se exilia.',
      color: '#6366f1', // violeta
      type: 'transition',
      keyEvents: [
        {
          year: 2019,
          title: 'Renuncia presidencial',
          description: 'Evo Morales dimite tras fuertes presiones internas e internacionales.',
          type: 'transition',
        },
      ],
    },
    {
      id: 4,
      name: 'Gobierno Transitorio',
      yearStart: '12 Nov 2019',
      yearEnd: 'Dic 2019',
      description: 'Jeanine Áñez asume la presidencia con el compromiso de llamar a elecciones.',
      color: '#10b981', // verde
      type: 'transition',
      keyEvents: [
        {
          year: 2019,
          title: 'Áñez asume el poder',
          description: 'Sin ley de sucesión clara, Áñez asume como presidenta transitoria.',
          type: 'transition',
        },
      ],
      president: 'Jeanine Áñez'
    },
    {
      id: 5,
      name: 'Sacaba y Senkata',
      yearStart: 'Nov - Dic 2019',
      yearEnd: 'Dic 2019',
      description: 'Intervenciones militares contra manifestantes dejan decenas de muertos.',
      color: '#b91c1c', // rojo oscuro
      type: 'crisis',
      keyEvents: [
        {
          year: 2019,
          title: 'Masacre de Sacaba',
          description: 'Represión a movilizados en Cochabamba deja más de 10 muertos.',
          type: 'crisis',
        },
        {
          year: 2019,
          title: 'Masacre de Senkata',
          description: 'Militares disparan contra una multitud en El Alto, causando muertes.',
          type: 'crisis',
        },
      ],
    },
    {
      id: 6,
      name: 'Postergación Electoral',
      yearStart: 'Ene - Jul 2020',
      yearEnd: 'Jul 2020',
      description: 'La pandemia de COVID-19 obliga a postergar las elecciones varias veces.',
      color: '#eab308', // amarillo
      type: 'reform',
      keyEvents: [
        {
          year: 2020,
          title: 'Crisis sanitaria y política',
          description: 'Se producen tensiones entre el TSE y actores políticos por las fechas de votación.',
          type: 'crisis',
        },
      ],
    },
    {
      id: 7,
      name: 'Elecciones 2020',
      yearStart: '18 Oct 2020',
      yearEnd: '18 Oct 2020',
      description: 'Luis Arce gana con el 55.1% y el MAS retorna al poder democráticamente.',
      color: '#16a34a', // verde MAS
      type: 'election',
      keyEvents: [
        {
          year: 2020,
          title: 'Victoria de Arce',
          description: 'El MAS vuelve al poder con una victoria clara en primera vuelta.',
          type: 'election',
        },
      ],
      president: 'Luis Arce'
    },
  ]
};
