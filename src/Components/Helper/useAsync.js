import { useState, useEffect, useCallback } from 'react';

const useAsync = (asyncFunction, immediate = true) => {
    const [status, setStatus] = useState('idle');
    const [returnValue, setReturnValue] = useState(false);
    const [error, setError] = useState(null);

    const execute = useCallback(() => {
        setStatus('pending');
        setReturnValue(false);
        setError(null);

        return asyncFunction()
        .then(response  => {
            setStatus('success');
            setReturnValue(true);
            setError(response.data.message);
        }).catch(err => {
            setStatus('error');
            setReturnValue(false);
            setError(err.data.message);
            console.log('error', err);
        });
    }, [asyncFunction]);

    useEffect(() => {
        if(immediate){
            execute();
        }
    }, [execute, immediate]);

    return {
        execute, status, returnValue, error
    }

};
export default useAsync