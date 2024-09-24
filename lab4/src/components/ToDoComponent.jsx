import React from 'react';
import useFetch from './useFetch';

const ToDoComponent = () => {
  const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data && data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default ToDoComponent;
