const button = {
    incr: document.querySelector("[data-action = 'increment']"),
    decr: document.querySelector("[data-action = 'decrement']"),
    btnValue: document.querySelector('#value'),
};


let counterValue = 0;

const increment = () => {
    counterValue += 1;
    button.btnValue.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    button.btnValue.textContent = counterValue;
};

button.incr.addEventListener("click", increment);
button.decr.addEventListener("click", decrement);

