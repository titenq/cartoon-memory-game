let cardsHeMan = [
  {
    id: 0,
    name: 'Aquático',
    src: './cartoon-memory-game/assets/img/he-man/aquatico.jpg'
  },
  {
    id: 1,
    name: 'Esqueleto',
    src: './cartoon-memory-game/assets/img/he-man/esqueleto.jpg'
  },
  {
    id: 2,
    name: 'Feiticeira',
    src: './cartoon-memory-game/assets/img/he-man/feiticeira.jpg'
  },
  {
    id: 3,
    name: 'Gato Guerreiro',
    src: './cartoon-memory-game/assets/img/he-man/gato-guerreiro.jpg'
  },
  {
    id: 4,
    name: 'Gorpo',
    src: './cartoon-memory-game/assets/img/he-man/gorpo.jpg'
  },
  {
    id: 5,
    name: 'He-Man',
    src: './cartoon-memory-game/assets/img/he-man/he-man.jpg'
  },
  {
    id: 6,
    name: 'Maligna',
    src: './cartoon-memory-game/assets/img/he-man/maligna.jpg'
  },
  {
    id: 7,
    name: 'Mentor',
    src: './cartoon-memory-game/assets/img/he-man/mentor.jpg'
  },
  {
    id: 8,
    name: 'She-Ra',
    src: './cartoon-memory-game/assets/img/he-man/she-ra.jpg'
  },
  {
    id: 9,
    name: 'Teela',
    src: './cartoon-memory-game/assets/img/he-man/teela.jpg'
  },
];

cardsHeMan = [...cardsHeMan, ...cardsHeMan];

cardsHeMan.sort(() => 0.5 - Math.random());
