import React from 'react'

const TodoListItem = ({ todo, index, handleDelete, handleChangeDone }) => {
  
  const { id, desc, done } = todo;

  return (
    <li
      className="list-group-item d-flex align-items-center justify-content-between" 
      key={id}
    >
      <p 
        role="button" 
        className={`m-0 ${done && 'text-decoration-line-through'}`}
        onClick={()=>handleChangeDone(id)}
      >
        {index + 1}. {desc}
      </p>
      <button
        type="button"
        className="btn btn-danger"
        onClick={()=>handleDelete(id)}
      >
        Borrar
      </button>
    </li>
  )
}

export default TodoListItem
