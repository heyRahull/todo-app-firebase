import React from "react";
import {  Button, List,ListItem,ListItemAvatar, ListItemText,} from "@material-ui/core";
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

// var date = new Date().toLocaleDateString();
// var time = new Date().toLocaleTimeString();
function Todo(props) {
  return (
    <div >
        
      <List>
      
        <ListItem alignItems="flex-start">
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="Todo" /> 
        </ListItem>
      
      </List>
      <DeleteForeverIcon cursor="pointer" onClick={event =>
      db.collection('todos').doc(props.todo.id).delete()
      }>Delete</DeleteForeverIcon>
     
    </div>
  );
}

export default Todo;
