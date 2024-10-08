import React, { useState } from "react";
import ToDoTable from "./ToDoTable";
import AddToDoComponent from "./AddToDoComponent";
import ToDoStats from "./ToDoStats";
import useFetch from "./hooks/useFetch";
import SearchInput from "./SearchInput";

function TodoContainer() {
  const [newToDo, setNewToDo] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: toDos, setData: setToDos, isLoading } = useFetch("https://jsonplaceholder.typicode.com/todos");

  const handleAddToDo = (event) => {
    event.preventDefault();
    if (newToDo) {
      setToDos([...toDos, { id: Math.random(), title: newToDo }]);
      setNewToDo("");
    }
  };

  const handleRemoveToDo = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredToDos = toDos.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <AddToDoComponent
        newToDo={newToDo}
        onNewToDoChange={(e) => setNewToDo(e.target.value)}
        onAddToDo={handleAddToDo}
      />
      <SearchInput searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      
      {isLoading ? ( //Condisinal rendering
        <p>Loading...</p>
      ) : (
        <>
          <ToDoTable toDos={filteredToDos} onRemoveToDo={handleRemoveToDo} />
          <ToDoStats tasks={toDos} />
        </>
      )}
    </>
  );
}

export default TodoContainer;
