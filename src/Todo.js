import React, { useState } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Modal,
} from "@material-ui/core";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import "./index.css";
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function Todo(props) {
  const[open,setOpen] = useState(false);
  const[input,setInput] = useState();
  const classes = useStyles();

  const updateTodoHandler = () =>{
    db.collection('todos').doc(props.todo.id).set({todo : input} ,{ merge:true});
    setOpen(false);
  }

  return (
    <div>

      <Modal
        open={open}
        // onClose={handleClose}
      >
        <div className={classes.paper}>
          <form action="">
            <CloseIcon onClick={event => setOpen(false)} cursor="pointer" style={{float:"right"}}></CloseIcon>
          <h1>Edit Todo</h1>
          <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} type="text"/>
          <Button color="primary" variant="contained" style={{margin:"1em"}}type="submit" cursor="pointer" onClick={updateTodoHandler}>Update Todo</Button>
          </form>
        </div>
      </Modal>

      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar></ListItemAvatar>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText
            primary={props.todo.todo}
            secondary="Todo"
            style={{ display: "inline" }}
          />
        </ListItem>
      </List>

      <EditIcon onClick={event => setOpen(true)} className="edit__icon" cursor="pointer">
      </EditIcon>
      <DeleteForeverIcon
        cursor="pointer"
        onClick={(event) => db.collection("todos").doc(props.todo.id).delete()}
      >
        Delete
      </DeleteForeverIcon>
    </div>
  );
}

export default Todo;
