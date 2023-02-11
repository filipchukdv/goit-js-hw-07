function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const currentColorRef = document.querySelector('span.color');
const changeColorButtonRef = document.querySelector('button.change-color');
const bodyRef = document.querySelector('body');

const onButtonClick = () => {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  currentColorRef.textContent = color;
};

changeColorButtonRef.addEventListener('click', onButtonClick);
