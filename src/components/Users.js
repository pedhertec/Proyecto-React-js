import React, { useState } from 'react';

const Users = () => {
    const [ users, setUsers ] = useState ([
        { name: "x"},
        { name: "y"},
        { name: "z"},
    ]);


    return (
        <>
        <h2> Lista de usuarios</h2>
        <ul>
            {
                users.map( ( user, i ) => (
                    <li key=""> {user.name} </li>
                ))
            }
        </ul>

            <input> </input>
        </>
    )

};
export default Users