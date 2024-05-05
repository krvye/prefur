import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const signInAccount = async (email, password) => {
  const auth = getAuth();

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
