const usersInput = document.querySelector("#name-input");
const usersOutput = document.querySelector("#name-output");

usersInput.addEventListener("input", (event) => {
  const target = event.currentTarget;

  usersOutput.textContent = target.value === "" ? "Anonymous" : target.value;
});
