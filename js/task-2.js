const createListItems = array => {
    
    const listItems = array.map(elem => {
        const item = document.createElement('li');
        item.textContent = elem;
        
        return item;
    });
    
    return listItems;
};

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients');

listRef.append(...createListItems(ingredients));


