let cardsThundercats = [
  {
    id: 0,
    name: 'Cheetara',
    src: '../img/thundercats/cheetara.jpg'
  },
  {
    id: 1,
    name: 'Escamoso',
    src: '../img/thundercats/escamoso.jpg'
  },
  {
    id: 2,
    name: 'Lion',
    src: '../img/thundercats/lion.jpg'
  },
  {
    id: 3,
    name: 'Mumm-Ra',
    src: '../img/thundercats/mumm-ra.jpg'
  },
  {
    id: 4,
    name: 'Panthro',
    src: '../img/thundercats/panthro.jpg'
  },
  {
    id: 5,
    name: 'Simiano',
    src: '../img/thundercats/simiano.jpg'
  },
  {
    id: 6,
    name: 'Snarf',
    src: '../img/thundercats/snarf.jpg'
  },
  {
    id: 7,
    name: 'Tygra',
    src: '../img/thundercats/tygra.jpg'
  },
  {
    id: 8,
    name: 'Willy Kat',
    src: '../img/thundercats/willy-kat.jpg'
  },
  {
    id: 9,
    name: 'Willy Kit',
    src: '../img/thundercats/willy-kit.jpg'
  },
];

cardsThundercats = [...cardsThundercats, ...cardsThundercats];

cardsThundercats.sort(() => 0.5 - Math.random());
