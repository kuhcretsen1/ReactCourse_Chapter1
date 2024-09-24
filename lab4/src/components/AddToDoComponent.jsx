import React from "react";

const AddToDoComponent = ({ newToDo, onNewToDoChange, onAddToDo }) => {
  return (
    <form onSubmit={onAddToDo}>
      <input
        type="text"
        placeholder="Add new ToDo"
        value={newToDo}
        onChange={onNewToDoChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

export default AddToDoComponent;
