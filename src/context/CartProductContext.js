import React, { createContext, useState, useEffect } from 'react';

export const CartProduct = createContext();

export const ProductProvider = ( { children }) => {
  const  [ cart, setCart ] = useState([]);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    let qtyInitial = 0;
    cart.forEach((product) => {
      qtyInitial += product.qty;
    });
    setQty(qtyInitial);
  }, [cart]);

  const addProduct = ( product, qty ) => {
    if (IsInCart(product.id)) {
      console.log(product); //************************************/
        } else {
      setCart([...cart, { ...product, qty }]);
    }
  };

  const removeProduct = ( id ) => { 
    const product = cart.find((product) => product.id === id);
    setCart(cart.filter((product) => product.id !== id));     //funcion para borrar un producto del carrito
  };

  const IsInCart = ( id ) => {
    return cart.some((product) => product.id === id);   //funcion para validar un producto dentro del carrito
  };

  const clear = ( ) => {
    setCart([]);   //funcion para limpiar el carrito
  };

  return (
    <CartProduct.Provider value={{ cart, addProduct, removeProduct, clear }}>
      {children}
    </CartProduct.Provider>
  );
};

