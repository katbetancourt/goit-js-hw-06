// Obtener la lista ul#categories
const categoriesList = document.querySelector("#categories");

// Obtener todos los elementos li.item dentro de la lista
const categoryItems = categoriesList.querySelectorAll("li.item");

// Contar el número de categorías
const numberOfCategories = categoryItems.length;

// Mostrar el número de categorías en la consola
console.log(`Number of categories: ${numberOfCategories}`);

// Iterar a través de cada elemento li.item
categoryItems.forEach((categoryItem) => {
  // Obtener el título de la categoría (tag <h2>)
  const categoryTitle = categoryItem.querySelector("h2").textContent;

  // Obtener todos los elementos li dentro de la categoría
  const categoryElements = categoryItem.querySelectorAll("ul li");

  // Contar el número de elementos en la categoría
  const numberOfElements = categoryElements.length;

  // Mostrar el título y el número de elementos en la categoría en la consola
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${numberOfElements}`);
});
