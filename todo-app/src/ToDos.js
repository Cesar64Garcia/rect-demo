import React from 'react';

const ToDos = ({toDos,deleteToDo}) => {
    const toDoList = toDos.length ? (
        toDos.map(toDo => {
            return (
                <div className="collection-item" key={toDo.id} onClick={() => {deleteToDo(toDo.id)}}>
                    <span>{toDo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no to do's left</p>
    );
    return (
        <div className='todos collection'>
            {toDoList}
        </div>
    )
}

export default ToDos