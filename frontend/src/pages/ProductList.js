import React from 'react';

const ProductList = ({ addToCart }) => {
  const products = [
    { title: 'Book 1', price: 500 },
    { title: 'Book 2', price: 300 },
  ];

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.title}</h2>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
