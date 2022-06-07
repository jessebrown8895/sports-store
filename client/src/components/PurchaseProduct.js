

const PurchaseProduct = ({product, user}) => {
   
    const handlePurchase = () => {
        
        fetch("/api/purchases", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({product_id: product.id, user_id: user.id, quantity: 1})
        })
        .then((r) => r.json())
        .then((data) => {
            if(data.ok) {
                console.log(data)
            }
        } )
       
    }
    
  return (
    <div>
        <button onClick={handlePurchase}>Purchase Product</button>
    </div>
  )
}

export default PurchaseProduct