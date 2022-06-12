import Button from "../styles/Button";

const PurchaseProduct = ({product, setPrada, user}) => {
    
    const handlePurchase = () => {
        
        fetch('/api/purchases', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product_id: product.id,
            user_id: user.id,
            quantity: 1,
          }),
        }).then((r) => {
            if(r.ok) {
                setPrada((numChange) => {
                   let numUpdate = numChange.find(item => item.id === product.id)
                    numUpdate.total_users += 1
                    return numChange.concat(numUpdate)
                }
            )}
        })
    }
    // {product_id: product.id, user_id: user.id, quantity: 1}
    
  return (
    <div>
        <Button onClick={handlePurchase}>Purchase Product</Button>
    </div>
  )
}

export default PurchaseProduct