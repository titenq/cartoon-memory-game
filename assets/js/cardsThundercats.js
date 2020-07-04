let cardsThundercats = [
  {
    id: 0,
    name: 'Cheetara',
    src: './cartoon-memory-game/assets/img/thundercats/cheetara.jpg'
  },
  {
    id: 1,
    name: 'Escamoso',
    src: './cartoon-memory-game/assets/thundercats/escamoso.jpg'
  },
  {
    id: 2,
    name: 'Lion',
    src: './cartoon-memory-game/assets/thundercats/lion.jpg'
  },
  {
    id: 3,
    name: 'Mumm-Ra',
    src: './cartoon-memory-game/assets/thundercats/mumm-ra.jpg'
  },
  {
    id: 4,
    name: 'Panthro',
    src: './cartoon-memory-game/assets/thundercats/panthro.jpg'
  },
  {
    id: 5,
    name: 'Simiano',
    src: './cartoon-memory-game/assets/thundercats/simiano.jpg'
  },
  {
    id: 6,
    name: 'Snarf',
    src: './cartoon-memory-game/assets/thundercats/snarf.jpg'
  },
  {
    id: 7,
    name: 'Tygra',
    src: './cartoon-memory-game/assets/thundercats/tygra.jpg'
  },
  {
    id: 8,
    name: 'Willy Kat',
    src: './cartoon-memory-game/assets/thundercats/willy-kat.jpg'
  },
  {
    id: 9,
    name: 'Willy Kit',
    src: './cartoon-memory-game/assets/thundercats/willy-kit.jpg'
  },
];

cardsThundercats = [...cardsThundercats, ...cardsThundercats];

cardsThundercats.sort(() => 0.5 - Math.random());
