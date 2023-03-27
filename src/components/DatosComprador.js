import React, { useState, useContext } from 'react'
import { CartProduct } from "../context/CartProductContext";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { dataBase } from "../firebase/firebase";
import 'bootstrap/dist/css/bootstrap.css';


const DatosComprador =  ( ) => {
    const { cart, totals, clearCart } = useContext(CartProduct);
    const [modal, setModal] = useState(true);
    const [ comprador, setComprador ] = useState({ nombre: '', apellido: '', mail:'' });

    const handleInputChange = (e) => {
      setComprador({
        ...comprador,
        [e.target.name] : e.target.value
      })
  }


/* *********************************************************************************** */

  const handlerClickSell = () => {
    const sellCollection = collection(dataBase, "ventas");
    addDoc( 
      sellCollection,
      {
        comprador,
        items: cart,
        total: totals.total,
        time: serverTimestamp(),
      }
      )
      .then(result=>console.log(result.id))
          };

/* *********************************************************************************** */

    const toggle = () => setModal(!modal);

    console.log(comprador);

    const todoEnClick = ( ) => { 
      toggle();
      handlerClickSell();
      clearCart();
  };


    return(
        <>
        <Modal isOpen={modal} toggle={toggle} /* onSubmit={handleSubmit(onSubmit)} */>
            <ModalHeader>
              Datos del comprador
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="nombre">Nombre</Label>
                <Input name="nombre" type="text" value={comprador.nombre} onChange={handleInputChange}/> 
              </FormGroup>
              <FormGroup>
                <Label for="apellido">Apellido</Label>
                <Input name="apellido" type="text" value={comprador.apellido} onChange={handleInputChange}/> 
              </FormGroup>
              <FormGroup>
                <Label for="email">Correo electrónico</Label>
                <Input name="mail" type="email" value={comprador.mail} onChange={handleInputChange}/> 
              </FormGroup>
              <FormGroup>
                <Label for="email">Verificar Correo</Label>
                <Input name="mail" type="email"/> 
              </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={todoEnClick}>Terminar compra</Button>
                <Button color="danger" onClick={toggle} >Cancelar</Button>
            </ModalFooter>
          </Modal>
          </>
        )
    }

    
    export default DatosComprador;

