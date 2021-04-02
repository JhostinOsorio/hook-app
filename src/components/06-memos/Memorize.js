import React, { useState } from 'react';
import useCounter from '../../hooks/useCounter';
import './index.css';
import Small from './Small';

const Memorize = () => {

  const { state, increment } = useCounter(10)
  const [show, setShow] = useState(true)

  return (
    <div>
      <h1>Counter <Small value={state} /></h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={()=>increment(1)}
      >
        +1
      </button>
      <button
        className="btn btn-success"
        onClick={()=>setShow(!show)}
      >
        Show/Hide { JSON.stringify(show) }
      </button>
    </div>
  )
}

export default Memorize
