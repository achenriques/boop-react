// Initialize Firebase
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyA3TphnVaA9tPlM90Il8bnwrUmcYmEhPKc",
  authDomain: "boop-4ec7a.firebaseapp.com",
  databaseURL: "https://boop-4ec7a.firebaseio.com",
  projectId: "boop-4ec7a",
  storageBucket: "boop-4ec7a.appspot.com",
  messagingSenderId: "587628810585"
};
firebase.initializeApp(config);

export default firebase
