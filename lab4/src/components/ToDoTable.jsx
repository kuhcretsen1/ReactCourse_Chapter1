import React from "react";

const ToDoTable = ({ toDos, onRemoveToDo }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((toDo) => (
          <tr key={toDo.id}>
            <td>{toDo.id}</td>
            <td>{toDo.title}</td>
            <td>
              <button onClick={() => onRemoveToDo(toDo.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default ToDoTable;
