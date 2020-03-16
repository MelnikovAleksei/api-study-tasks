// grab references

let list = document.querySelector('ul');
let input = document.querySelector('input');
let button = document.querySelector('button');

// func

function response() {
    let inputValue = input.value;
    input.value = '';
    
    let listItem = document.createElement('li');
    let spanItem = document.createElement('span');
    let buttonItem = document.createElement('button');

    listItem.appendChild(spanItem);
    listItem.appendChild(buttonItem);

    spanItem.textContent = inputValue;
    buttonItem.textContent = 'DELETE';

    list.appendChild(listItem);

    buttonItem.addEventListener('click', () => listItem.remove());

    input.focus();
}

// event

button.addEventListener('click', response);