import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCtaUohCEHdIkb8KfTw3C0PClecV5qf_k4",
    authDomain: "pro-71-e42a1.firebaseapp.com",
    projectId: "pro-71-e42a1",
    storageBucket: "pro-71-e42a1.appspot.com",
    messagingSenderId: "194207158445",
    appId: "1:194207158445:web:399c342acd6500d9b3f624"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
