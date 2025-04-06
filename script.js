let canvas = document.querySelector('.line');
let transition = canvas.getContext("2d");

let maxWidth = window.innerWidth;

canvas.width = maxWidth;
canvas.height = 80;

transition.beginPath();
transition.moveTo(0, 80);
transition.lineTo(maxWidth, 0);
transition.lineTo(maxWidth, 80);
transition.lineTo(0, 80);
transition.closePath();
transition.fillStyle = '#BC002D';
transition.fill();

let canvas2 = document.querySelector('.line2');
let transition2 = canvas2.getContext("2d");


canvas2.width = maxWidth;
canvas2.height = 80;

transition2.beginPath();
transition2.moveTo(0, 80);
transition2.lineTo(maxWidth, 0);
transition2.lineTo(maxWidth, 80);
transition2.lineTo(0, 80);
transition2.closePath();
transition2.fillStyle = 'black';
transition2.fill();