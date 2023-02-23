import React from 'react';

const ComponenteEventos = () => {

    const handlerClick = (event) => {
        event.stopPropagation(); // se usa para que el click sea solo en este evento y no se propague al div padre
        console.log(event.target);
    };

    const handlerChange = (event) => {
        console.log(event.target);
        console.log(event.target.value); //probando
        console.dir(event.target); //probando
    };
    
    
    const handlerClickDiv = (event) => {
        console.log("click en div");
    };


  return (
    <div onClick={handlerClickDiv}>
        <button id={'idButton'} onClick={handlerClick}>Click me!</button>

        <input onChange={handlerChange} />
    </div>
  )
}

export default ComponenteEventos;