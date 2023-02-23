import React from 'react';

const UsersListView = ( { userList, handlerDelete } ) => {

  return (
    <div>
        { userList.map( ( user, i ) => {
            return (
            <div key={i}>
            <h2> {user} </h2>
            <button onClick={ () => handlerDelete(user) }> Eliminar </button>
            </div>
            );
        })}
    </div>
  );
};

export default UsersListView;