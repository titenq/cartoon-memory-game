const setCavernaDoDragao = document.getElementById('setCavernaDoDragao');
const setHeMan = document.getElementById('setHeMan');
const setThundercats = document.getElementById('setThundercats');
const captions = document.querySelectorAll('.caption');

setCavernaDoDragao.addEventListener('mouseenter', (event) => showSet(event));
setCavernaDoDragao.addEventListener('mouseleave', () => hideSet());

setHeMan.addEventListener('mouseenter', (event) => showSet(event));
setHeMan.addEventListener('mouseleave', () => hideSet());

setThundercats.addEventListener('mouseenter', (event) => showSet(event));
setThundercats.addEventListener('mouseleave', () => hideSet());

const showSet = (event) => {
  const element = event.target.dataset.set;
  const imgs = document.querySelectorAll(element);

  imgs.forEach((img, index) => {
    img.style.transform = `translateX(${-200 + (index * 100)}px)`;
    img.style.zIndex = 10;
  });

  captions.forEach(caption => caption.style.display = 'none');
};

const hideSet = () => {
  const element = event.target.dataset.set;
  const imgs = document.querySelectorAll(element);

  imgs.forEach(img => {
    img.style.transform = `translateX(0)`;
    img.style.zIndex = 0;
  });

  captions.forEach(caption => caption.style.display = 'block');
};
