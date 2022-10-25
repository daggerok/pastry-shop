import { Product } from "./Product";
import React, { useState } from 'react';

export function Products({ products }) {
  const [searchCriteria, setSearchCriteria] = useState('');

  return <div id='Products'>
    <h1>List of products ({products.length})</h1>
    {
      products.filter(p => p.quantity > 0).map(product => <Product
        key={product.name}
        product={product}
      />)
    }
  </div>;
}
