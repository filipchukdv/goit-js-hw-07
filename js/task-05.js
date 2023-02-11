const nameInputRef = document.querySelector('input#name-input');
const nameOutputRef = document.querySelector('span#name-output');

const onInputChange = event => {
  const input=event.target
  nameOutputRef.textContent = input.value;
  if (!input.value) nameOutputRef.textContent = 'Anonymous';
};

nameInputRef.addEventListener('input', onInputChange);
