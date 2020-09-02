import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD1T3YJSijyubNrpnze6yoWNzynZHI6vM8",
  authDomain: "facebook-messenger-clone-b4c9b.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-b4c9b.firebaseio.com",
  projectId: "facebook-messenger-clone-b4c9b",
  storageBucket: "facebook-messenger-clone-b4c9b.appspot.com",
  messagingSenderId: "428244941439",
  appId: "1:428244941439:web:ca81928f179e05bae75d4a",
  measurementId: "G-QKYSQ98RVN",
});

const db = firebaseApp.firestore();
export default db;
