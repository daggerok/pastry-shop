//DOM API
const div = document.querySelector("#app");

// console.log(`
// <div id="app">
//   <ul>
//     <li>
//       <h2>1.</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eum ipsa numquam ut. Assumenda enim facilis hic id itaque nisi omnis, optio possimus quasi quo recusandae rem. Architecto, consequatur, reprehenderit?</p>
//       <section>
//         <span>section 1</span>
//       </section>
//     </li>
//     <li>
//       <h2>2.</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium assumenda consequatur cum deserunt doloribus eaque eius est exercitationem laborum laudantium non numquam omnis provident quam repellat reprehenderit saepe, voluptate!</p>
//       <section>
//         <span>section 2</span>
//       </section>
//     </li>
//     <li>
//       <h2>3.</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet at consequatur debitis dolor enim explicabo fugit illo incidunt inventore, laboriosam modi molestiae nam optio quibusdam ratione repellendus sequi unde.</p>
//       <section>
//         <span>section 3</span>
//       </section>
//     </li>
//   </ul>
// </div>
// `);

const createElementWithTextContent = ({ tag, classList, onClick, textContent }) => {
  if (!tag) throw Error('tag is required');
  const element = document.createElement(tag);
  if (classList && classList.length) element.classList = classList;
  if (onClick && onClick.length && onClick.length > 0 && onClick.length <= 2) {
    const handler = event => onClick.length === 2 ? onClick(element, event) : onClick(element);
    element.addEventListener('click', handler, false);
  }
  if (textContent) element.textContent = textContent;
  return element;
};

const createElementWithChildren = ({tag, classList, onClick, elements}) => {
  if (!tag) throw Error('tag is required');
  const element = document.createElement(tag);
  console.log('classList && classList.length:', classList && classList.length, classList);
  if (classList && classList.length) element.classList = classList;
  if (onClick && onClick.length && onClick.length > 0 && onClick.length <= 2) {
    const handler = event => onClick.length === 2 ? onClick(element, event) : onClick(element);
    element.addEventListener('click', handler, false);
  }
  if (elements && elements.length) {
    elements.forEach(el => element.append(el));
    // for (let i = 0; i < elements.length ; i++) element.append(elements[i]);
  }
  return element;
};

const toggleClass = (element) => {
  element.classList.toggle('list-item');
}

const reverseTextContent = (element) => {
  if (!element.textContent && !element.textContent.length) return;
  const string = element.textContent;
  console.log('string', string);
  const list = string.split('');
  console.log('list', list);
  const reversedList = list.reverse();
  console.log('reversedList', reversedList);
  const reversedString = reversedList.join('');
  console.log('reversedString', reversedString);
  element.textContent = reversedString;
}

const element = createElementWithChildren({tag: 'ul', classList: ['list'], elements: [
  createElementWithChildren({tag: 'li', classList: ['list-item'], elements: [
    createElementWithTextContent({tag: 'h2', textContent: '1.'}),
    createElementWithTextContent({tag: 'p', textContent: 'some 1st text...', onClick: reverseTextContent}),
    createElementWithChildren({tag: 'section', elements: [
      createElementWithTextContent({tag: 'span', textContent: 'section 1'}),
    ]})
  ]}),
  createElementWithChildren({tag: 'li', classList: ['list-item'], elements: [
    createElementWithTextContent({tag: 'h2', textContent: '2.'}),
    createElementWithTextContent({tag: 'p', textContent: 'some 2nd text...'}),
    createElementWithChildren({tag: 'section', elements: [
      createElementWithTextContent({tag: 'span', textContent: 'section 2'}),
    ]}),
  ]}),
  createElementWithChildren({tag: 'li', classList: ['list-item'], onClick: toggleClass, elements: [
    createElementWithTextContent({tag: 'h2', textContent: '3.'}),
    createElementWithTextContent({tag: 'p', textContent: 'some 3rd text...'}),
    createElementWithChildren({tag: 'section', elements: [
      createElementWithTextContent({tag: 'span', textContent: 'section 3'}),
    ]}),
  ]}),
]});

console.log(element.innerHTML);
div.append(element);
