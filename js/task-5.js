const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', (event) => {
    nameOutputRef.textContent = event.target.value;

    if (nameOutputRef.textContent.length === 0) {
        nameOutputRef.textContent = 'незнакомец';
    };
});