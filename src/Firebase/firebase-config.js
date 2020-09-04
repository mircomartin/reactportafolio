import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBLmgy8kb8Fo-L0sq7djUQFZ5D6nQSnhkQ",
    authDomain: "portafolio-143f4.firebaseapp.com",
    databaseURL: "https://portafolio-143f4.firebaseio.com",
    projectId: "portafolio-143f4",
    storageBucket: "portafolio-143f4.appspot.com",
    messagingSenderId: "187727772230",
    appId: "1:187727772230:web:fddd2d65e7c0ff2ea1e847"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
    db,
    firebase
}