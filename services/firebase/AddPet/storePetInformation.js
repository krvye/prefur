import { Alert } from "react-native";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "../firebaseConfig";
import { uploadImage } from "./storePetImage";

const storePetInformation = async (
  state,
  dispatch,
  petId,
  image,
  setImage,
  setProgressState,
  setProgress
) => {
  const db = getFirestore(app);
  const PET_INFORMATION_COLLECTION = collection(db, "PET_INFORMATION");
  uploadImage(image, dispatch, setProgressState, setProgress);
  if (
    state.petName === "" ||
    state.color === "" ||
    state.breed === "" ||
    state.location === "" ||
    state.contact === "" ||
    image === null
  ) {
    Alert.alert("Please fill all the fields");
  } else {
    await addDoc(PET_INFORMATION_COLLECTION, {
      timestamp: Date.now(),
      userId: "UID0001",
      petId: petId,
      ...state,
    });
    dispatch({ type: "SET_PET_NAME", payload: "" });
    dispatch({ type: "SET_COLOR", payload: "" });
    dispatch({ type: "SET_BREED", payload: "" });
    dispatch({ type: "SET_LOCATION", payload: "" });
    dispatch({ type: "SET_CONTACT", payload: "" });
    dispatch({ type: "SET_IMAGE_URL", payload: "" });
    setImage(null);
  }
};

export default storePetInformation;
