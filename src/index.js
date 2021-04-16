import { BottomNavigation } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BottomNavigation style = {{
       zIndex:1,
      position:"fixed",
      width:'100%',
      top:0,
 backgroundColor: "#C4B5FD"}}
      >
    </BottomNavigation>
    <App />
    <BottomNavigation style = {{
      position:"fixed",
      width:'100%',
      bottom:0,
 backgroundColor: "#C4B5FD"}}
      >
    </BottomNavigation>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

