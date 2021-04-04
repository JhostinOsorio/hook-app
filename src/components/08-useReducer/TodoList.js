import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleDelete, handleChangeDone }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, index) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={index}
          handleDelete={handleDelete}
          handleChangeDone={handleChangeDone}
        />
      ))}
    </ul>
  )
}



export default TodoList
