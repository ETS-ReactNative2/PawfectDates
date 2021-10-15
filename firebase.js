// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/firebase-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL4ApAvsRQojBGvr2fiW5Am5Pgim3NjEo",
  authDomain: "pawfect-auth.firebaseapp.com",
  projectId: "pawfect-auth",
  storageBucket: "pawfect-auth.appspot.com",
  messagingSenderId: "521949667627",
  appId: "1:521949667627:web:138a43f0455caa5657256e"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage();

export { auth, db, storage };