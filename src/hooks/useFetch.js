import { useEffect, useRef, useState } from "react"

const useFetch = ( url ) => {

  const isMounted = useRef(true);
  const [state, setstate] = useState({ data: null, loading: true, error: null});

  useEffect(() => {

    return () => {
      isMounted.current = false
    }

  }, [])

  useEffect(() => {

    setstate({
      error: null,
      loading: true,
      data: null,
    })

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (isMounted.current) {
          setstate({
            error: null,
            loading: false,
            data: data,
          })
        }
      })
      .catch(error => {
        setstate({
          data: null,
          loading:false,
          error: 'No se pudo cargar la info',
        })
      })
  }, [url])

  return state;

}

export default useFetch
