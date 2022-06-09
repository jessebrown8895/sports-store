

const PurchaseProduct = ({product, user, getAllProducts, getCurrentUser}) => {
    
    const handlePurchase = () => {
        
        fetch("/api/purchases", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({product_id: product.id, user_id: user.id,
            quantity: 1,
          }),
        }).then(r => {if(r.ok){getAllProducts() ; getCurrentUser();}})
        
          
       
    }
    
  return (
    <div>
      <button onClick={handlePurchase}  >
        Purchase Product
      </button>
    </div>
  );
}

export default PurchaseProduct