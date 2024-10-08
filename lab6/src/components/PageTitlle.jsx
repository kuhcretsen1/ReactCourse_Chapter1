import React from 'react';
import useFetch from '../hooks/useFetch.js';

const PageTitle = () => {
  const { data, isLoading } = useFetch('https://your-api-endpoint.com/title'); // Заміни на ваш URL

  if (isLoading) {
    return <h1>Loading...</h1>; 
  }

  return (
    <h1>
      {data.title} {/* Припустимо, що дані мають поле title */}
    </h1>
  );
};

export default PageTitle;
