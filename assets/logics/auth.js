import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase";

export default class Auth {
	constructor() {
		if (!firebase.apps || !firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
		} else {
			firebase.app();
		}
	}

	createUser(email, password) {
		return firebase.auth().createUserWithEmailAndPassword(email, password);
	}
}
