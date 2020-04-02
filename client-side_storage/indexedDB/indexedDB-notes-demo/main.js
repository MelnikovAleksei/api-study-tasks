const notes = document.querySelector('ul');
const form = document.querySelector('form');
const inputTittle = document.querySelector('#tittle');
const inputText = document.querySelector('#body');
const createNewNoteBtn = document.querySelector('#createNewNoteButton');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

function addNote() {
    let li = document.createElement('li');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let delBtn = document.createElement('button');

    h3.textContent = inputTittle.value;
    p.textContent = inputText.value;
    delBtn.textContent = 'Delete';
    delBtn.setAttribute('id', 'deleteNoteButton');

    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(delBtn);
    notes.appendChild(li);
    delBtn.addEventListener('click', () => {
        notes.removeChild(li);
    });
}

createNewNoteBtn.addEventListener('click', () => {
    addNote()
    inputTittle.value = '';
    inputText.value = '';
})