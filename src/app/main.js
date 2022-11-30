// DOM API
const div = document.querySelector("#app"); // find <div id="app"></div>
const h1 = document.createElement('h1'); // create <h1></h1>
h1.textContent = 'Hello World!' // add text 'Hello World!' into h1 => <h1>Hello World!</h1>
div.append(h1); // insert <h1>Hello World!</h1> into <div id="app"></div> => <div id="app"><h1>Hello World!</h1></div>
div.onclick = function onDivClick(event) {
  const element = event.target;
  element.classList.toggle('red');
}
