import React, { useEffect, useState } from 'react';
import './effects.css';
import Message from './Message';

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
  })

  const { name, email } = formState

  useEffect(() => {
    // console.log('Hola')
  }, [])

  useEffect(() => {
    // console.log('formState cambió')
  }, [formState])

  useEffect(() => {
    // console.log('email cambió')
  }, [email])

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1>useEffect</h1>
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
      { (name==='123') && <Message /> }
    </>
  )
}

export default SimpleForm
