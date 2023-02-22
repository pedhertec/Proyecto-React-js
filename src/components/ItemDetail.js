import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {

  const onAdd = ( count ) => {
    console.log(`seleccionó ${count}`);
  }
  
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
