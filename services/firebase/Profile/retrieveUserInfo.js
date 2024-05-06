// firebaseUtils.js
import { useEffect, useState } from "react";
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "../firebaseConfig";

export const getUserInformation = () => {
  const [userInfo, setUserInfo] = useState([]);
  const auth = getAuth(app);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const db = getFirestore(app);
        const USER_INFORMATION_COLLECTION = collection(db, "USER_INFORMATION");
        const currentUserUid = auth.currentUser.uid;
        const q = query(USER_INFORMATION_COLLECTION, where("UID", "==", currentUserUid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const userInfoData = [];
          snapshot.forEach((doc) => {
            userInfoData.push({ doc_id: doc.id, ...doc.data()});
          });
          setUserInfo(userInfoData);
          console.log("User Information: ", userInfoData);
        });
        return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    // Check if user is signed in before fetching information
    if (auth.currentUser) {
      fetchUserInfo();
    } else {
      console.log("User is not signed in");
    }

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, [auth]);

  return userInfo;
};
