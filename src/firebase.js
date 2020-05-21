import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initialize({
  apiKey: "AIzaSyDmT_3hN8DlJ5p86ubBPs-5e3oA5eBwgK4",
  authDomain: "todoist-tut-a79a9.firebaseapp.com",
  databaseURL: "https://todoist-tut-a79a9.firebaseio.com",
  projectId: "todoist-tut-a79a9",
  storageBucket: "todoist-tut-a79a9.appspot.com",
  messagingSenderId: "592461863047",
  appId: "1:592461863047:web:86ae9cd6266ccd9c958022",
});

export { firebaseConfig as firebase };
