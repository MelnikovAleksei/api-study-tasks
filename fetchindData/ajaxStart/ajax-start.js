let verseChoose = document.querySelector('select');
let poemDisplay = document.querySelector('pre');

function updateDisplay(verseChoose) {
    let url = verseChoose.value.replace(' ', '').toLowerCase() + '.txt';
    let request = new XMLHttpRequest();
    
    request.open('get', url)
    request.responseType = 'text';
    request.onload = function () {
        poemDisplay.textContent = request.response;
    }
    request.send();
}

verseChoose.addEventListener('onchange', updateDisplay);

updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';