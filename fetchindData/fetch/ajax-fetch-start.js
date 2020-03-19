let verseChoose = document.querySelector('select');
let poemDisplay = document.querySelector('pre');

verseChoose.onchange = function () {
    const verse = verseChoose.value;
    updateDisplay(verse)
}

function updateDisplay(verse) {
    verse = verse.replace(" ", "");
    verse = verse.toLowerCase();
    let url = verse + '.txt';

    fetch(url).then(function (response) {
        return response.text()
    }).then(function (text) {
        poemDisplay.textContent = text;
    })
}

updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';