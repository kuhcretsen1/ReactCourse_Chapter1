import { useState } from "react";

export const useToDo = () => {
  const [toDos, setToDos] = useState([]);

  const addToDo = (title) => {
    setToDos([...toDos, { id: Date.now(), title }]);
  };

  const removeToDo = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  return { toDos, addToDo, removeToDo };
};
