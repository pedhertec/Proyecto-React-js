import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { dataBase } from "../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  /*   const url = `https://fakestoreapi.com/products/${id}`; */



  useEffect(() => {


    const productsCollection = collection(dataBase, 'productos');
    const refDoc = doc(productsCollection, id)
    getDoc(refDoc).then(
      (data) => {
        setProduct({
          id: data.id,
          ...data.data(),
        });
      }
    )
      .finally(() => {
        setLoading(false);
      })


    /*     const getProduct = async () => {
          try {
            const res = await fetch(url);
            const data = await res.json();
            setProduct(data);
          } finally {
            setLoading(false);
          }
        };
        
        getProduct(); */

  }, []);

  return (
    <>
      {<>{loading ?
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        : <ItemDetail product={product} />}</>}

    </>
  );
};

export default ItemDetailContainer