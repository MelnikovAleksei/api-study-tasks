const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const heigth = canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, width, heigth)
/*
ctx.fillStyle = 'rgb(250, 0, 0)';
ctx.fillRect(50, 50, 100, 100);
ctx.fillStyle = 'rgb(0, 250, 0)';
ctx.fillRect(125, 125, 100, 100);
ctx.fillStyle = 'rgb(0, 0, 150)';
ctx.fillRect(200, 200, 100, 100);

ctx.strokeStyle = 'rgb(250, 0, 50)';
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 300, 300);
*/

function degreeToRadiant(degrees) {
    return degrees * Math.PI / 180
}

// triangle

ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
let triangleHeigth = 50 * Math.tan(degreeToRadiant(60));
ctx.lineTo(100, 50 + triangleHeigth);
ctx.lineTo(50, 50);
ctx.fill();


// arc

ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.arc(150, 106, 50, degreeToRadiant(0), degreeToRadiant(360), false);
ctx.fill();

ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(200, 106, 50, degreeToRadiant(-45), degreeToRadiant(45), true);
ctx.lineTo(200, 106);
ctx.fill();

//text

ctx.strokeStyle = 'white';
ctx.lineWidth = 2;
ctx.font = '25px arial';
ctx.strokeText('Text', 200, 200);

ctx.fillStyle = 'red';
ctx.font = '25px arial';
ctx.fillText('Text', 200, 300);

//img

let img = new Image();

img.src = 'firefox.png';

img.addEventListener('load', () => {
    ctx.drawImage(img, 150, 350);
})
    