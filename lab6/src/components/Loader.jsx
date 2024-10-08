import React from 'react';
import useFetch from '../hooks/useFetch';

const Loader = ({ isLoading, children }) => {
    return (
        <>
            {isLoading && <p>Loading...</p> }
            {children}
        </>
    );
};

export default Loader;
