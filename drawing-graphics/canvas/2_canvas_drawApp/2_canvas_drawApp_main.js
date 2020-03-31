const canvas = document.querySelector('canvas');
const width = canvas.width = window.innerWidth;
const heght = canvas.height = window.innerHeight;
const clearButton = document.querySelector('button');
let paragraph = document.querySelector('span');

let output = document.querySelector('.output');
let colorPicker = document.querySelector('input[type="color"]');
let sizePicker = document.querySelector('input[type="range"]');

let curX, curY;
let pressed = false;

let rect = canvas.getBoundingClientRect();

const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, width, heght);

function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

function getMouseCoordinate(e) {
    curX = e.clientX - rect.left;
    curY = e.clientY - rect.top;
    paragraph.textContent = 'x: ' + curX + ' | ' + 'y: ' + curY;
}

function draw() {
    if (pressed) {
        ctx.fillStyle = colorPicker.value;
        ctx.beginPath();
        ctx.arc(curX, curY, sizePicker.value, degToRad(0), degToRad(360), false);
        ctx.fill();
    }
    requestAnimationFrame(draw);
}

function clearCanvas() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, heght);
}

sizePicker.addEventListener('input', () => {
    output.textContent = sizePicker.value;
})

canvas.addEventListener('mousedown', () => {
    pressed = true;
    paragraph.textContent = 'x: ' + curX + ' | ' + 'y: ' + curY + ' | ' + 'Pressed: ' + pressed;
})

canvas.addEventListener('mouseup', () => {
    pressed = false;
    paragraph.textContent = 'x: ' + curX + ' | ' + 'y: ' + curY + ' | ' + 'Pressed: ' + pressed;
})

canvas.addEventListener('mousemove', getMouseCoordinate);

clearButton.addEventListener('click', clearCanvas);

draw()