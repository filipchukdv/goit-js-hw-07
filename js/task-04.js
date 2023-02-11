const counterValue = document.querySelector('#value');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');

function onClickDecrement() {
  const newValue = Number(counterValue.textContent) - 1;
  counterValue.textContent = newValue;
}

function onClickIncrement() {
  const newValue = Number(counterValue.textContent) + 1;
  counterValue.textContent = newValue;
}

decrementBtnRef.addEventListener('click', onClickDecrement);
incrementBtnRef.addEventListener('click', onClickIncrement);
