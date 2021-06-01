
const inputRef = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

const handleInput = () => {
  inputText.style.fontSize = `${inputRef.value}px`;
};

inputRef.addEventListener("input", handleInput);