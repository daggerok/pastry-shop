export function Product({ product }) {
  const { name, price, description, quantity } = product;
  // const name = product.name;
  // const price = product.price;
  // const description = product.description;
  // const quantity = product.quantity;
  return <div>
    <p>Name: {name}</p>
    <p>Description: {description}</p>
    <p>Price: {price}</p>
    <p>Quantity: {quantity}</p>
  </div>;
}
