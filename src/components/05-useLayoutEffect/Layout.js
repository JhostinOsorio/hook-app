import React, { useLayoutEffect, useRef } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './index.css';

const Layout = () => {

  const { state, increment } = useCounter(1)
  const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${state}`)
  const { quote } = !!data && data[0];
  const pTag = useRef()

  useLayoutEffect(() => {
    console.log( getComputedStyle(pTag.current).width )
  }, [quote])

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      <blockquote className="blockquote text-end">
        <p ref={pTag}>{quote}</p>
      </blockquote>

      <button 
        className="btn btn-primary"
        onClick={()=>increment()}
      >
        Siguiente quote
      </button>

    </div>
  )
}

export default Layout
