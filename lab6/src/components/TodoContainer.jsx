import React, { useState } from 'react';
import AddToDoComponent from './AddToDoComponent';
import SearchInput from './SearchInput';
import Loader from './Loader';
import ToDoTable from './ToDoTable';
import ToDoStats from './ToDoStats';
import useFetch from '../hooks/useFetch';

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

  const handleUpdateToDo = (id, newTitle) => {
    setToDos(
      toDos.map((toDo) => (toDo.id === id ? { ...toDo, title: newTitle } : toDo))
    );
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

      <Loader isLoading={isLoading}>
        <>
          <ToDoTable
            toDos={filteredToDos}
            onRemoveToDo={handleRemoveToDo}
            onUpdateToDo={handleUpdateToDo} // Pass the update function to the table
          />
          <ToDoStats tasks={toDos} />
        </>
      </Loader>
    </>
  );
}

export default TodoContainer;
