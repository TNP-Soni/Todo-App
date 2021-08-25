import React, {useState,useEffect} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Form from "./components/Form"
function App() {

  const [inputtext, setinputtext] = useState(""); 
  const [todos,settodos] = useState([]);
  const [status,setstatus] = useState("all");
  const [filtered,setfilteredtodos] =useState([]);
  useEffect(()=>{
    filterhandler();  
  },[todos,status]);
  const filterhandler =()=>{
    switch(status){
      case "completed" : setfilteredtodos(todos.filter(todo => todo.completed === true));
      break;
      case "uncompleted" :setfilteredtodos(todos.filter(todo => todo.completed !== true));
      break;
      default : setfilteredtodos(todos);
      break;
    }
  }
  return (
    <div className="App">
      <header>
      <h1> Todo List </h1>      
      </header>
      <Form todos={todos} inputtext={inputtext} settodos={settodos} setinputtext={setinputtext} setstatus={setstatus}/>
      <TodoList todos={todos} settodos={settodos} filtered={filtered}/>
    </div>
  );
}

export default App;
