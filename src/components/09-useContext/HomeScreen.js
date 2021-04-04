import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const HomeScreen = () => {
  const { user } = useContext(UserContext)
  return (
    <div className="p-5">
      <h1>HomeScreen</h1>
      <hr />
      <pre className="card p-2">
        {JSON.stringify(user, null, 3)}
      </pre>
    </div>
  )
}

export default HomeScreen
