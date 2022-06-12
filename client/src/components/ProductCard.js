import {useEffect, useState} from 'react'
import {  useHistory } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import PurchaseProduct from './PurchaseProduct';
import Button from '../styles/Button';
import Box from '../styles/Box';
const ProductCard = ({product, user, setPrada}) => {
  const history = useHistory()
  
  

  const handleEdit = () => {
      history.push(`/products/${product.id}`)
    }
    
  
 
  return (
    <div>
      <Box key={product.id}>
        <h1>Product name: {product.name}</h1>
        <h2>category: {product.category}</h2>
        <h3>price: {product.price}</h3>
        <h4>in stock: {product.stock_quantity}</h4>
        <h3>{product.description}</h3>
        <h3>Total users purchased product: {product.total_users}</h3>

        {product.creator.id === user.id && (
          <Button onClick={handleEdit}>Edit product</Button>
        )}
        {product.creator.id === user.id && (
          <DeleteButton product={product} setPrada={setPrada} />
        )}
        {product.creator.id !== user.id && (
          <PurchaseProduct setPrada={setPrada} product={product} user={user} />
        )}
      </Box>
    </div>
  );
};

export default ProductCard