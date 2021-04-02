import React from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './styles.css';

const MultipleCustomHook = () => {

  const { state, increment } = useCounter(1)
  const { data, loading } = useFetch(`https://breakingbadapi.com/api/quotes/${state}`)
  const { author, quote } = !!data && data[0];
  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      { 
        loading 
        ? 
          (<div className="alert alert-info text-center">
            Loading ...
          </div>)
        :
          (<blockquote className="blockquote text-end">
            <p>{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>)
      }

      <button 
        className="btn btn-primary"
        onClick={()=>increment()}
      >
        Siguiente quote
      </button>

    </div>
  )
}

export default MultipleCustomHook
