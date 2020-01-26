import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBFh8k_LzmqK9p5BnTgbqMd_8hwI_iCMi8",
    authDomain: "fireaul.firebaseapp.com",
    databaseURL: "https://fireaul.firebaseio.com",
    projectId: "fireaul",
    storageBucket: "fireaul.appspot.com",
    messagingSenderId: "209774257549",
    appId: "1:209774257549:web:b16bb5fc650ea3075949c4",
    measurementId: "G-1JVFRN54C3"
  };

var fire = firebase.initializeApp(firebaseConfig);

export default fire;