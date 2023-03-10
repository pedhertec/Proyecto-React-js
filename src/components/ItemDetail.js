import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartProduct } from "../context/CartProductContext";

const ItemDetail = ({ product }) => {

  const [isPressedButton, setIsPressedButton] = useState(false);
  const { addProduct } = useContext(CartProduct);

  const onAdd = ( count ) => {
    setIsPressedButton(true);
    addProduct(product, count);
  };
  
  return (
    <div style={styles.container}>
      <img alt={product.title} src={product.image} style={styles.image} />
      <div>
        <h1>{product.title}</h1>
        <span>{product.description}</span>
        <h2>{product.price}</h2>
  
        {isPressedButton ? (
          <Link to="/cart">
            <button>Finalizar compra</button>
          </Link>
        ) : (
          <ItemCount stock={7} onAdd={onAdd} />
        )}

      </div>
    </div>
  );
};

export default ItemDetail;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "10%",
  },
};
