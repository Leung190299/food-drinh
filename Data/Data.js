import * as firebase from "firebase";
import 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyCKaokNrtTMRiZLaTQxFe7gSgBEcqOfQS0",
    authDomain: "drink-c0d54.firebaseapp.com",
    databaseURL: "https://drink-c0d54.firebaseio.com",
    projectId: "drink-c0d54",
    storageBucket: "drink-c0d54.appspot.com",
    messagingSenderId: "852143215568",
    appId: "1:852143215568:web:29e7184c85d25aeb0a9fd5",
    measurementId: "G-T1P9PCT886"
  };
  // Initialize Firebase
 export const Data =firebase.initializeApp(firebaseConfig);