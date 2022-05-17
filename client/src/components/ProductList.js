import React from 'react'
import ProductCard from './ProductCard'
const ProductList = ({pradas}) => {
  
    const renderPosts = pradas.map(product => <ProductCard key={product.id} product={product} />)
  return (
    <div>
      {renderPosts}
    </div>
  )
}

export default ProductList