import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyC542cfob7WkkSV9GspRUCQBAQ1OVOl4rk",
	authDomain: "react-app-journal-988bc.firebaseapp.com",
	projectId: "react-app-journal-988bc",
	storageBucket: "react-app-journal-988bc.appspot.com",
	messagingSenderId: "499506496495",
	appId: "1:499506496495:web:6b9bc8ab52488ef5d76c1a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
	db,
	googleAuthProvider,
	firebase
};

