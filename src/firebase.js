import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDmuSVdR0wnCTRy1nEgcNsMgyEI48P9xaQ",
    authDomain: "numberlandhassanelsayed.firebaseapp.com",
    databaseURL: "https://numberlandhassanelsayed.firebaseio.com",
    projectId: "numberlandhassanelsayed",
    storageBucket: "numberlandhassanelsayed.appspot.com",
    messagingSenderId: "1052401100505",
    appId: "1:1052401100505:web:5287596107ba308a0bc0c8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;