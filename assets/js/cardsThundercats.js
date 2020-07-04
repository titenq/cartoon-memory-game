let cardsThundercats = [
  {
    id: 0,
    name: 'Cheetara',
    src: '../assets/img/thundercats/cheetara.jpg'
  },
  {
    id: 1,
    name: 'Escamoso',
    src: '../assets/img/thundercats/escamoso.jpg'
  },
  {
    id: 2,
    name: 'Lion',
    src: '../assets/img/thundercats/lion.jpg'
  },
  {
    id: 3,
    name: 'Mumm-Ra',
    src: '../assets/img/thundercats/mumm-ra.jpg'
  },
  {
    id: 4,
    name: 'Panthro',
    src: '../assets/img/thundercats/panthro.jpg'
  },
  {
    id: 5,
    name: 'Simiano',
    src: '../assets/img/thundercats/simiano.jpg'
  },
  {
    id: 6,
    name: 'Snarf',
    src: '../assets/img/thundercats/snarf.jpg'
  },
  {
    id: 7,
    name: 'Tygra',
    src: '../assets/img/thundercats/tygra.jpg'
  },
  {
    id: 8,
    name: 'Willy Kat',
    src: '../assets/img/thundercats/willy-kat.jpg'
  },
  {
    id: 9,
    name: 'Willy Kit',
    src: '../assets/img/thundercats/willy-kit.jpg'
  },
];

cardsThundercats = [...cardsThundercats, ...cardsThundercats];

cardsThundercats.sort(() => 0.5 - Math.random());
