import React, { useEffect, useReducer } from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import todoReducer from './todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleAddTodo = ( newTodo ) => {
    dispatch({
      type: 'add',
      payload: {
        id: new Date().getTime(),
        desc: newTodo,
        done: false,
      }
    })
  }
  
  const handleDelete = ( id ) => {
    const action = {
      type: 'delete',
      payload: id,
    }
    dispatch(action)
  }

  const handleChangeDone = ( id ) => {
    const action = {
      type: 'changeDone',
      payload: id,
    }
    dispatch(action)
  }

  return (
    <div className="p-5">
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList 
            todos={todos}
            handleDelete={handleDelete}
            handleChangeDone={handleChangeDone}
          />
        </div>
        <div className="col-5">
          <TodoAdd 
            handleAddTodo={handleAddTodo}
          />
        </div>
      </div>
    </div>
  )
}

export default TodoApp
