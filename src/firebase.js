import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrruM9TGUAL0nQf7xLUYeknfRmfJfUV50",
  authDomain: "disneyplus-clone-90c76.firebaseapp.com",
  projectId: "disneyplus-clone-90c76",
  storageBucket: "disneyplus-clone-90c76.appspot.com",
  messagingSenderId: "700534394623",
  appId: "1:700534394623:web:228d2adf56d9f3c45cc6ca",
  measurementId: "G-EZWS8FWBLJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;