import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
const EditForm = ({ user }) => {
  const params = useParams();
  const history = useHistory()
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`/api/products/${parseInt(params.id)}`)
      .then((r) => r.json())
      .then((data) => setProduct(data));
  }, []);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [product.name, product.category, product.description].some(
        (val) => val.trim() === ""
      )
    ) {
      alert("Please fill in all the information please!");
      return false;
    }
    fetch(`/api/products/${parseInt(params.id)}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: product.name,
        category: product.category,
        price: product.price,
        stock: product.stock_quantity,
        description: product.description
      })
      
    });
    history.push('/products')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Name:</label>
        <input
          type="text"
          name="name"
          value={product?.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          name="category"
          value={product?.category}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          step="0.01"
          value={product?.price}
          onChange={handleChange}
        />
        <br />
        <label>Stock:</label>
        <input
          type="number"
          name="stock_quantity"
          step="1"
          value={product?.stock_quantity}
          onChange={handleChange}
        />
        <br />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={product?.description}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Edit" />
      </form>
    </div>
  );
};

export default EditForm;
