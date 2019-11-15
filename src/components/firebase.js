// src/firebase.js
import firebase from "firebase"

  // Your web app's Firebase configuration
  var firebaseConfig = {

    apiKey: "AIzaSyBAjUs6ggEZ0tmpBxCp_R7n8xWAUC63JcM",
    authDomain: "crypto-859e0.firebaseapp.com",
    databaseURL: "https://crypto-859e0.firebaseio.com",
    projectId: "crypto-859e0",
    storageBucket: "crypto-859e0.appspot.com",
    messagingSenderId: "853822637057",
    appId: "1:853822637057:web:5b9425a40b34c36c12ec00",
    measurementId: "G-2MQW09V7J7"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();



export default firebase;
