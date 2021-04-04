import React from 'react';
import useForm from '../../hooks/useForm';

const TodoAdd = ({ handleAddTodo }) => {

  const [ { description }, setValues, resetValues ] = useForm({ description : '' })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;
    handleAddTodo(description)
    resetValues()
  }

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
          <input 
            type="text"
            className="form-control"
            name="description"
            placeholder="Aprender ..."
            autoComplete="off"
            value={description}
            onChange={(e)=>setValues(e)}
          />
          <button
            type="submit"
            className="mt-2 btn btn-block btn-outline-primary"
          >
            Agregar
          </button>
      </form> 
    </>
  )
}

export default TodoAdd
