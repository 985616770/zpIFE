var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(11, 299);
ctx.lineTo(601, 299);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(11, 10);
ctx.lineTo(11, 300);
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 102, 2, 0, Math.PI * 2, true);
ctx.fill();