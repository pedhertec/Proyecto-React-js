import React, { useEffect, useState } from "react";
/* import ItemCount from './ItemCount'; */
import ItemList from './ItemList';
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const { name } = useParams();
  const url = name ? `https://fakestoreapi.com/products/category/${name}` : `https://fakestoreapi.com/products`

  useEffect(() => {

    const getProducts = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch {
        setError(true);
      }
    };

    getProducts();

  }, [name]);


  return (
    <>
      <div style={styles.container}> {greeting} </div>

      {!error ? (
        <>
          {products.length ? (
            <ItemList products={products} />
          ) : (
            <h1>Cargando...</h1>
          )}
        </>
      ) : (
        <h1>Hubo un error</h1>
      )}
    </>
  )
}

export const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    fontSize: "5vh",
  }
}

export default ItemListContainer;