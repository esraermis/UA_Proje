import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvRJin1wOGrAo1BxlXHvGTM5SZhuNO21k",
  authDomain: "deneme-e5f91.firebaseapp.com",
  projectId: "deneme-e5f91",
  storageBucket: "deneme-e5f91.appspot.com",
  messagingSenderId: "553765311097",
  appId: "1:553765311097:web:28766e41a49bcc89423aa8",
  measurementId: "G-21C37M71GH"
};

const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};
