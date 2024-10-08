import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);  
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true); 
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data); 
                setIsLoading(false); 
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false); 
            });
    }, [url]);

    return { data, setData, isLoading }; 
};

export default useFetch;
