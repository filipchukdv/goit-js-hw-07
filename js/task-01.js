const categoriesRef = document.querySelector('ul#categories');
const itemsRef = categories.querySelectorAll('li.item');

console.log('Number of categories:' + categoriesRef.children.length);

itemsRef.forEach(element => {
  console.log('Category:' + element.children[0].textContent);
  console.log('Elements:' + element.children[1].children.length);
});
