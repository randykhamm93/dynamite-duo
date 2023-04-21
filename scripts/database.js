const database = {
  heroes: [
    {
      id: 1,
      name: "Dynoguy",
      power: "Fire blasts"
    },
    {
      id: 2,
      name: "Hyperspeed",
      power: "Super speed"
    }
  ],
  villains: [
    {
      id: 1,
      name: "The Shadow",
      power: "Manipulates darkness"
    },
    {
      id: 2,
      name: "Venomous",
      power: "Poisonous touch"
    },
    {
      id: 3,
      name: "The Mindbender",
      power: "Mind control"
    },
    {
      id: 4,
      name: "Frostbite",
      power: "Freezes anything"
    }
  ]
}

export const getHeroes = () => {
  return database.heroes.map(hero => ({ ...hero }))
}

export const getVillains = () => {
  return database.villains.map(villain => ({...villain}))
}
