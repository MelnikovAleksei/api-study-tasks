let verseChoose = document.querySelector('select');
let poemDisplay = document.querySelector('pre');

verseChoose.onchange = function () {
    const verse = verseChoose.value;
    updateDisplay(verse)
}

function updateDisplay(verseChoose) {
    verse = verse.replace(" ", "");
    verse = verse.toLowerCase();
    let url = verse + '.txt';

    let request = new XMLHttpRequest();
    
    request.open('get', url)
    request.responseType = 'text';
    request.onload = function () {
        poemDisplay.textContent = request.response;
    }
    request.send();
}

updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';