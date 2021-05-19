import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC2KLGZQYxmaPokF3e7QttZu1Hz-X_sNIM",
  authDomain: "clone-6eb4b.firebaseapp.com",
  projectId: "clone-6eb4b",
  storageBucket: "clone-6eb4b.appspot.com",
  messagingSenderId: "921453282423",
  appId: "1:921453282423:web:6d20951ac19406efbf3272",
  measurementId: "G-9LBBVWH0MM"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
