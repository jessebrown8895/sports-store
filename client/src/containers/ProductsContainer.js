import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList'
const ProductsContainer = ({ user, pradas, setPrada, setUser }) => {


  

  return (
    <div>
      <ProductList setPrada={setPrada} setUser={setUser} pradas={pradas} user={user} />
    </div>
  );
};

export default ProductsContainer