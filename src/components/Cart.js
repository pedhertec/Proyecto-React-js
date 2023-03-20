import React, { useContext } from 'react'
import { CartProduct } from "../context/CartProductContext";
import { Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { dataBase } from "../firebase/firebase";

const Cart = ( ) => {
  const { cart, totals } = useContext(CartProduct);




  const handlerStock = () => {
    const docReference = doc(dataBase, 'products', '7dKvIMyRTeFJg5w62m4F');
    updateDoc(docReference, {stock:50})
  };



  return (
    <>
      {!cart.length ? (
        <>
          <h1>
            Aún no hay productos agregados al carrito, te invitamos a ver <Link to={"/"}>nuestra tienda</Link>
          </h1>
          <h2>Gracias por tu visita</h2>
        </>
      ) : (
        <>
          <div>
            {cart.map((product) => {
              return (
                <div key={product.id}>
                  <h1>{product.title}</h1>
                  <h2>Precio: {product.price}</h2>
                  <h2>Cantidad: {product.quantity}</h2>
                </div>
              );
            })}
          </div>
          <h1>Total : {totals.total}</h1>
          <button onClick={handlerStock}>Comprar</button>
        </>
      )}
    </>
  );
};

export default Cart;