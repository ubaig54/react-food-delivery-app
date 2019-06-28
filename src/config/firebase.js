import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA7zpamQRXJRr_G-l9jJW5FLO0v6ks0xM8",
    authDomain: "react-food-delivery-app.firebaseapp.com",
    databaseURL: "https://react-food-delivery-app.firebaseio.com",
    projectId: "react-food-delivery-app",
    storageBucket: "react-food-delivery-app.appspot.com",
    messagingSenderId: "1023662019698",
    appId: "1:1023662019698:web:f96a90c3891f53cf"
};

firebase.initializeApp(firebaseConfig);

export default firebase;