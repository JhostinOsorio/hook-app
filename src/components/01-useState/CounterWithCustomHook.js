import React from 'react'
import useCounter from '../../hooks/useCounter'
import './Counter.css'

const CounterWithCustomHook = () => {

  const { state:counter, increment, reset, decrement } = useCounter(100)

  return (
    <>
      <h1>Counter With Hook: {counter}</h1>
      <hr />
      <button className="btn btn-primary mr-2" onClick={()=>increment()}>+1</button>
      <button className="btn btn-primary mr-2" onClick={reset}>Reset</button>
      <button className="btn btn-primary" onClick={()=>decrement()}>-1</button>
    </>
  )
}

export default CounterWithCustomHook
