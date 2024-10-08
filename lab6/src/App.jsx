import React ,{ useState } from "react";
import "./App.css";
import TodoContainer from "./components/TodoContainer";
import PageTitlle from "./components/PageTitlle";

function App() {

  return (
   <>
<PageTitlle title = "ToDoApp"/>
<TodoContainer/>
    </>
  );
}



export default App;

