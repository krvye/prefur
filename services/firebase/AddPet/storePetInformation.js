import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "../firebaseConfig";
import { uploadImage } from "./storePetImage";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

const storePetInformation = async (
  state,
  dispatch,
  petId,
  image,
  setImage,
  setProgressState,
  setProgress,
  setModalState
) => {
  const db = getFirestore(app);
  const PET_INFORMATION_COLLECTION = collection(db, "PET_INFORMATION");
  uploadImage(image, dispatch, setProgressState, setProgress);

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

      dispatch({ type: "SET_PET_TYPE", payload: "" });
      dispatch({ type: "SET_PET_NAME", payload: "" });
      dispatch({ type: "SET_COLOR", payload: "" });
      dispatch({ type: "SET_BREED", payload: "" });
      dispatch({ type: "SET_LOCATION", payload: "" });
      dispatch({ type: "SET_CONTACT", payload: "" });
      dispatch({ type: "SET_IMAGE_URL", payload: "" });
      setImage(null);
    } catch (error) {
      // Handle errors here
    }
  }
};

export default storePetInformation;
