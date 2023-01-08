import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD20RUc6v-a5rBb7qdhg1rDni5cHVRkRSQ",
  authDomain: "sportwear-80cc7.firebaseapp.com",
  projectId: "sportwear-80cc7",
  storageBucket: "sportwear-80cc7.appspot.com",
  messagingSenderId: "456875652013",
  appId: "1:456875652013:web:34ae4528fc4f18b39da724"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

