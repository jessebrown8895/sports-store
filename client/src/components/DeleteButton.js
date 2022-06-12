import Button from "../styles/Button"
const DeleteButton = ({product, setPrada}) => {

    const handleDelete = () => {
        fetch(`/api/products/${product.id}`, {
            method: "DELETE"
        })
        
        .then(() => setPrada(products => products.filter((p) => p.id !== product.id)))
        
        
    }
    
    
    
  return (
    <div>
        <Button onClick={handleDelete}>Delete product</Button>
    </div>
  )
}

export default DeleteButton