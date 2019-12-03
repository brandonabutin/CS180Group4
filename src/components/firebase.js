  // Your web app's Firebase configuration
  import firebase from 'firebase'
  var firebaseConfig = {
    apiKey: "AIzaSyAatkCueyUuO9l16P5jb0yAnni7aHWXgPw",
    authDomain: "cs180-project-fd743.firebaseapp.com",
    databaseURL: "https://cs180-project-fd743.firebaseio.com/",
    projectId: "cs180-project-fd743",
    storageBucket: "cs180-project-fd743.appspot.com",
    messagingSenderId: "763656744429",
    appId: "1:763656744429:web:0b0ed17b8de3cd3bf8cbe4",
    measurementId: "G-5KPWSRWXS4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //var rootRef = firebase.database().ref();
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;
