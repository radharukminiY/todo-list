import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyC1tyI9Wbdp5zhy9qXl0pQyjOkd0rvk3Lg",
  authDomain: "todo-list-40a32.firebaseapp.com",
  databaseURL: "https://todo-list-40a32-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-list-40a32",
  storageBucket: "todo-list-40a32.appspot.com",
  messagingSenderId: "1005969185406",
  appId: "1:1005969185406:web:2ff355b5f500983478d62f",
  measurementId: "G-CN4T3B8H59"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
