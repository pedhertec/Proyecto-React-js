import React, { useState, useContext } from 'react'
import { CartProduct } from "../context/CartProductContext";
import { Link } from "react-router-dom";
import DatosComprador from './DatosComprador';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { dataBase } from "../firebase/firebase";
import {Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Cart = ( ) => {
  const { cart, totals, clearCart, removeProduct } = useContext(CartProduct);
  const [isPressedButton, setIsPressedButton] = useState(false);

 
  const abrirPopUp = ( ) => {
    setIsPressedButton(true);
  };
  
  const handlerClickSell = () => {
    const sellCollection = collection(dataBase, "ventas");
    addDoc( 
      sellCollection,
      {
/*         comprador,*/
        items: cart,
        total: totals.total,
        time: serverTimestamp(),
      }
      )
      .then(result=>console.log(result.id))
      
    };
    
    const handlerStock = () => { 
      const docReference = doc(dataBase, 'productos', '3D2SRt4gIkJZUk2ujq1Q' ); //para terminar
      updateDoc(docReference, { stock:50 })
    };
    
    const todoEnClick = ( ) => { 
      abrirPopUp();
      handlerClickSell();
      handlerStock();
  };
  
  return (
    <>
      {!cart.length ? (
        <>
          <h1> Aún no hay productos agregados al carrito, te invitamos a ver <Link to={"/"}>nuestra tienda</Link> </h1>
          <h2>Gracias por tu visita</h2>
        </>
      ) : (
        <>
          <div>
            {cart.map((product) => {
              return (
                <div key={product.id}>
                  <h1>{product.title}</h1>
                  <h2>Precio: u$s {product.price}</h2>
                  <h2>Cantidad: {product.qty}</h2>
{/*                   <Button color="danger" outline onClick={removeProduct}>Eliminar</Button> */} {/* revisar */}
                </div>
              );
            })}
          </div>
          <h1>Total : u$s {totals.total}</h1>

          {isPressedButton ? (
            <DatosComprador />  
            ) : (
              ""
              )}
          <Button color="danger" outline onClick={clearCart}> Vaciar Carrito</Button>
          <Button color="success" onClick={todoEnClick}>Finalizar Pedido</Button>
        </>
      )}
    </>
  );
};

export default Cart;