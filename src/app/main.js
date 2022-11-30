// DOM API
const div = document.querySelector("#app"); // find <div id="app"></div>
const h1 = document.createElement('h1'); // create <h1></h1>
h1.textContent = 'Hello World!' // add text 'Hello World!' into h1 => <h1>Hello World!</h1>
div.append(h1); // insert <h1>Hello World!</h1> into <div id="app"></div> => <div id="app"><h1>Hello World!</h1></div>
div.onclick = function onDivClick(event) {
  const element = event.target;
  element.classList.toggle('red');
}
const button = document.querySelector('button');
button.addEventListener('click', function onBuy(evt) {
  const button = evt.target;
  // get parent of button:
  const parent = button.parentElement;
  console.log('parentElement', parent);
  const products = document.querySelector('#products');
  console.log('products', parent);
  // remove it (simulate buy operation)
  // sent REST API call to backend server to make an order
  products.removeChild(parent);
}, false);
