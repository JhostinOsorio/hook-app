import React, { useState } from 'react';
import MultipleCustomHook from '../03-examples/MultipleCustomHook';
import './index.css';

const RealExampleRef = () => {

  const [show, setShow] = useState(false)

  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />

      { show && <MultipleCustomHook /> }
      <button
        className="btn btn-primary mt-3"
        onClick={()=>setShow(!show)}
      >
        Show
      </button>
    </div>
  )
}

export default RealExampleRef
