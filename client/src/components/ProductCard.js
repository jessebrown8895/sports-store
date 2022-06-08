import React from 'react'
import { useHistory } from 'react-router-dom'
import DeleteButton from './DeleteButton';
import PurchaseProduct from './PurchaseProduct';
const ProductCard = ({product, user, setPrada}) => {
    const history = useHistory();

   
  
    const handleEdit = () => {
      history.push(`/products/${product.id}`)
    }
    
  return (
    <div>
      <h1>Product name: {product.name}</h1>
      <h2>category: {product.category}</h2>
      <h3>price: {product.price}</h3>
      <h4>in stock: {product.stock_quantity}</h4>
      <h3>{product.description}</h3> 

      <h3>Total users purchased product: {product.total_users}</h3>
      
      {product.creator.id === user.id && <button onClick={handleEdit}>Edit product</button>}
      {product.creator.id === user.id && <DeleteButton product={product} setPrada={setPrada} />}
      {product.creator.id !== user.id && <PurchaseProduct product={product} user={user}/>}

    </div>
  )
}

export default ProductCard