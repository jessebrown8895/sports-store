import { useHistory } from 'react-router-dom'

const DeleteButton = ({product, setPrada}) => {
    
    const handleDelete = () => {
        fetch(`/api/products/${product.id}`, {
            method: "DELETE"
        })
        
        .then(() => setPrada(products => products.filter((p) => p.id !== product.id)))
        
    }
    
    
    
  return (
    <div>
        <button onClick={handleDelete}>Delete product</button>
    </div>
  )
}

export default DeleteButton