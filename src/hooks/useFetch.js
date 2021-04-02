import { useEffect, useState } from "react"

const useFetch = ( url ) => {

  const [state, setstate] = useState({ data: null, loading: true, error: null});

  useEffect(() => {

    setstate({
      error: null,
      loading: true,
      data: null,
    })

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setstate({
          error: null,
          loading: false,
          data: data,
        })
      })
  }, [url])

  return state;

}

export default useFetch
