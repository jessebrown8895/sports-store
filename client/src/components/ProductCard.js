import {useEffect, useState} from 'react'
import { useParams, useLocation } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import PurchaseProduct from './PurchaseProduct';
import EditForm from './EditForm';
const ProductCard = ({product, user, getCurrentUser, setPrada}) => {
  const {id} = useParams()
  const location = useLocation()
  const [edit, setEdit] = useState(false)
  const [productObj, setProductObj] = useState(null)

  useEffect(() => {
    if(!product) {
      fetch(`/api/products/${id}`)
      .then((r) => r.json())
      .then((product) => setProductObj(product));
    }
  }, [product, id]);
  const handleUpdate = (updatedProduct) => {
    setProductObj(updatedProduct)
  }
  const finalProduct = product ? product : productObj
  if(!finalProduct) return "loading..."

  return (
    <div>
      {/* {!edit ? (
        <>
        <EditForm productObj={finalProduct} handleUpdate={handleUpdate}/>
        </>
      ) } */}
      <h1>Product name: {finalProduct.name}</h1>
      <h2>category: {finalProduct.category}</h2>
      <h3>price: {finalProduct.price}</h3>
      <h4>in stock: {finalProduct.stock_quantity}</h4>
      <h3>{finalProduct.description}</h3>

      <h3>Total users purchased product: {finalProduct.total_users}</h3>

      {finalProduct.creator.id === user.id && (
        <button onClick={() => setEdit((edit) => !edit )}></button>
      )}
      {finalProduct.creator.id === user.id && (
        <DeleteButton product={finalProduct} setPrada={setPrada/>
      )}
      {finalProduct.creator.id !== user.id && (
        <PurchaseProduct
          product={finalProduct}
          user={user}
          getCurrentUser={getCurrentUser}
        />
      )}
    </div>
  );
};

export default ProductCard