import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseConfig";

const auth = getAuth(app);

const signInAccount = async (email, password) => {
  
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    console.log("User signed in successfully!");
    
    return user.uid;
  } catch (error) {
    throw error;
  }
};

export default signInAccount;
