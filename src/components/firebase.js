// src/firebase.js
import firebase from "firebase"

  // Your web app's Firebase configuration
  var firebaseConfig = {

    apiKey: "AIzaSyAuWSW8mQhy7iWoL7tojxkzvGrVwulfrwA",
  authDomain: "crypto-11b57.firebaseapp.com",
  databaseURL: "https://crypto-11b57.firebaseio.com",
  projectId: "crypto-11b57",
  storageBucket: "crypto-11b57.appspot.com",
  messagingSenderId: "347616052004",
  appId: "1:347616052004:web:41c2b359d1f22eec7829b1",
  measurementId: "G-HLCE1GK3RM"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();



export default firebase;
