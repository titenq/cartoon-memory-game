let cardsCavernaDoDragao = [
  {
    id: 0,
    name: 'Bobby',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/caverna-do-dragao/bobby.jpg?raw=true'
  },
  {
    id: 1,
    name: 'Diana',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/caverna-do-dragao/diana.jpg?raw=true'
  },
  {
    id: 2,
    name: 'Eric',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/caverna-do-dragao/eric.jpg?raw=true'
  },
  {
    id: 3,
    name: 'Hank',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/caverna-do-dragao/hank.jpg?raw=true'
  },
  {
    id: 4,
    name: 'Mestre dos Magos',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/caverna-do-dragao/mestre-dos-magos.jpg?raw=true'
  },
  {
    id: 5,
    name: 'Presto',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/caverna-do-dragao/presto.jpg?raw=true'
  },
  {
    id: 6,
    name: 'Sheila',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/caverna-do-dragao/sheila.jpg?raw=true'
  },
  {
    id: 7,
    name: 'Tiamat',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/caverna-do-dragao/tiamat.jpg?raw=true'
  },
  {
    id: 8,
    name: 'Uni',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/caverna-do-dragao/uni.jpg?raw=true'
  },
  {
    id: 9,
    name: 'Vingador',
    src: 'https://titenq.github.io/cartoon-memory-game/assets/img/caverna-do-dragao/vingador.jpg?raw=true'
  },
];

cardsCavernaDoDragao = [...cardsCavernaDoDragao, ...cardsCavernaDoDragao];

cardsCavernaDoDragao.sort(() => 0.5 - Math.random());
