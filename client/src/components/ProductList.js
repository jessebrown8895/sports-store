import React from 'react'
import ProductCard from './ProductCard'
const ProductList = ({
  pradas,
  user,
  getCurrentUser,
  getAllProducts
}) => {
  const renderProduct = pradas.map((product) => (
    <ProductCard
      key={product.id}
      user={user}
      getAllProducts={getAllProducts}
      getCurrentUser={getCurrentUser}
      product={product}
    />
  ));
  return <div>{renderProduct}</div>;
};

export default ProductList