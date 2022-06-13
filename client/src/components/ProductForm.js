import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const ProductForm = ({user, setPrada}) => {
  const history = useHistory();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock_quantity: "",
    description: "",
  });

  

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [
        product.name,
        product.category,
        product.price,
        product.stock_quantity,
        product.description,
      ].some((val) => val.trim() === "")
    ) {
      alert("Please fill in all the information please!");
      return false;
    }

    fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: product.name,
        category: product.category,
        price: product.price,
        stock_quantity: product.stock_quantity,
        description: product.description,
      }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((product) => {
            
            setPrada(orgProducts => orgProducts.concat(product) )
            history.push("/products");
        
          });
        } else {
          r.json().then((error) => alert(error.error));
        }
      })
      .catch((error) => alert(error.error));
      
  };

  return (
    <div>
      <h3>Create a new prouduct</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Name:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          step="0.01"
          value={product.price}
          onChange={handleChange}
        />
        <br />
        <label>Stock:</label>
        <input
          type="number"
          name="stock_quantity"
          step="1"
          value={product.stock_quantity}
          onChange={handleChange}
        />
        <br />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Create Post" />
      </form>
    </div>
  );
};

export default ProductForm