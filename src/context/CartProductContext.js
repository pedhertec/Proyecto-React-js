import React, { createContext, useState, useEffect } from 'react';

export const CartProduct = createContext();

export const ProductProvider = ( { children }) => {
  const  [ cart, setCart ] = useState([]);
  const [totals, setTotals] = useState({ qty: 0, total: 0 });

  useEffect(() => {
    let qtyInitial = 0;
    let total = 0;
    cart.forEach((product) => {
      qtyInitial += product.quantity;
      total += product.quantity * product.price;
    });
    setTotals({ qty: qtyInitial, total: total });
  }, [cart]);


  const addProduct = ( product, qty ) => {
    if (isInCart(product.id)) {
      setCart(
        cart.map((productCart) => {
          if (productCart.id === product.id)
            return { ...productCart, qty };
          return productCart;
        })
      );
    } else {
      setCart([...cart, { ...product, qty }]);
    }
  };

  const removeProduct = ( id ) => { 
    const product = cart.find((product) => product.id === id);
    setCart(cart.filter((product) => product.id !== id));     //funcion para borrar un producto del carrito
  };

  const isInCart = ( id ) => {
    return cart.some((product) => product.id === id);   //funcion para validar un producto dentro del carrito
  };

  const clear = ( ) => {
    setCart([]);   //funcion para limpiar el carrito
  };

  return (
    <CartProduct.Provider value={{ cart, totals, addProduct, removeProduct, clear }}>
      {children}
    </CartProduct.Provider>
  );
};

