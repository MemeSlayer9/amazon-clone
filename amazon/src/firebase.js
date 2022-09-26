import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9T7tHU3p5ojU3lZNaDw2pdsDlHvrg4ws",
  authDomain: "clone-6f297.firebaseapp.com",
  databaseURL: "https://clone-6f297.firebaseio.com",
  projectId: "clone-6f297",
  storageBucket: "clone-6f297.appspot.com",
  messagingSenderId: "488982098778",
  appId: "1:488982098778:web:60946993e10377e9cbf963",
  measurementId: "G-32EHBRR2EH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
