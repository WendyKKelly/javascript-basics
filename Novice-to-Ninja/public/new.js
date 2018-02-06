

const view = {
  timer: document.querySelector('#timer strong'),
  // render(target,content,attributes) {
  //     for(const key in attributes) {
  //       target.setAttribute(key, attributes[key]);
  //     }
  //     target.innerHTML = content;
//}
};
function square(x) {
  return x * x;
}

function hypoteneuse(a, b) {

return Math.sqrt(square(a) + square(b));


}
  view.timer.addEventListener('click', () => hypoteneuse(3,4), false);
  //view.render(view.timer, hypoteneuse(5,90));


// view.r
