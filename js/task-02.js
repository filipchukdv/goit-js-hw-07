const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsRef = document.querySelector('ul#ingredients');

const ingredientMarkUp = ingredients.map(element => {
  const ingridient = document.createElement('li');
  ingridient.textContent = element;
  ingridient.classList.add('item');
  return ingridient;
});

ingredientsRef.append(...ingredientMarkUp);
