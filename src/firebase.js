import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDwui6bsXiReHxYIbtO0zI2nU4BICxtwb4",
    authDomain: "curator-rater.firebaseapp.com",
    databaseURL: "https://curator-rater.firebaseio.com",
    projectId: "curator-rater",
    storageBucket: "curator-rater.appspot.com",
    messagingSenderId: "434513124471"
  };
  firebase.initializeApp(config);

export default firebase
