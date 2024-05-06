import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDVcgFyH2aLWy0XWFDsKoSEUneYJ4kkJl8",
  authDomain: "prefur-f7e1d.firebaseapp.com",
  projectId: "prefur-f7e1d",
  storageBucket: "prefur-f7e1d.appspot.com",
  messagingSenderId: "1082769008735",
  appId: "1:1082769008735:web:8e79fbec935747900ad3ea",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { app, db };
// export default app;
