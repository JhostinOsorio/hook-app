import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const LoginScreen = () => {

  const { setUser } = useContext(UserContext)

  return (
    <div className="p-5">
      <h1>LoginScreen</h1>
      <hr />
      <button
        type="button"
        className="btn btn-primary"
        onClick={()=>setUser({
          id: 567,
          name: 'Jhostin'
        })}
      >
        Login
      </button>
    </div>
  )
}

export default LoginScreen
