import React from "react";

const Cart = ({ cart, handleRemoveToCart }) => {
  let message;
  if(cart.length === 0){
    message = <p>Please Add Some Products</p>
  }
  else{
    message = <div>
      <h3>Valuable Customer</h3>
      <p><small>Thanks For Giving Your Money!</small></p>
    </div>
  }
  return (
    <div>
      <h2>Order Summary : {cart.length}</h2>
      {
        cart.length > 2 ? <span>Buy More Stuff</span> : <span>That's Oky</span>
      }
      {message}
      {
      cart.map((tshirt) => (<p 
          key={tshirt._id}
          >{tshirt.name} <button
             onClick={() => handleRemoveToCart(tshirt._id)}
             >X</button>
        </p>))
      }
      {
        cart.length === 2 && <p>Double Bonanza!!</p>
      }
      {
        cart.length === 3 || <h3>Not Three Stuff</h3>
      }
    </div>
  );
};

export default Cart;
/**
 * Conditional Rendering
 * 1.Use if else to set a variable that will contain an element, component
 * 2.Ternary Operator: condition ? 'for true' : 'false'
 * 3.Logical &&: (if the condition is true then the next thing will be displayed)
 * 4.Logical || (if the condition is false then the next thing will be displayed)
**/