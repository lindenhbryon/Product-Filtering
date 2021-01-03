import { useState, useEffect, useCallback } from 'react';

const useAsync = (asyncFunction, immediate = true) => {
    const [status, setStatus] = useState('idle');
    const [value, setValue] = useState(false);
    const [error, setError] = useState(null);

    const execute = useCallback(() => {
        setStatus('pending');
        setValue(false);
        setError(null);

        return asyncFunction()
        .then(response  => {
            setStatus('success');
            setValue(true);
            setError(response.data.message);
        }).catch(err => {
            setStatus('error');
            setValue(false);
            setError(err.data.message);
            console.log('error', err);
        });
    }, [asyncFunction]);

    useEffect(() => {
        if(immediate){
            execute();
        }
    }, [execute]);

    return {
        execute, status, value, error
    }

};
export default useAsync