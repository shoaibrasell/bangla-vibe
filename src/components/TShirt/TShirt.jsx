import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt , handleAddToCart}) => {
  const { picture, name, price ,gender } = tshirt;
  return (
    <div className='t-shirt'>
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <h5>${price}</h5>
      <p>{gender}</p>
      <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
    </div>
  );
};

export default TShirt;