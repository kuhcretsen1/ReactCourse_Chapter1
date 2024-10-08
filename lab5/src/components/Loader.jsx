import React from 'react';

const Loader = ({ isLoading, children }) => {
    return (
        <>
            {isLoading && <p>Loading...</p> }
            {children}
        </>
    );
};

export default Loader;
