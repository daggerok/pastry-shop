import { Product } from "./Product";

export function Products({ products }) {
  return <div>
    <h1>List of products ({products.length})</h1>
    {
      products.filter(p => p.quantity > 0).map(product => <Product
        key={product.name}
        product={product}
      />)
    }
  </div>;
}

// IGNORE THIS:

// function doubleIt(number) {
//   return number * 2;
// }
//
// const numbers = [1, 2, 3]; // => [2, 4, 6]
//
// // const doubledNumbers = numbers.map(doubleIt);
// // const doubledNumbers = numbers.map(function (number) {
// //   return number * 2;
// // });
// const doubledNumbers = numbers.map(number => number * 2);
