const textRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

textRange.addEventListener("input", (event) => {
  const textSize = event.currentTarget.value;
  text.style.fontSize = `${textSize}px`;
});
