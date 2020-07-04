document.oncontextmenu = () => false;
const cardContainer = document.getElementById('cardContainer');
const set = window.location.search.split('&')[0].split('=')[1];
const folder = window.location.search.split('&')[1].split('=')[1]
const gameOverContainer = document.getElementById('gameOverContainer');
const spanRounds = document.getElementById('spanRounds');

const generateCards = set => {
  switch (set) {
    case 'cardsCavernaDoDragao':
      set = cardsCavernaDoDragao;
      break;

    case 'cardsHeMan':
      set = cardsHeMan;
      break;

    case 'cardsThundercats':
      set = cardsThundercats;
      break;
  
    default:
      break;
  }

  set.forEach(cardObject => {
    cardContainer.innerHTML += `
    <div class="card">
      <div class="card-flip">
        <div class="card-front">
          <img class="card-front-img" src=${cardObject.src} alt=${cardObject.name} draggable="false">
        </div>
        <div class="card-back" data-id="${cardObject.id}">
          <img class="card-back-img" src="./assets/img/${folder}/back-card.jpg" draggable="false">
        </div>
      </div>
    </div>
    `;
  });
};

generateCards(set);

const cards = document.querySelectorAll('.card-back');
const flips = document.querySelectorAll('.card-flip');
const cardsImg = document.querySelectorAll('.card-front-img');

let click = 0;
let click1Data;
let click2Data;
let index1;
let index2;
let score = 0;
let rounds = 0;

const game = () => {
  cards.forEach((card, index) => card.addEventListener('click', () => {
    flips[index].style.transform = 'rotateY(0deg)';
    click++;
    
    if (click === 1) {
      click1Data = card.dataset.id;
      index1 = index;
    } 
    
    if (click === 2) {
      rounds++;
      cardContainer.style.pointerEvents = 'none';
      click2Data = card.dataset.id;
      index2 = index;

      setTimeout(() => {
        if (click1Data === click2Data) {
          score++;
          cardsImg[index1].style.filter = 'grayscale(100%)';
          cardsImg[index2].style.filter = 'grayscale(100%)';
          click = 0;
          cardContainer.style.pointerEvents = 'all';

          if (score === 10) {
            setTimeout(() => {
              gameOver();
            }, 1500);
          }
        } else {
          flips[index1].style.transform = 'rotateY(180deg)';
          flips[index2].style.transform = 'rotateY(180deg)';
          click = 0;
          cardContainer.style.pointerEvents = 'all';
        }
      }, 1000);
    }
  }));
};

const gameOver = () => {
  cardContainer.style.display = 'none';
  gameOverContainer.style.display = 'flex';
  spanRounds.innerText = rounds;
};

game();
