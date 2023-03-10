import React, {useState} from "react";

const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handlerAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handlerSubtract = () => {
    if (count > 1) setCount(count - 1);
  };
  
  const handlerSelect = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
    <div style={styles.container}>
      <button onClick={handlerAdd}>➕</button>
      <h1>{count}</h1>
      <button onClick={handlerSubtract}>➖</button>
      <button onClick={() => onAdd(count)}>Añadir al carrito</button>
    </div>
    </>
  );
};

export default ItemCount;

export const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        fontSize: "1.5vh",
        width: "250px"
    }
} 