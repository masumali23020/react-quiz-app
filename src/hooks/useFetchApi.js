<<<<<<< HEAD
import { useEffect, useState } from 'react';

const useFetchApi = (url, method, headers) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [result, setResult] = useState(null);
  
    useEffect(() => {
      async function requestFetch() {
        try {
          setLoading(true);
          setError(false);
          const response = await fetch(url, {
            method: method || "GET",
            headers: headers,
          });
          const data = await response.json();
          setLoading(false);
          setResult(data);
        } catch (err) {
          console.log(err);
          setLoading(false);
          setError(true);
        }
      }
      requestFetch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return {
      loading,
      error,
      result,
    };
=======
import { useEffect, useState } from 'react'

const useFetchApi = (url, method, headers) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [result, setResult] = useState(null)

    useEffect(() => {
        async function requestFetch(){
            try {
                setLoading(true);
                setError(false)
                const respons = await fetch(url, {
                    method: method || "GET",
                    headers: headers,

                })
                const data = await respons.json();
                setLoading(false)
                setResult(data);
                
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }

        }
         requestFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return {
    loading,
    error,
    result
  }
>>>>>>> 078f80e869f1ce2ec474786138ff335c44a4a2a0
}

export default useFetchApi