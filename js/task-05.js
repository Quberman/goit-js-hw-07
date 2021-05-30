
let inputEl = document.querySelector('#name-input');

inputEl.addEventListener('input', inputChange);

let outputEl = document.querySelector('#name-output');

function inputChange () {
    if (inputEl.value === '') {
        outputEl.innerHTML = 'незнакомец';

    }
    else {
        outputEl.innerHTML = inputEl.value;
    }
}




// let inputEl = document.querySelector('#name-input');
// inputEl.addEventListener('input', onInputChange);

// let outputEl = document.querySelector('#name-output');

// function onInputChange(event) {
//   inputEl = event.currentTarget.value;
//   console.log(inputEl);

//   inputEl !== ' ' ? (outputEl.innerText = inputEl.trim()) : 'незнакомец';
// }
