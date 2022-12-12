// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCik5WYmqJKuJgktpmyflYoSuJNPnrjum8",
  authDomain: "quiz-react-dev-55a73.firebaseapp.com",
  projectId: "quiz-react-dev-55a73",
  storageBucket: "quiz-react-dev-55a73.appspot.com",
  messagingSenderId: "696366997186",
  appId: "1:696366997186:web:1058206de2b1642b06255b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
export const auth = getAuth();