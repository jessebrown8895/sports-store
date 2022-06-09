import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList'
const ProductsContainer = ({ user, pradas, setPrada, getCurrentUser }) => {
  const getAllProducts = () => {
    
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => setPrada(data))
      .catch((error) => alert(error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <ProductList
        pradas={pradas}
        getCurrentUser={getCurrentUser}
        user={user}
        getAllProducts={getAllProducts}
      />
    </div>
  );
};

export default ProductsContainer