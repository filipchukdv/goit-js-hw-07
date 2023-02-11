const formRef = document.querySelector('form.login-form');


const onFormSubmit = e => {
  e.preventDefault();
  const formElements = e.currentTarget.elements;
  if (!(formElements.email.value && formElements.password.value)) {
    alert('Увага, всі поля повинні бути заповнен');
    return;
  }
  const result = {};
  result[formElements.email.name] = formElements.email.value;
  result[formElements.password.name] = formElements.password.value;
  console.log(result);
  e.currentTarget.reset();
};


formRef.addEventListener('submit', onFormSubmit);
