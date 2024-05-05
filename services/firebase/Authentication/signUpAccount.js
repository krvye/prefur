import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const signUpAccount = async (email, password, firstName, lastName) => {
  const auth = getAuth();

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userInfo = {
      emailAddress: email,
      UID: user.uid,
      firstName,
      lastName
    };

    await addDoc(collection(db, "USER_INFORMATION"), userInfo);
    return user.uid;
  } catch (error) {

    if (error.code === "auth/email-already-in-use") {

    } else {
    }

    throw error;
  }
};

export default signUpAccount;
