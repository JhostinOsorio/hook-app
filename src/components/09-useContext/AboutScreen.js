import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const AboutScreen = () => {


  const { user, setUser } = useContext( UserContext )

  return (
    <div className="p-5">
      <h1>AboutScreen</h1>
      <hr />

      <pre className="card p-2">
        {JSON.stringify(user, null, 3)}
      </pre>

      <button
        type="button"
        className="btn btn-warning"
        onClick={()=>setUser({})}
      >
        Logout
      </button>
    </div>
  )
}

export default AboutScreen
