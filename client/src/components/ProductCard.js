import React from 'react'
import { useHistory } from 'react-router-dom'
import DeleteButton from './DeleteButton';
const ProductCard = ({product, user, setPrada}) => {
    const editHistory = useHistory();
  
    const handleEdit = () => {
      editHistory.push(`/products/${product.id}`)
    }
    
  return (
    <div>
      <h1>Product name: {product.name}</h1>
      <h2>maker: {product.category}</h2>
      <h3>price: {product.price}</h3>
      <h4>in stock: {product.stock_quantity}</h4>
      <h3>{product.description}</h3>
      
      {product.creator.id === user.id && <button onClick={handleEdit}>Edit product</button>}
      {product.creator.id === user.id && <DeleteButton product={product} setPrada={setPrada} />}

    </div>
  )
}

export default ProductCard