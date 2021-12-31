import {useState, useCallback} from 'react';

const useHttp = (/*applyData*/) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
            setIsLoading(true);
            setError(null);
            try {
            const response = await fetch(
                requestConfig.url, {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: JSON.stringify(requestConfig.body) ? JSON.stringify(requestConfig.body) : null
                }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();

            applyData(data);

            } catch (err) {
            setError(err.message || 'Something went wrong!');
            }
            setIsLoading(false);
        }, [/*applyData*/]);// these pieces of data are objects
        //so they will change as well in App.js, therefore you must useCallback
        // them too. or they will rerun and as a new object is being created
        // each time

  //if the property names are the same as the values, you just write it once as a 
  //shortcurt
    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
    };
};

export default useHttp;