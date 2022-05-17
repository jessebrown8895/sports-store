import React from 'react'

const ProductCard = ({product}) => {
    console.log(product)
  return (
    <div>
      <h1>Produc name:{product.name}</h1>
      <h2>maker: {product.category}</h2>
      <h3>price: {product.price}</h3>
      <h4>in stock: {product.stock_quantity}</h4>
      <h3>{product.description}</h3>
      

    </div>
  )
}

export default ProductCard