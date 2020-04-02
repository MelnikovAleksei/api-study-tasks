const canvas = document.querySelector('canvas');
const width = canvas.width = window.innerWidth;
const heght = canvas.height = window.innerHeight;
const clearButton = document.querySelector('.clearButton');
const cancelButton = document.querySelector('.cancelButton');
const returnButton = document.querySelector('.returnButton');

let paragraph = document.querySelector('span');

let output = document.querySelector('.output');
let colorPicker = document.querySelector('.penColor');
let sizePicker = document.querySelector('input[type="range"]');
let backgroundColor = document.querySelector('.backgroundColor')
let curX, curY;
let pressed = false;

let curXYArray = [];

let ctxSave = [];
let rect = canvas.getBoundingClientRect();

const ctx = canvas.getContext('2d');
ctx.fillStyle = backgroundColor.value;
ctx.fillRect(0, 0, width, heght);

function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

canvas.onmousemove = function(e) {
    curX = e.clientX - rect.left;
    curY = e.clientY - rect.top;
    paragraph.textContent = 'x: ' + curX + ' | ' + 'y: ' + curY;
    /*if (pressed) {
        curXYArray.push('x:' + curX + 'y:' + curY + 'bgCol:' + backgroundColor.value + 'sP:' + sizePicker.value);
    }*/
}

function draw() {
    if (pressed) {
        ctx.fillStyle = colorPicker.value;
        ctx.beginPath();
        ctx.arc(curX, curY, sizePicker.value, degToRad(0), degToRad(360), false);
        ctx.fill();
        //curXYArray.push('x:' + curX + 'y:' + curY + 'bgCol:' + backgroundColor.value + 'sP:' + sizePicker.value);
    }
    requestAnimationFrame(draw);
}

function clearCanvas() {
    ctx.fillStyle = backgroundColor.value;
    ctx.fillRect(0, 0, width, heght);
}
/*
function cancelAction() {
    for (let i = 0; i < curXYArray.length; i++) {
        const element = curXYArray[i];
        let x = element.slice(element.indexOf('x:') + 2, element.indexOf('y:'));
        let y = element.slice(element.indexOf('y:') + 2, element.indexOf('bgCol'));
        let size = element.slice(element.indexOf('sP:') + 3, element.length);
        let bgCol = element.slice(element.indexOf('bgCol:') + 6, element.indexOf('s'));
        
        size += 2
        ctx.fillStyle = bgCol;
        ctx.beginPath();
        ctx.arc(x, y, size, degToRad(0), degToRad(360), false);
        ctx.fill();      
    }
    
    curXYArray = [];
}

function returnAction() {
    
}
*/
sizePicker.addEventListener('input', () => {
    output.textContent = sizePicker.value;
})

canvas.addEventListener('mousedown', () => {
    pressed = true;
    //curXYArray = []

    paragraph.textContent = 'x: ' + curX + ' | ' + 'y: ' + curY + ' | ' + 'Pressed: ' + pressed;
})

canvas.addEventListener('mouseup', () => {
    pressed = false;
    paragraph.textContent = 'x: ' + curX + ' | ' + 'y: ' + curY + ' | ' + 'Pressed: ' + pressed;
})


backgroundColor.addEventListener('input', () => {
    ctx.fillStyle = backgroundColor.value;
    ctx.fillRect(0, 0, width, heght);
})

clearButton.addEventListener('click', clearCanvas);

//cancelButton.addEventListener('click', cancelAction);

//returnButton.addEventListener('click', returnAction)


draw()