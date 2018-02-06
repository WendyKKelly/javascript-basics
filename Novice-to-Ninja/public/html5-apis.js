// localStorage.setItem('name', 'Walter White');
// localStorage.getItem('name')
// localStorage.name = 'Heisenberg';
// console.log(localStorage.name);
// localStorage.removeItem('name')
// // or delete
// localStorage.clear();
// // example
// addEventListener('storage', (event) => {
// console.log(`The ${event.key} was updated from
// ➥ ${event.oldValue} to ${event.newValue} and saved in
// ${event.storageArea}`) }, false);
// localStorage.setItem('superman', JSON.stringify(hero);
// superman = JSON.parse(localStorage.getItem('superman'));

// geolopcatio
navigator.geolocation.getCurrentPosition(youAreHere);
function youAreHere (position) {
  console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
}

const worker = new Worker('task.js');
