// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEjkjOcJzmiezlc7kTzB3P3gIvDjoBDb8",
    authDomain: "genius-car-services-e32d8.firebaseapp.com",
    projectId: "genius-car-services-e32d8",
    storageBucket: "genius-car-services-e32d8.appspot.com",
    messagingSenderId: "886695774333",
    appId: "1:886695774333:web:b3950a3d86894b4f630914"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;