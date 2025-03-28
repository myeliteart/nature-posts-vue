import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBOnLwlejBuadYMSMDmuAT8tSX5BYu2b3Y",
    authDomain: "vue-http-demo-2c5e0.firebaseapp.com",
    databaseURL: "https://vue-http-demo-2c5e0-default-rtdb.firebaseio.com",
    projectId: "vue-http-demo-2c5e0",
    storageBucket: "vue-http-demo-2c5e0.firebasestorage.app",
    messagingSenderId: "140528091991",
    appId: "1:140528091991:web:597356899d7ebc1d02f412"
  };

initializeApp(firebaseConfig);

const DB = getFirestore();
const AUTH = getAuth();

export { DB, AUTH}