  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA5SXc4vSR7wlSFyt0raTG3cHbOxSkKWE0",
    authDomain: "todo-app-e6f8a.firebaseapp.com",
    projectId: "todo-app-e6f8a",
    storageBucket: "todo-app-e6f8a.appspot.com",
    messagingSenderId: "646052225055",
    appId: "1:646052225055:web:f7bd4ae299314fccfe752a",
    measurementId: "G-D26JBSMBJQ"

  })

  const db =  firebaseApp.firestore();
  export default db;