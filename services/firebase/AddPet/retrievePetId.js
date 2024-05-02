// firebaseUtils.js
import { useEffect, useState } from "react";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import app from "../firebaseConfig";

export const usePetId = () => {
  const [petId, setPetId] = useState("");

  useEffect(() => {
    const db = getFirestore(app);
    const PET_INFORMATION_COLLECTION = collection(db, "PET_INFORMATION");

    const subscribe = onSnapshot(PET_INFORMATION_COLLECTION, (snapshot) => {
      let petCount = 0;
      snapshot.forEach((doc) => {
        petCount++;
      });

      setPetId(`PID000${petCount + 1}`);
    });

    return () => subscribe();
  }, []);

  return petId;
};
