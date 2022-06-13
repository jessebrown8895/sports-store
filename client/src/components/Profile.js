import React, {useEffect} from 'react'

const Profile = ({ user, getCurrentUser, setUser  }) => {
    useEffect(() => {
      getCurrentUser()
    }, [getCurrentUser])
    
  return (
    <div>
      <h1>Products purchased: </h1>
      <ul>
        {user && user.purchases.map((purchase) => (
          <li key={purchase.id}>{purchase.product_name}</li>
        ))}
      </ul>
      <h5>total Unique products purchased: {user && user.total_product_purchases}</h5>
    </div>
  );
};

export default Profile