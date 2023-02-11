const sliderRef = document.querySelector('input#font-size-control');
const textRef = document.querySelector('span#text');

const onInputChange = e => {
  const range = e.target;
  textRef.style.fontSize = `${range.value}px`;
};

sliderRef.addEventListener('input', onInputChange);
