import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

var firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyD6VrKlckz1ldd0hNpXLdFkzi7jUfpL9OU",
  authDomain: "scratch-card-9187f.firebaseapp.com",
  projectId: "scratch-card-9187f",
  storageBucket: "scratch-card-9187f.appspot.com",
  messagingSenderId: "96981148584",
  appId: "1:96981148584:web:094a0526c41d61ab3ff39d"
});


var db = firebaseApp.firestore();

export  {db};