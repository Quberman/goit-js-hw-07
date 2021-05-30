const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const newList = ingredients.reduce((str, item) => str + `<li>${item}</li>`,'');

ingredientsEl.innerHTML = newList;

console.log(ingredientsEl);

