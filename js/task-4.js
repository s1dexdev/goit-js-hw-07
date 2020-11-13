const counterValue = document.querySelector('#value');
let count = Number(counterValue.textContent);

const increment = () => {
    count += 1;
    counterValue.textContent = count;
};

const decrement = () => {
    count -= 1;
    counterValue.textContent = count;
};


const btnDecrementRef = document.querySelector('#counter button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('#counter button[data-action="increment"]');


btnDecrementRef.addEventListener('click', () => decrement());

btnIncrementRef.addEventListener('click', () => increment());