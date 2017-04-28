const Pansey = {
  character: {
    shadowName: ``,
    player: ``,
    chronicle: ``,
    virtue: ``,
    vice: ``,
    concept: ``,
    path: ``,
    order: ``,
    legacy: ``,
  },
  attributes: {
    presence: {
      Label: 'Presence',
      type: { power: true, social: true },
      ranks: 3,
      description: '',
      link: '',
    },
    manipulation: {
      Label: 'Manipulation',
      type: { finesse: true, social: true },
      ranks: 3,
      description: '',
      link: '',
    },
    composure: {
      Label: 'Composure',
      type: { resistance: true, social: true },
      ranks: 3,
      description: '',
      link: '',
    },
    strength: {
      Label: 'Strength',
      type: { power: true, physical: true },
      ranks: 3,
      description: '',
      link: '',
    },
    dexterity: {
      Label: 'Dexterity',
      type: { finesse: true, physical: true },
      ranks: 3,
      description: '',
      link: '',
    },
    stamina: {
      Label: 'Stamina',
      type: { resistance: true, physical: true },
      ranks: 3,
      description: '',
      link: '',
    },
    intelligence: {
      Label: 'Intelligence',
      type: { power: true, mental: true },
      ranks: 3,
      description: '',
      link: '',
    },
    wits: {
      Label: 'Wits',
      type: { finesse: true, mental: true },
      ranks: 3,
      description: '',
      link: '',
    },
    resolve: {
      Label: 'Resolve',
      type: { resistance: true, mental: true },
      ranks: 3,
      description: '',
      link: '',
    },
  },
  skills: {
    mental: { // TODO: Rote Skill (-3 unskilled)
      academics: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      computer: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      crafts: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      investigation: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      medicine: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      occult: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      politics: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      science: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
    },
    physical: { // TODO: Rote Skill (-1 unskilled)
      athletics: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      brawl: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      drive: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      firearms: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      larceny: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      stealth: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      survival: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      weaponry: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
    },
    social: { // TODO: Rote Skill (-1 unskilled)
      animalKen: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      empathy: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      expression: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      intimidation: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      persuasion: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      socialize: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      streetwise: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
      subterfuge: {
        ranks: 3,
        specialties: [],
        description: '',
        link: '',
      },
    },
  },
  otherTraits: {
    arcana: {
      death: {
        restricted: true,
        affinity: false,
        ranks: 0,
      },
      fate: {
        restricted: false,
        affinity: false,
        ranks: 1,
      },
      forces: {
        restricted: false,
        affinity: true,
        ranks: 2,
      },
      life: {
        restricted: false,
        affinity: false,
        ranks: 1,
      },
      matter: {
        restricted: false,
        affinity: false,
        ranks: 1,
      },
      mind: {
        restricted: false,
        affinity: false,
        ranks: 1,
      },
      prime: {
        restricted: false,
        affinity: true,
        ranks: 2,
      },
      spirit: {
        restricted: false,
        affinity: false,
        ranks: 2,
      },
      space: {
        restricted: false,
        affinity: false,
        ranks: 1,
      },
      time: {
        restricted: false,
        affinity: false,
        ranks: 1,
      },
    },


    merits: {
      familiar: {
        ranks: 3,
        description: '',
        link: '',
      },
      profession: {
        ranks: 3,
        description: '',
        link: '',
      },
      vision: {
        ranks: 1,
        description: '',
        link: '',
      },
    },

    flaws: {},
    protectiveSpells: {},

    willpower: {
      value: 1,
      max: 4,
    },
    gnosis: {
      value: 2,
    },
    mana: {
      value: 0,
      max: 20,
    },
    wisdom: {
      value: 7,
    },
    health: {
      value: 7,
      max: 7,
    },


  },
  rotes: [
    {
      label: 'Influence Electricity',
      level: 1,
      arcana: 'forces',
      pool: () => {},
      link: 'http://wodcodex.com/wiki/Spells,_Forces_(1st_Edition)',
    },
  ],
};

export default Pansey;
