
import * as firebase from "firebase";


// saqib
var firebaseConfig = {
    apiKey: "AIzaSyDxHnjhGFOW1_3GM0H7F7TR509zWSDtKik",
    authDomain: "patient-tracking-591a2.firebaseapp.com",
    projectId: "patient-tracking-591a2",
    databaseURL: "https://patient-tracking-591a2.firebaseio.com",
    storageBucket: "patient-tracking-591a2.appspot.com",
    messagingSenderId: "261170644307",
    appId: "1:261170644307:web:94a456a7dddf81c93e4da6",
    measurementId: "G-5PRZNN5JW9"
};
if (!firebase.apps.length) {
    firebase.initializeApp({});
}
export const db = firebase.app().firestore();
export const auth = firebase.app().auth();