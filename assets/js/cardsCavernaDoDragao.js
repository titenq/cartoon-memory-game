let cardsCavernaDoDragao = [
  {
    id: 0,
    name: 'Bobby',
    src: '../../assets/img/caverna-do-dragao/bobby.jpg'
  },
  {
    id: 1,
    name: 'Diana',
    src: '../../assets/img/caverna-do-dragao/diana.jpg'
  },
  {
    id: 2,
    name: 'Eric',
    src: '../../assets/img/caverna-do-dragao/eric.jpg'
  },
  {
    id: 3,
    name: 'Hank',
    src: '../../assets/img/caverna-do-dragao/hank.jpg'
  },
  {
    id: 4,
    name: 'Mestre dos Magos',
    src: '../../assets/img/caverna-do-dragao/mestre-dos-magos.jpg'
  },
  {
    id: 5,
    name: 'Presto',
    src: '../../assets/img/caverna-do-dragao/presto.jpg'
  },
  {
    id: 6,
    name: 'Sheila',
    src: '../../assets/img/caverna-do-dragao/sheila.jpg'
  },
  {
    id: 7,
    name: 'Tiamat',
    src: '../../assets/img/caverna-do-dragao/tiamat.jpg'
  },
  {
    id: 8,
    name: 'Uni',
    src: '../../assets/img/caverna-do-dragao/uni.jpg'
  },
  {
    id: 9,
    name: 'Vingador',
    src: '../../assets/img/caverna-do-dragao/vingador.jpg'
  },
];

cardsCavernaDoDragao = [...cardsCavernaDoDragao, ...cardsCavernaDoDragao];

cardsCavernaDoDragao.sort(() => 0.5 - Math.random());
