const createBtn = document.querySelector('button[data-create]');
const destroyeBtn = document.querySelector('button[data-destroy]');
const amountInput = createBtn.previousElementSibling;
const content = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  createBoxes(amountInput.value);
});

destroyeBtn.addEventListener('click', destroyeBoxes);

function createBoxes(amount) {
  let fragment = document.createDocumentFragment();
  for (let i = 0, width = 30; i < amount; i++, width += 10) {
      let newDiv = document.createElement('div');
      newDiv.style.backgroundColor = getRandomHexColor();
      newDiv.style.width = `${width}px`;
      newDiv.style.height = `${width}px`;
      fragment.appendChild(newDiv);
  }
  content.append(fragment);
}

function destroyeBoxes() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
