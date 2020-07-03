const cardContainer = document.getElementById('cardContainer');

cardsCavernaDoDragao.forEach((cardObject) => {
  cardContainer.innerHTML += `
  <div class="card">
  <div class="card-flip">
  <div class="card-front">
  <img class="card-front-img" src=${cardObject.src} alt=${cardObject.name}>
  </div>
  <div class="card-back" data-id="${cardObject.id}">
  <img class="card-back-img" src="./assets/img/caverna-do-dragao/back-card.jpg" alt="Caverna do Dragão">
  </div>
  </div>
  </div>
  `;
});

const cards = document.querySelectorAll('.card-back');
const flips = document.querySelectorAll('.card-flip');
const cardsImg = document.querySelectorAll('.card-front-img');

let click = 0;
let click1Data;
let click2Data;
let index1;
let index2;
let score = 0;

const game = () => {
  cards.forEach((card, index) => card.addEventListener('click', () => {
    flips[index].style.transform = 'rotateY(0deg)';
    click++;
    
    if (click === 1) {
      click1Data = card.dataset.id;
      index1 = index;
    } 
    
    if (click === 2) {
      cardContainer.style.pointerEvents = 'none';
      click2Data = card.dataset.id;
      index2 = index;

      setTimeout(() => {
        if (click1Data === click2Data) {
          cardsImg[index1].style.filter = 'grayscale(100%)';
          cardsImg[index2].style.filter = 'grayscale(100%)';
          click = 0;
          score++;
          cardContainer.style.pointerEvents = 'all';
        } else {
          flips[index1].style.transform = 'rotateY(180deg)';
          flips[index2].style.transform = 'rotateY(180deg)';
          click = 0;
          cardContainer.style.pointerEvents = 'all';
        }
      }, 1000);
    }
  
    if (score === 10) {
      gameOver();
    }
  }));
};

const gameOver = () => {
  console.log('Você venceu!');
};

game();
