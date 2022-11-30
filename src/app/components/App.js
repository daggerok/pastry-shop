import { Header } from "./App/Header";
import { MyNav } from "./App/MyNav";
import { Products } from "./App/Products";
import { Footer } from "./App/Footer";

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
  return <>
    Hello!
  </>;
}
//
// export function App() {
//   return <>
//     <Header />
//     <MyNav />
//     <Products products={products} />
//     <Footer />
//   </>;
// }
