import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList'
const ProductsContainer = ({ user, pradas, setPrada }) => {


  

  return (
    <div>
      <ProductList setPrada={setPrada} pradas={pradas} user={user} />
    </div>
  );
};

export default ProductsContainer