import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDRUrSBj9mYH95xz7INxrJo5N_chY6ulCA",
    authDomain: "awesomeapp-dev.firebaseapp.com",
    databaseURL: "https://awesomeapp-dev.firebaseio.com",
    projectId: "awesomeapp-dev",
    storageBucket: "awesomeapp-dev.appspot.com",
    messagingSenderId: "50450235557",
    appId: "1:50450235557:web:77c16a8e73092ca7b38d4c",
    measurementId: "G-GY44N79J3H"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
