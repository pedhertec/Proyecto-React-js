import React, { useContext } from 'react'
import { CartProduct } from "../context/CartProductContext";


const Cart = () => {
  const { cart } = useContext(CartProduct);
  return (
    <div>
      {cart.map((product) => {
        return <h1 key={product.id}>{product.title}</h1>;
      })}
    </div>
  );
};

export default Cart;