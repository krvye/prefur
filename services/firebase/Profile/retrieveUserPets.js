import { useEffect, useState } from "react";
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "../firebaseConfig";

export const getUserPetInformation = () => {
    const [userPetInfo, setUserPetInfo] = useState([]);
    const auth = getAuth(app);

    useEffect(() => {
        const fetchUserPetInfo = async () => {
            try {
                const db = getFirestore(app);
                const PET_INFORMATION_COLLECTION = collection(db, "PET_INFORMATION");
                const currentUserUid = auth.currentUser.uid;
                const q = query(PET_INFORMATION_COLLECTION, where("userId", "==", currentUserUid));
                const unsubscribe = onSnapshot(q, (snapshot) => {
                    const userPetInfoData = [];
                    snapshot.forEach((doc) => {
                        userPetInfoData.push({ doc_id: doc.id, ...doc.data() });
                    });
                    setUserPetInfo(userPetInfoData);
                    console.log("Pet Information for User UID:", userPetInfoData);
                });
                return () => unsubscribe();
            } catch (error) {
                console.error("Error fetching user pet information:", error);
            }
        };
        if (auth.currentUser) {
            fetchUserPetInfo();
        } else {
            console.log("User is not signed in");
        }

    }, [auth]);

    return userPetInfo;
};
