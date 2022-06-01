import React from 'react'
import ProductCard from './ProductCard'
const ProductList = ({pradas, user, setPrada}) => {
  
    const renderProduct = pradas.map(product => <ProductCard key={product.id} setPrada={setPrada} user={user} product={product} />)
  return (
    <div>
      {renderProduct}
    </div>
  )
}

export default ProductList