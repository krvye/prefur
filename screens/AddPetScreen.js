// ImagePickerExample.js
import React, { useReducer, useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
} from "react-native";
import Form from "../components/AddPet/Form";
import ImagePickerComponent from "../components/AddPet/ImagePickerComponent";
import storePetInformation from "../services/firebase/AddPet/storePetInformation";
import ProgressBar from "../components/AddPet/ProgressBar";
import { usePetId } from "../services/firebase/AddPet/retrievePetId";
import CustomAlertModal from "../components/AddPet/CustomAlertModal";

// Define initial state
const initialState = {
  petName: "",
  color: "",
  breed: "",
  location: "",
  contact: "",
  imageURL: "",
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PET_NAME":
      return { ...state, petName: action.payload };
    case "SET_COLOR":
      return { ...state, color: action.payload };
    case "SET_BREED":
      return { ...state, breed: action.payload };
    case "SET_LOCATION":
      return { ...state, location: action.payload };
    case "SET_CONTACT":
      return { ...state, contact: action.payload };
    case "SET_IMAGE_URL":
      return { ...state, imageURL: action.payload };
    default:
      return state;
  }
};

export default function AddPetScreen() {
  const colorScheme = useColorScheme();
  const themeBackgroundColor =
    colorScheme === "light"
      ? { backgroundColor: "#FAF9F6" }
      : { backgroundColor: "#122129" };
  const themeTextColor = colorScheme === "light" ? "#122129" : "#FAF9F6";

  // State Management
  const [state, dispatch] = useReducer(reducer, initialState);
  const [image, setImage] = useState(null);
  const [progressState, setProgressState] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [progress, setProgress] = useState(0);
  const petId = usePetId();

  // Event Handlers

  const handleAddPetButton = () =>
    storePetInformation(
      state,
      dispatch,
      petId,
      image,
      setImage,
      setProgressState,
      setProgress,
      setModalState
    );

  return (
    <KeyboardAvoidingView
      style={[styles.container, themeBackgroundColor]}
      behavior={Platform.OS === "android" ? "height" : "padding"}
      // keyboardVerticalOffset={Platform.OS === "android" ? 100 : 0}
    >
      <ImagePickerComponent
        dispatch={dispatch}
        image={image}
        setImage={setImage}
      />
      <CustomAlertModal modalState={modalState} setModalState={setModalState} />
      <ProgressBar
        progressBarState={progressState}
        image={image}
        petName={state.petName}
        progress={progress * 2.3}
      />
      <Form
        state={state}
        dispatch={dispatch}
        handleAddPetButton={handleAddPetButton}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
