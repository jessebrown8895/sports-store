const DeleteButton = ({product, getAllProducts}) => {
    
    const handleDelete = () => {
        fetch(`/api/products/${product.id}`, {
          method: "DELETE",
        }).then(() => getAllProducts());
        
        
    }
    
    
    
  return (
    <div>
        <button onClick={handleDelete}>Delete product</button>
    </div>
  )
}

export default DeleteButton