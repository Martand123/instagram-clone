  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC4fyHwEqkY9CXGGT2RX0G6JNAqRcDLUZI",
    authDomain: "instagram-clone-2de8f.firebaseapp.com",
    projectId: "instagram-clone-2de8f",
    storageBucket: "instagram-clone-2de8f.appspot.com",
    messagingSenderId: "197601880436",
    appId: "1:197601880436:web:6378e5588ebc6e27582421",
    measurementId: "G-7MCFP3EWN4"
  });


  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const storage= firebase.storage();

  export {db,auth,storage};