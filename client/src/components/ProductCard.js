import {useEffect, useState} from 'react'
import {  useHistory, useParams } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import PurchaseProduct from './PurchaseProduct';
import Button from '../styles/Button';
import Box from '../styles/Box';
const ProductCard = ({product, user, setPrada, setUser}) => {
  
  const history = useHistory()
  // const [productObj, setProductObj] = useState(product)
  
  // useEffect(() => {
  //   if(!product) {
  //     fetch(`/api/product/${product.id}`)
  //     .then((r) => r.json())
  //     .then((product) => setProductObj(product));
  //   }
    
  // }, [product])
  

  const handleEdit = () => {
      history.push(`/products/${product.id}`)
    }
   
  // const handleUpdate = (updateProductObj) => {
  //   console.log(updateProductObj)
  //   setPrada(origPradas => origPradas.concat(updateProductObj));
  // }
 
  return (
    <div>
      <Box key={product.id}>
        <h1>Product name: {product.name}</h1>
        <h2>category: {product.category}</h2>
        <h3>price: {product.price}</h3>
        <h4>in stock: {product.stock_quantity}</h4>
        <h3>{product.description}</h3>
        <h3>Total users purchased product: {product.total_users}</h3>

        {user && product.creator.id === user.id && (
          <Button onClick={handleEdit}>Edit product</Button>
        )}
        {user && product.creator.id === user.id && (
          <DeleteButton product={product} setPrada={setPrada} />
        )}
        {user && product.creator.id !== user.id && (
          <PurchaseProduct
            
            setPrada={setPrada}
            setUser={setUser}
            product={product}
            user={user}
          />
        )}
      </Box>
    </div>
  );
};

export default ProductCard