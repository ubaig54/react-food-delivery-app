import firebase from '../../config/firebase';

function signUpUser(userDetails) {
    console.log(userDetails);
    firebase.auth().createUserWithEmailAndPassword(userDetails.email, userDetails.password).then((success) => {
        console.log(success);
        var user = firebase.auth().currentUser;
        var uid;
        if (user !== null) {
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref('users');
        var userData = {
            fullName: userDetails.fullName,
            email: userDetails.email,
            gender: userDetails.gender,
            age: userDetails.age,
            country: userDetails.country,
            city: userDetails.city,
            password: userDetails.password,
        }
        firebaseRef.child(uid).set(userData);
    }).catch((error) => {
        var errorMessage = error.message;

        console.log('Error in Signing up', errorMessage);
    })
}

function signUpRestaurant(userDetails) {
    console.log(userDetails);
    firebase.auth().createUserWithEmailAndPassword(userDetails.email, userDetails.password).then((success) => {
        console.log(success);
        var user = firebase.auth().currentUser;
        var uid;
        if (user !== null) {
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref('restaurant');
        var userData = {
            fullName: userDetails.fullName,
            restaurantName: userDetails.restaurantName,
            email: userDetails.email,
            gender: userDetails.gender,
            age: userDetails.age,
            country: userDetails.country,
            city: userDetails.city,
            password: userDetails.password,
        }
        firebaseRef.child(uid).set(userData);
    }).catch((error) => {
        var errorMessage = error.message;

        console.log('Error in Signing up', errorMessage);
    })
}

function loginUser(userDetails) {
    console.log(userDetails);
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(userDetails.email, userDetails.password).then((success) => {
            console.log(success);
            resolve(success);
        }).catch((error) => {
            var errorMessage = error.message;
            reject(errorMessage);
            console.log('Error in Signing in', errorMessage);
        })
    })
}

function loginRestaurant(userDetails) {
    console.log(userDetails);
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(userDetails.email, userDetails.password).then((success) => {
            console.log(success);
            resolve(success);
        }).catch((error) => {
            var errorMessage = error.message;
            reject(errorMessage);
            console.log('Error in Signing in', errorMessage);
        })
    })
}

export {
    signUpUser,
    loginUser,
    signUpRestaurant,
    loginRestaurant,
};