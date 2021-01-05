import { useState, useEffect, useCallback } from 'react';

// Hook
const useAsync = (asyncFunction, immediate = true) => {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const execute = useCallback(() => {
      setStatus('pending');
      setData([]);
      setError(null);
  
      return asyncFunction()
        .then(response => {
          setData([response]);
          setStatus('success');
          setError(response.data.message);
        })
        .catch(error => {
          setError(error);
          setStatus('error');
          setError(error.data.message);
        });
    }, [asyncFunction]);
  
    useEffect(() => {
      if (immediate) {
        execute();
      }
    }, [execute, immediate]);
  
    return { execute, status, data, error };
  };
export default useAsync