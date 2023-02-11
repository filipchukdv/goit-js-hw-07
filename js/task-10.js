function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector('div#boxes');
const buttonCreateRef = document.querySelector('button[data-create=""]');
const buttonDestroyRef = document.querySelector('button[data-destroy=""]');
const inputRef = document.querySelector('input');

function createBoxes(amount) {
  let size = 30;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxes.push(box);
    size += 10;
  }
  boxesRef.innerHTML = '';
  boxesRef.append(...boxes);
}

function onClick() {
  createBoxes(inputRef.value);
}

buttonCreateRef.addEventListener('click', onClick);
buttonDestroyRef.addEventListener('click', () => (boxesRef.innerHTML = ''));
