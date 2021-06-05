const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const newList = ingredients.forEach(indgredient => {
  let items = document.createElement("li");

  items.textContent = indgredient;
  ingredientsEl.append(items);
  
});

console.log(ingredientsEl);

