function createBoxes(amount) {  
    let sizeBox = 30;
    
    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement('div');

        box.style.backgroundColor = randomColorCreate();
        box.style.width = `${sizeBox}px`;
        box.style.height = `${sizeBox}px`;
        boxesRef.append(box);
        sizeBox += 10;
    }; 
};

function destroyBoxes() {
    const boxes = document.querySelectorAll('#boxes div');
    
    for (let i of boxes) {
        i.remove();
    };
};

function randomColorCreate() {
    const color = () => { return Math.floor(Math.random() * (255 - 0) + 1) };
    const rgb = `rgb(${color()}, ${color()}, ${color()})`;

    return rgb;
};

const inputRef = document.querySelector('#controls input')
const boxesRef = document.querySelector('#boxes');
const btnRenderRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');


btnRenderRef.addEventListener('click', () => {
    createBoxes(inputRef.value);
});

btnDestroyRef.addEventListener('click', () => {
    destroyBoxes();
});