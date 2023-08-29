const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const listElements = ingredients
  .map((item) => {
    let newItem = document.createElement("li");
    newItem.textContent = item;
    list.append(newItem);
  })
  .join("");
