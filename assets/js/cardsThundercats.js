let cardsThundercats = [
  {
    id: 0,
    name: 'Cheetara',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/thundercats/cheetara.jpg?raw=true'
  },
  {
    id: 1,
    name: 'Escamoso',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/thundercats/escamoso.jpg?raw=true'
  },
  {
    id: 2,
    name: 'Lion',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/thundercats/lion.jpg?raw=true'
  },
  {
    id: 3,
    name: 'Mumm-Ra',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/thundercats/mumm-ra.jpg?raw=true'
  },
  {
    id: 4,
    name: 'Panthro',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/thundercats/panthro.jpg?raw=true'
  },
  {
    id: 5,
    name: 'Simiano',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/thundercats/simiano.jpg?raw=true'
  },
  {
    id: 6,
    name: 'Snarf',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/thundercats/snarf.jpg?raw=true'
  },
  {
    id: 7,
    name: 'Tygra',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/thundercats/tygra.jpg?raw=true'
  },
  {
    id: 8,
    name: 'Willy Kat',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/thundercats/willy-kat.jpg?raw=true'
  },
  {
    id: 9,
    name: 'Willy Kit',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/thundercats/willy-kit.jpg?raw=true'
  },
];

cardsThundercats = [...cardsThundercats, ...cardsThundercats];

cardsThundercats.sort(() => 0.5 - Math.random());
