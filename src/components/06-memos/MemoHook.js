import React, { useMemo, useState } from 'react';
import procesoPesado from '../../helpers/procesoPesado';
import useCounter from '../../hooks/useCounter';
import './index.css';

const MemoHook = () => {

  const { state, increment } = useCounter(500)
  const [show, setShow] = useState(true)

  const memoProcesoPesado = useMemo(() => {
    procesoPesado(state)
  }, [state])

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>Counter {state}</h3>
      <hr />
      <p>{ memoProcesoPesado }</p>
      <button
        className="btn btn-primary"
        onClick={()=>increment(1)}
      >
        +1
      </button>
      <button
        className="btn btn-primary ms-3"
        onClick={()=>setShow(!show)}
      >
        Show/Hide { JSON.stringify(show) }
      </button>
    </div>
  )
}

export default MemoHook
