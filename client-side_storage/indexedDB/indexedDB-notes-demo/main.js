const notes = document.querySelector('ul');
const form = document.querySelector('form');
const inputTittle = document.querySelector('#tittle');
const inputText = document.querySelector('#body');
const createNewNoteBtn = document.querySelector('#createNewNoteButton');
const showHideFormBtn = document.querySelector('#showHideFormBtn');
let width = window.innerWidth;
let heigth = window.innerHeight;
let displayed = false;

function showHideForm() {
    if (displayed) {
        form.style.display = 'none';
        notes.style.opacity = 1;
        displayed = false
    } else {
        form.style.display = 'flex'
        inputTittle.focus();
        notes.style.opacity = 0.1;
        displayed = true;
    }
}

showHideFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showHideForm();
})

let db;

window.onload = function () {
    let request = window.indexedDB.open('notes_db', 1);

    request.onerror = function () {
        console.log('Error');
    }

    request.onsuccess = function () {
        console.log('Database opened successfully');
        
        db = request.result;

        displayData();
    }

    request.onupgradeneeded = function (e) {
        let db = e.target.result;

        let objectStore = db.createObjectStore('notes_os', {keyPath: 'id', autoIncrement: true});

        objectStore.createIndex('title', 'title', { unique: false });
        objectStore.createIndex('body', 'body', { unique: false });

        console.log('Database setup complete');
    }
};

form.addEventListener('submit', addData);

function addData(e) {

    e.preventDefault()

    showHideForm()

    let newItem = {
        tittle: inputTittle.value,
        body: inputText.value
    }

    let transaction = db.transaction(['notes_os'], 'readwrite');

    let objectStore = transaction.objectStore('notes_os');

    let request = objectStore.add(newItem);
    request.onsuccess = function () {
        inputTittle.value = '';
        inputText.value = '';
    }

    transaction.oncomplete = function () {
        console.log('Transaction completed: database modification finished.');

        displayData();
    }
    
    transaction.onerror = function () {
        console.log('Transaction not opened due to error');
    }
}

function displayData() {
    while (notes.firstChild) {
        notes.removeChild(notes.firstChild);
    }

    let objectStore = db.transaction('notes_os').objectStore('notes_os');
    objectStore.openCursor().onsuccess = function (e) {
        let cursor = e.target.result;

        if(cursor) {
            const li = document.createElement('li');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            const delBtn = document.createElement('button');

            li.appendChild(h3);
            li.appendChild(p);
            li.appendChild(delBtn);
            notes.appendChild(li);

            h3.textContent = cursor.value.tittle;
            p.textContent = cursor.value.body;

            li.setAttribute('data-note-id', cursor.value.id);

            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', deletNote);

            cursor.continue();
        } else {
            if (!notes.firstChild) {
                const h2 = document.createElement('h2');
                h2.textContent = 'No notes stored';
                notes.appendChild(h2);
            }
            console.log('Notes all displayed');
        }
    }
}

function deletNote(e) {
    let noteId = Number(e.target.parentNode.getAttribute('data-note-id'));

    let transaction = db.transaction(['notes_os'], 'readwrite');
    let objectsStore = transaction.objectStore('notes_os');
    let request = objectsStore.delete(noteId);

    transaction.oncomplete = function () {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);

        console.log('Note ' + noteId + ' deleted.');

        if (!notes.firstChild) {
            let h2 = document.createElement('h2');
                h2.textContent = 'No notes stored';
                notes.appendChild(h2); 
        }
    };
}