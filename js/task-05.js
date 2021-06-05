
let inputEl = document.querySelector('#name-input');

inputEl.addEventListener('input', inputChange);

let outputEl = document.querySelector('#name-output');

function inputChange () {
    if (inputEl.value === '') {
        outputEl.textContent = 'незнакомец';

    }
    else {
        outputEl.textContent = inputEl.value;
    }
}





