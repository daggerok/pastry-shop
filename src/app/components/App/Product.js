export function Product({ product }) {
  const { name, price, description, quantity } = product;
  return <div className='Product'>
    <p>Name: {name}</p>
    <p>Description: {description}</p>
    <p>Price: {price}</p>
    <p>Quantity: {quantity}</p>
  </div>;
}
