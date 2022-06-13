import React from 'react'
import ProductCard from './ProductCard'
const ProductList = ({ pradas, user, getCurrentUser, setPrada, setUser }) => {
  const renderProduct = pradas.map((product) => (
    <ProductCard
      key={product.id}
      user={user}
      getCurrentUser={getCurrentUser}
      product={product}
      setPrada={setPrada}
      setUser={setUser}
    />
  ));
  return <div>{renderProduct}</div>;
};

export default ProductList