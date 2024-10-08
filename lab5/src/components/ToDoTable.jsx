import React, { useState } from "react";

const ToDoTable = ({ toDos, onRemoveToDo, onUpdateToDo }) => {
  const [editingId, setEditingId] = useState(null); 
  const [editValue, setEditValue] = useState("");   

  const handleEditClick = (id, title) => {
    setEditingId(id);  
    setEditValue(title);
  };

  const handleSaveClick = (id) => {
    onUpdateToDo(id, editValue); 
    setEditingId(null); 
  };

  const handleCancelClick = () => {
    setEditingId(null); 
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((toDo) => (
          <tr key={toDo.id}>
            <td>
              {editingId === toDo.id ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)} // Controlled component
                />
              ) : (
                toDo.title
              )}
            </td>
            <td>
              {editingId === toDo.id ? (
                <>
                  <button onClick={() => handleSaveClick(toDo.id)}>Save</button>
                  <button onClick={handleCancelClick}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEditClick(toDo.id, toDo.title)}>Edit</button>
                  <button onClick={() => onRemoveToDo(toDo.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ToDoTable;
