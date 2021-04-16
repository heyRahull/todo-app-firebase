import React, { useEffect, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
// import RestoreIcon from '@material-ui/icons/RestoreIcon';

function App() {
  const[todos,setTodos] = useState([]);
  const[input,setInput] = useState("");

  //When the app loads, we need to listen the database and fetch new todos as they get added/removed.
  useEffect(() =>{
    //this code here... fires when App.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc =>({ 
        id : doc.id,
        todo : doc.data().todo,
      })))
    })
  }, []);

  const addTodo = (event) =>{

    //adding input to the database
    db.collection('todos').add({  
     todo : input ,
     timestamp : firebase.firestore.FieldValue.serverTimestamp() //adding timestamp when the input is added so that we can sort the todos accrdng to timestamps
    })
    event.preventDefault();
    setTodos([...todos,input]);
    setInput("");
  }



  return (
    <div className="App"> 
   <div className="container">
      <h1 style={{backgroundColor: '#C4B5FD',position:'fixed',top:0, width:'100%'}}>📝 To Do APP 📝</h1><br/><br/>

     <br/><br/><br/>
     <form style={{position:'fixed', width:'100%'}}>
      <FormControl >
        <InputLabel style={{color:'black'}} >Write a Todo</InputLabel>
        <Input value={input} onChange={(event) => { setInput(event.target.value) } } type="text"  />
      </FormControl>

      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
      </form>
     <br/>
     </div>
 
      <ul style={{paddingTop:'15em'}}>
        {todos.map((obj) => {    //from todos array we are taking each obj{id: , todo: }
          return <Todo todo={obj}/>
          })
        }
      </ul>
      

    </div>
  )
}

export default App
