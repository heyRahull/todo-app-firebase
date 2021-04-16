import React from "react";
import { Grid, List,ListItem,ListItemAvatar, ListItemText,} from "@material-ui/core";


function Todo(props) {
  return (
    <div className="Todo">
        
      <List>
      
        <ListItem alignItems="flex-start">
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.text} secondary="Todo" />
        </ListItem>
      
      </List>
     
    </div>
  );
}

export default Todo;
