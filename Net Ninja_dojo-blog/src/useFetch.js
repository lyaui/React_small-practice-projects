import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setErrorMsg] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(async () => {
      try {
        const response = await fetch(url, { signal: abortCont.signal });
        const data = await response.json();
        setData(data);
        setErrorMsg(null);
      } catch (err) {
        if (err.name !== 'AbortError') setErrorMsg(err.message);
      } finally {
        setIsPending(false);
      }
    }, 500);
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
