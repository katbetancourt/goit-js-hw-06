const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listItems = [];

for (let i = 0; i < ingredients.length; i++) {
  const newItem = document.createElement("li");
  newItem.innerText = ingredients[i];
  newItem.classList.add("item");
  listItems.push(newItem);
}

listItems.forEach((li) => {
  document.querySelector("ul").append(li);
});
