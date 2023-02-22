import React, { useState } from 'react'  /* importa la librería de useState para usar estados */

const ComponenteDeEstados = () => {
/*     const [ state, setState ] = useState(); ******************  esta es la syntax ******************************/
// const [ users, setUsers ] = useState([]);  /* importante no dejar vacios si no sabemos el valor inicial, array */
// const [ user, setUser ] = useState({});  /* importante no dejar vacios si no sabemos el valor inicial, objeto */
// const [ name, setName ] = useState('');  /* importante no dejar vacios si no sabemos el valor inicial, string */

const [ count, setCount ] = useState(0); /* importante no dejar vacios si no sabemos el valor inicial, número */


    const handlerClickAdd = () => {
        setCount(count + 1);
    };

    const handlerClickSubst = () => {
        setCount(count - 1 );
    };

    const handlerClickReset = () => {
        setCount( 0 );
    };
        
    return (
        <>
        <h1> { count } </h1>
        <button onClick={handlerClickAdd}> Sumar </button>
        <button onClick={handlerClickSubst}> Restar </button>        
        <button onClick={handlerClickReset}> Reset </button>
        </>
    );
};

export default ComponenteDeEstados;