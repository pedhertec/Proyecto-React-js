import React, { useEffect, useState } from "react";
/* import ItemCount from './ItemCount'; */
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { dataBase } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";


const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const { name } = useParams();
  /*   const url = name ? `https://fakestoreapi.com/products/category/${name}` : `https://fakestoreapi.com/products`*/


  useEffect(() => {

    const productsCollection = collection(dataBase, "productos");
    const q = name
      ? query(productsCollection, where("category", "==", name))
      : productsCollection;

    getDocs(q)
      .then((data) => {
        const list = data.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(list);
      })

      .catch(() => {
        setError(true);
      });

    /*     const getProducts = async () => {
          try {
            const res = await fetch(url);
            const data = await res.json();
    
            setTimeout(() => {
    
            setProducts(data);
          }, 2000);
            
          } catch {
              
              setError(true);
          }
        };
    
        getProducts(); */

  }, [name]);


  return (
    <>
      <div style={styles.container}> {greeting} </div>
      {!error ? (
        <>
          {products.length ? (
            <ItemList products={products} />
          ) : (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </>
      ) : (
        <h1>Hubo un error</h1>
      )}
    </>
  )
}


export default ItemListContainer;

export const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    fontSize: "5vh",
  },
  h1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
}
