import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = ( ) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {

    const getProduct = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProduct(data);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [ ]);

  return (
    <>
      {<>{loading ? <h1>Cargando...</h1> : <ItemDetail product={product} />}</>}
    </>
  );
};

export default ItemDetailContainer