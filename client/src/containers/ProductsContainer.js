import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList'
const ProductsContainer = ({user}) => {
  const [pradas, setPrada] = useState([])
  
  useEffect(() => {
    fetch("/api/products")
   .then(r => r.json())
   .then(data => setPrada(data))
   .catch(error => alert(error))
  }, [])
  
  return (
    <div>
     <ProductList pradas={pradas} user={user} setPrada={setPrada} /> 
    </div>
  )
}

export default ProductsContainer