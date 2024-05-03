import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAF_DHIisvynBlmvsirEPa4t8ioahf-iFg",
  authDomain: "snapsafari-001.firebaseapp.com",
  projectId: "snapsafari-001",
  storageBucket: "snapsafari-001.appspot.com",
  messagingSenderId: "177982254545",
  appId: "1:177982254545:web:f81cf9bde41418780004f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider };