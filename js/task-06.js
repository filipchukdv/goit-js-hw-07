const validationInputRef = document.querySelector('#validation-input');
const validationLength = validationInputRef.dataset.length;

const onInputBlur = event => {
  const input = event.target;
  if (input.value.length === Number(validationLength)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    return;
  }
  input.classList.remove('valid');
  input.classList.add('invalid');
};

validationInputRef.addEventListener('blur', onInputBlur);
