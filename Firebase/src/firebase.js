// import * as firebase from "firebase";
// import "firebase/database";

import firebase from 'firebase/app';
import 'firebase/database';
let config = {
    apiKey: "AIzaSyAqjgTsL9L1AlghmzVl7Olj6yrE4x4uVwk",
    authDomain: "bio-data-60ed2.firebaseapp.com",
    databaseURL: "https://bio-data-60ed2.firebaseio.com",
    projectId: "bio-data-60ed2",
    storageBucket: "bio-data-60ed2.appspot.com",
    messagingSenderId: "657738673837",
    appId: "1:657738673837:web:70aea95e9e51161e51a024"
};
// initialise firebase
firebase.initializeApp(config);

export default firebase.database()

