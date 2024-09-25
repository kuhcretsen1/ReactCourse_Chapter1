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


export default AddToDoComponent;
