let cardsHeMan = [
  {
    id: 0,
    name: 'Aquático',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/he-man/aquatico.jpg?raw=true'
  },
  {
    id: 1,
    name: 'Esqueleto',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/he-man/esqueleto.jpg?raw=true'
  },
  {
    id: 2,
    name: 'Feiticeira',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/he-man/feiticeira.jpg?raw=true'
  },
  {
    id: 3,
    name: 'Gato Guerreiro',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/he-man/gato-guerreiro.jpg?raw=true'
  },
  {
    id: 4,
    name: 'Gorpo',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/he-man/gorpo.jpg?raw=true'
  },
  {
    id: 5,
    name: 'He-Man',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/he-man/he-man.jpg?raw=true'
  },
  {
    id: 6,
    name: 'Maligna',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/he-man/maligna.jpg?raw=true'
  },
  {
    id: 7,
    name: 'Mentor',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/he-man/mentor.jpg?raw=true'
  },
  {
    id: 8,
    name: 'She-Ra',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/he-man/she-ra.jpg?raw=true'
  },
  {
    id: 9,
    name: 'Teela',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/he-man/teela.jpg?raw=true'
  },
];

cardsHeMan = [...cardsHeMan, ...cardsHeMan];

cardsHeMan.sort(() => 0.5 - Math.random());
