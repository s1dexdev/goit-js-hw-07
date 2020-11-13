const findElement = elements => {
    const arr = [...elements];
    
    return arr.map(item => {
        console.log(`Категория: ${item.querySelector('h2').textContent}`);
        console.log(`Количество элементов: ${item.querySelector('ul').children.length}`);
    });
};

const listItemsRef = document.querySelectorAll('.item');

console.log(`В списке ${listItemsRef.length} категории`);

findElement(listItemsRef);