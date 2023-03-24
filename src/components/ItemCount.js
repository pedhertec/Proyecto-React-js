import React, {useState} from "react";
import {Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

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
  
/*   const handlerSelect = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }; */

  return (
    <>
    <div style={styles.container}>
      <Button color="primary" outline onClick={handlerAdd}>+</Button>
      <h1>{count}</h1>
      <Button color="primary" outline onClick={handlerSubtract}>-</Button>
      <Button color="primary" outline onClick={() => onAdd(count)}>Añadir</Button>
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