import Vue from "vue";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCoYpAUX7F-_jyZVW8yK3mhnqVXJo6YdMs",
    authDomain: "foodsamcparkercouk.firebaseapp.com",
    databaseURL: "https://foodsamcparkercouk.firebaseio.com",
    projectId: "foodsamcparkercouk",
    storageBucket: "foodsamcparkercouk.appspot.com",
    messagingSenderId: "973654456128",
    appId: "1:973654456128:web:6526e4e98b04fdb6c92ca5",
    measurementId: "G-F84N4HB81D"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


Vue.use(firebase);