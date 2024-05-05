// firebaseUtils.js
import { useEffect, useState } from "react";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import app from "../firebaseConfig";

export const PetInformation = () => {
  const [petInfo, setPetInfo] = useState([]);

  useEffect(() => {
    const db = getFirestore(app);
    const PET_INFORMATION_COLLECTION = collection(db, "PET_INFORMATION");

    const subscribePetInfo = onSnapshot(PET_INFORMATION_COLLECTION, (snapshot) => {
        const petInfoData = []; 
      snapshot.forEach((doc) => {
        petInfoData.push({ doc_id: doc.id, ...doc.data()});
      });;
      setPetInfo(petInfoData); 
    });

    return () => subscribePetInfo();
  }, []);

  return petInfo;
};
