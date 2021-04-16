import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';

function App() {
  const[todos,setTodos] = useState(["Take Bath 🤽","hello","Do coding 💻"]);
  const[input,setInput] = useState("");

  const addTodo = (event) =>{
    event.preventDefault();
    setTodos([...todos,input]);
    setInput("");
  }



  return (
    <div className="App"> 
      <h1>Hello Rahul Agarwal 🚀</h1>

     
     <form>
      <FormControl>
        <InputLabel >Write a Todo</InputLabel>
        <Input value={input} onChange={(event) => { setInput(event.target.value) } } type="text"  />
      </FormControl>

      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
      </form>     

      <ul>
        {todos.map((todo) => {
          return <Todo text={todo}/>
          })
        }
      </ul>
    </div>
  )
}

export default App
