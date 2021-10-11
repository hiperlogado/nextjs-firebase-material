import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, doc, getDoc,updateDoc } from 'firebase/firestore'
import { GoogleAuthProvider, getAuth, signInWithPopup,signOut,signInWithRedirect } from "firebase/auth"

const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APPID    
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const provider = new GoogleAuthProvider();

export { db, collection, getDocs, setDoc, doc, getDoc, provider, getAuth, signInWithPopup, signInWithRedirect, updateDoc,signOut };
