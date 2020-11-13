const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', (event) => {    
    const isInputValidation = inputRef.value.length == event.target.dataset.length
        ? true
        : false;

    if (isInputValidation) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
});
