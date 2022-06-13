import Button from "../styles/Button";
import { useParams } from "react-router-dom";
const PurchaseProduct = ({ product, setPrada, user, setUser}) => {
    
  const handlePurchase = () => {
    fetch("/api/purchases", {
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
      
      if(r.status === 201) {
          r.json() 
          .then(data => {
            console.log(data)
            setPrada((products) => {
              const newProducts = [...products];
              const prod = newProducts.filter(
                (prod) => prod.id === product.id
              )[0];
              prod.total_users = data.product.total_users
              console.log(newProducts)
              return newProducts
            })
            // const newUser = user
            // const newProduct = newUser.purchases.find((product) => {
            //   return product.name === data.name;
            // });
            // newUser.purchases.push(data)
            // if (newProduct === undefined) {
            //   newUser.total_product_purchases += 1;

            // }
            // setUser(newUser);
          })
      }
    });
  };
  // {product_id: product.id, user_id: user.id, quantity: 1}

  return (
    <div>
      <Button onClick={handlePurchase}>Purchase Product</Button>
    </div>
  );
};

export default PurchaseProduct