import { initializeApp } from "firebase/app";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

import { getStorage } from "firebase/storage";

import { 
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaOoJKm4YmWml_VJvy6PkmK8gf8_iKIck",
  authDomain: "massageparlor-fbed1.firebaseapp.com",
  projectId: "massageparlor-fbed1",
  storageBucket: "massageparlor-fbed1.appspot.com",
  messagingSenderId: "715960495245",
  appId: "1:715960495245:web:8c6dae3054800e744a06c4",
  measurementId: "G-9BNP6R26MF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const registerUser = async (email, password) => {
    try {
    const res = await createUserWithEmailAndPassword(auth, email, password); 
    const user = res.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

const emailPasswordSignin = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);    
    let user = res.user;
    return user;
    console.log(user);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}



//signIn with google
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
      console.log(user.displayName)
      return user.displayName;
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const logout = () => {
  signOut(auth);
};

export {
  storage,
  auth,
  db,
  signInWithGoogle,
  emailPasswordSignin,
  registerUser,
  logout,
};
