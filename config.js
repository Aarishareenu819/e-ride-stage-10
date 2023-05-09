import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBIHm8fT9DHmqiYnIk6-4GsjjJn8LkiiDQ",
  authDomain: "e-rider-app-e438a.firebaseapp.com",
  projectId: "e-rider-app-e438a",
  storageBucket: "e-rider-app-e438a.appspot.com",
  messagingSenderId: "131332491242",
  appId: "1:131332491242:web:aecf7162aeec26fadc1493"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
