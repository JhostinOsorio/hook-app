import React, { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import './effects.css';

const FormWithCustomHook = () => {

  const [ values, handleInputChange ] = useForm({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = values

  useEffect(() => {
    console.log('email cambio')
  }, [email])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />
      <div className="form-group">
        <input 
          className="form-control"
          type="text"
          name="name"
          placeholder="Tu nombre"
          autoComplete="off"
          value={ name }
          onChange={ handleInputChange }
        />
      </div>
      <div className="form-group mt-2">
        <input 
          className="form-control"
          type="email"
          name="email"
          placeholder="example@gmail.com"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
        />
      </div>
      <div className="form-group mt-2">
        <input 
          className="form-control"
          type="password"
          name="password"
          placeholder="*********"
          autoComplete="off"
          value={ password }
          onChange={ handleInputChange }
        />
      </div>
      <button
        className="btn btn-primary mt-2" 
        type="submit"
      >
        Guardar
      </button>
    </form>
  )
}

export default FormWithCustomHook
