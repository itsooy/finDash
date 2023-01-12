import firebase from "firebase/app";
import "firebase/auth";

//set vars for process.env
const firebaseConfig = {
  apiKey: "AIzaSyDnISB-OneOvc6ZKq5HCEZll9BnVm7kVIo",
  authDomain: "findash-b4309.firebaseapp.com",
  projectId: "findash-b4309",
  storageBucket: "findash-b4309.appspot.com",
  messagingSenderId: "223796821566",
  appId: "1:223796821566:web:9ebd6f47af11170d2f1b6f"
};

// if firebase isn't already initialize, initialize using the above credentials
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        unsubscribe();
        resolve(user);
      }, reject);
    })
  };

export default firebase
