import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard'
const ProductList = ({ pradas, user, getCurrentUser, setPrada, setUser }) => {
  const [names, setNames] = useState("")
  
  const renderProduct = pradas.map((product) => (
    <ProductCard
      key={product.id}
      user={user}
      getCurrentUser={getCurrentUser}
      product={product}
      setPrada={setPrada}
      setUser={setUser}
    />
  ));
    
    
    
  const handleSubmit = (e) => {
    fetch(`/api/names?name=${names}`)
      .then((r) => r.json())
      .then((filter) => {
      
        setPrada(filter);
      });

  };
  useEffect(() => {
    handleSubmit();
  }, [names]);
  return (
    <div>
      <div>
        <option value={names}>Search product </option>
        <input
        Search
          type="text"
          onChange={(e) => setNames(e.target.value)}
          value={names}
        />
      </div>
      {renderProduct}
    </div>
  );
};

export default ProductList