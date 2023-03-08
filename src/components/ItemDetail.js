import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { ProductProvider } from "../context/CartProductContext";

const ItemDetail = ({ product }) => {

  /* const { addProduct } = useContext(ProductProvider); */

  const onAdd = ( count ) => {
/*     addProduct(product, count); */
  };
  
  return (
    <div style={styles.container}>
      <img alt={product.title} src={product.image} style={styles.image} />
      <div>
        <h1>{product.title}</h1>
        <span>{product.description}</span>
        <h2>{product.price}</h2>
        <ItemCount stock={7} onAdd={onAdd} />
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
