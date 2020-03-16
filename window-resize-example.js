// grab reference

const div = document.querySelector('div');

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

// styles

div.style.width = windowWidth + 'px' ;
div.style.height = windowHeight + 'px';

// add event

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    div.style.width = windowWidth + 'px';
    div.style.height = windowHeight + 'px';
})