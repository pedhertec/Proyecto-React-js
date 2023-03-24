import React, { useState }  from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from "react-hook-form";


const DatosComprador =  ( ) => {
    const [modal, setModal] = useState(true);
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    const toggle = () => setModal(!modal);

    return(
        <>
        <Modal isOpen={modal} toggle={toggle} onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>
              Datos del comprador
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="nombre">Nombre</Label>
                <Input name="name" type="text"/> 
              </FormGroup>
              <FormGroup>
                <Label for="apellido">Apellido</Label>
                <Input type="text" id="apellido"/> 
              </FormGroup>
              <FormGroup>
                <Label for="email">Correo electrónico</Label>
                <Input type="text" id="email"/> 
              </FormGroup>
              <FormGroup>
                <Label for="email">Verificar Correo</Label>
                <Input type="text" id="email2"/> 
              </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="success" >Terminar compra</Button>
                <Button color="danger" onClick={toggle}>Cancelar</Button>
            </ModalFooter>
          </Modal>
          </>
        )
    }
    
    export default DatosComprador;

