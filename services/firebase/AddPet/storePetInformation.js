import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "../firebaseConfig";
import { uploadImage } from "./storePetImage";
import { getAuth } from "firebase/auth";
import { set } from "firebase/database";

const auth = getAuth(app);

const storePetInformation = async (
  state,
  petId,
  image,
  setModalState,
  setAddedModalState
) => {
  const db = getFirestore(app);
  const PET_INFORMATION_COLLECTION = collection(db, "PET_INFORMATION");

  if (
    state.petType === "" ||
    state.petName === "" ||
    state.color === "" ||
    state.breed === "" ||
    state.location === "" ||
    state.contact === "" ||
    image === null
  ) {
    setModalState(true);
  } else {
    try {
      await addDoc(PET_INFORMATION_COLLECTION, {
        timestamp: Date.now(),
        userId: auth.currentUser.uid,
        petId: petId,
        adoptionStatus: "Available",
        ...state,
      });

      setAddedModalState(true);
    } catch (error) {
      // Handle errors here
    }
  }
};

export default storePetInformation;
