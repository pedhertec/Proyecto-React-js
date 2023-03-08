import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import Cart from './components/Cart'
import { ProductProvider } from './context/CartProductContext';
/* import ComponenteEventos from './components/ComponenteEventos'; */
/* import ComponenteDeEstados from './components/ComponenteDeEstados'; */
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import Users from './components/Users'; */
import './App.css';


const App = () => {

  const text = "Segunda entrega Proyecto React JS";
  
  return (
    <>
    <BrowserRouter>    
    <ProductProvider>
        <NavBar/>
{/*         <Users/> */}
{/*         <ComponenteEventos/> */}
        <Routes>
        <Route path="/" element={<ItemListContainer greeting={text} />} />
        <Route path="/categories/:name" element={<ItemListContainer greeting={text} />}/>
        <Route path="/products/:id" element={<ItemDetailContainer greeting={text} />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="*" element={<Error404 /> } />

        </Routes>
    </ProductProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
