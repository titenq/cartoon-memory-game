let cardsHeMan = [
  {
    id: 0,
    name: 'Aquático',
    src: '../img/he-man/aquatico.jpg'
  },
  {
    id: 1,
    name: 'Esqueleto',
    src: '../img/he-man/esqueleto.jpg'
  },
  {
    id: 2,
    name: 'Feiticeira',
    src: '../img/he-man/feiticeira.jpg'
  },
  {
    id: 3,
    name: 'Gato Guerreiro',
    src: '../img/he-man/gato-guerreiro.jpg'
  },
  {
    id: 4,
    name: 'Gorpo',
    src: '../img/he-man/gorpo.jpg'
  },
  {
    id: 5,
    name: 'He-Man',
    src: '../img/he-man/he-man.jpg'
  },
  {
    id: 6,
    name: 'Maligna',
    src: '../img/he-man/maligna.jpg'
  },
  {
    id: 7,
    name: 'Mentor',
    src: '../img/he-man/mentor.jpg'
  },
  {
    id: 8,
    name: 'She-Ra',
    src: '../img/he-man/she-ra.jpg'
  },
  {
    id: 9,
    name: 'Teela',
    src: '../img/he-man/teela.jpg'
  },
];

cardsHeMan = [...cardsHeMan, ...cardsHeMan];

cardsHeMan.sort(() => 0.5 - Math.random());
