import { Products } from "./App/Products";

const products = [
  {
    name: 'Awesome cake',
    description: 'The best cake you have ever tried!',
    price: '5',
    quantity: 2,
  },
  {
    name: 'Yet another awesome cake',
    description: 'There are no description for this cool stuff',
    price: '500',
    quantity: 10,
  },
];

export function App() {
  return <Products products={products} />;
}
