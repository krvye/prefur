// firebaseUtils.js
import { useEffect, useState } from "react";
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "../firebaseConfig";

export const getUserImageUrl = () => {
  const [imageUrl, setImageUrl] = useState(""); 
  const auth = getAuth(app);

  useEffect(() => {
    const fetchUserImageUrl = async () => {
      try {
        const db = getFirestore(app);
        const USER_INFORMATION_COLLECTION = collection(db, "USER_INFORMATION");
        const currentUserUid = auth.currentUser.uid;
        const q = query(USER_INFORMATION_COLLECTION, where("UID", "==", currentUserUid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
          snapshot.forEach((doc) => {
            setImageUrl(doc.data().imageUrl);
            // console.log("Image URL:", doc.data().imageUrl);
          });
        });
        return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching user image URL:", error);
      }
    };

    if (auth.currentUser) {
      fetchUserImageUrl();
    } else {
      console.log("User is not signed in");
    }

   
    return () => {
    };
  }, [auth]);

  return imageUrl;
};
