import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList'
const ProductsContainer = () => {
  const [pradas, setPrada] = useState([])
  
  useEffect(() => {
    fetch("/api/products")
   .then(r => r.json())
   .then(data => setPrada(data))
  }, [])
  
  return (
    <div>
     <ProductList pradas={pradas} /> 
    </div>
  )
}

export default ProductsContainer