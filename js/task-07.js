
const inputRef = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");
// Первоначальное значение инпута

const size = inputRef.value;
console.log(size);

const handleInput = () => {
  inputText.style.fontSize = `${inputRef.value}px`;
};

inputRef.addEventListener("input", handleInput);