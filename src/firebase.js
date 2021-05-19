import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDkLNaluS33wD-GPQAkBlZ6fUo292vLtTQ",
  authDomain: "clone-72118.firebaseapp.com",
  projectId: "clone-72118",
  storageBucket: "clone-72118.appspot.com",
  messagingSenderId: "6628699120",
  appId: "1:6628699120:web:c40d763094ce47fc88cb35",
  measurementId: "G-Q0C3V2BWY6"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
