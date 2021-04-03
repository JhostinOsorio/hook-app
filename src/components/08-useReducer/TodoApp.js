import React, { useReducer, useState } from 'react';
import todoReducer from './todoReducer';

const initialState = [
  {
    id: new Date().getTime(),
    todo: 'Aprender React',
    done: false,
  }
]

const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: new Date().getTime(),
      todo: newTodo,
      done: false
    }
    const action = {
      type: 'add',
      payload: todo,
    }
    dispatch(action)
    setNewTodo('')
  }

  return (
    <div className="p-5">
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map(({id, todo}, index) => (
              <li
                className="list-group-item d-flex align-items-center justify-content-between" 
                key={id}
              >
                <p role="button" className="text-center m-0">{index + 1}. {todo}</p>
                <button
                  type="button"
                  className="btn btn-danger"
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form onSubmit={handleSubmit}>
              <input 
                type="text"
                className="form-control"
                name="description"
                placeholder="Aprender ..."
                autoComplete="off"
                value={newTodo}
                onChange={(e)=>setNewTodo(e.target.value)}
              />
              <button
                type="submit"
                className="mt-2 btn btn-block btn-outline-primary"
              >
                Agregar
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TodoApp
