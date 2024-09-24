import React,{useEffect,useState} from "react";
import ToDoTable from "./ToDoTable";
import AddToDoComponent from "./AddToDoComponent";
import ToDoStats from "./ToDoStats";

function TodoContainer(){


const [toDos, setToDos] = useState([]); 
const [newToDo, setNewToDo] = useState(""); 
const [searchQuery, setSearchQuery] = useState(""); 

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
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ToDoTable toDos={filteredToDos} onRemoveToDo={handleRemoveToDo} />
      <ToDoStats tasks={toDos} /> {/* Використовуємо ToDoStats */}
    </>
  );
}
  export default TodoContainer;