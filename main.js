
const btn = document.getElementById('clickme');


const rainbow = ['1', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];
function change() {
document.body.style.background = rainbow[Math.floor(7*Math.random())];

}
btn.addEventListener('click', change);
