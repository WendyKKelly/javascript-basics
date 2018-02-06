// if(window.Notification) {
// Notification.requestPermission();
// }
// const URL = 'wss://echo.websocket.org/';
// const outputDiv = document.getElementById('output');
// const form = document.forms[0];
// const connection = new WebSocket(URL);
// connection.addEventListener('open', () => {
// output('CONNECTED');
// }, false);
// function output(message) {
// const para = document.createElement('p');
// para.innerHTML = message;
// outputDiv.appendChild(para);
// }
// form.addEventListener('submit', message, false);
// function message(event) {
// event.preventDefault();
// const text = form.message.value;
// output(`SENT: ${text}`);
// connection.send(text);
// }
// connection.addEventListener('message', (event) => {
// output(`RESPONSE: ${event.data}`);
// }, false);
const canvasElement = document.getElementById('canvas');
const context = canvasElement.getContext('2d');
context.fillStyle = "#0000cc"; // a blue fill color
context.strokeStyle = "#ccc"; // a gray stroke color
context.lineWidth = 4;
context.fillRect(10,10,100,50);
context.strokeRect(10,100,100,50);
context.beginPath();
context.moveTo(130, 50);
context.lineTo(180, 50);
context.moveTo(155, 50);
context.lineTo(155, 90);
context.strokeStyle = '#c00';
context.lineWidth = 15;
context.stroke();
context.beginPath();
context.arc(200, 200, 30, 0, Math.PI * 2, false);
context.strokeStyle = '#ff0';
context.lineWidth = 4;
context.stroke();
context.fillStyle = '#0c0'; // a blue fill color
context.font = 'bold 26px sans-serif';
context.fillText('Hello', 20, 200);
