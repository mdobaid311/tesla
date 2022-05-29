import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyB9dnMEB5_LDmnvlYJuHcuwGCZf4MazIGo",
    authDomain: "tesla-3c00e.firebaseapp.com",
    projectId: "tesla-3c00e",
    storageBucket: "tesla-3c00e.appspot.com",
    messagingSenderId: "325311532087",
    appId: "1:325311532087:web:f222078ac7b985e57c83b2",
    measurementId: "G-80P2PCWS2T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth()
let x = 1
export {
    auth,
    x
}