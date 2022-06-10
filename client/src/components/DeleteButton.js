const DeleteButton = ({}) => {
    
    const handleDelete = () => {
        fetch(`/api/products/${product.id}`, {
          method: "DELETE",
        }).then(() => );
        
        
    }
    
    
    
  return (
    <div>
        <button onClick={handleDelete}>Delete product</button>
    </div>
  )
}

export default DeleteButton