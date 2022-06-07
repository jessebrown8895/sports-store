import React from 'react'

const Profile = ({user}) => {
  console.log(user)
  
  return (
    <div>
      <h1>Products purchased: </h1>
      <ul>
        {user.purchases?.map((purchase) => (
          <li key={purchase.id}>{purchase.product_name}</li>
        ))}
      </ul>
      <h5>total Unique products purchased: {user.total_product_purchases}</h5>
    </div>
  );
}

export default Profile