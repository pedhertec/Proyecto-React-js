import React, { useState } from 'react';
import UsersListView from './UsersListView';


const Users = () => {
    const [ name, setName ] = useState ("");
    const [ userList, setUserList ] = useState ([]);


    const handlerChange = ( e ) => {
        setName(e.target.value);
    };

    const handlerClick = () => {
        setUserList([...userList, name])
    };

    const handlerDelete = ( userDelete ) => {
        setUserList(userList.filter( (user) => user !== userDelete )); 
    };

    return (
        <div>
        <input type="text" value={name} onChange={handlerChange}/>
        <button onClick={handlerClick}> Agregar </button>
        <UsersListView userList={userList} handlerDelete={handlerDelete} />
        </div>
    );
};

export default Users;