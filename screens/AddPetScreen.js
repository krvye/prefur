// ImagePickerExample.js
import React, { useReducer, useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
  ScrollView,
} from "react-native";
import Form from "../components/AddPet/Form";
import ImagePickerComponent from "../components/AddPet/ImagePickerComponent";
import storePetInformation from "../services/firebase/AddPet/storePetInformation";
import ProgressBar from "../components/AddPet/ProgressBar";
import { usePetId } from "../services/firebase/AddPet/retrievePetId";
import CustomAlertModal from "../components/AddPet/CustomAlertModal";
import AddedSuccessfully from "../components/AddPet/AddedSuccessfully";
import { set } from "firebase/database";

// Define initial state
const initialState = {
  petType: "",
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
    case "SET_PET_TYPE":
      return { ...state, petType: action.payload };
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
  const [addedModalState, setAddedModalState] = useState(false);
  const [progress, setProgress] = useState(0);
  const petId = usePetId();

  // Event Handlers

  const handleAddPetButton = () =>
    storePetInformation(state, petId, image, setModalState, setAddedModalState);

  return (
    <KeyboardAvoidingView
      style={[styles.container, themeBackgroundColor]}
      behavior={Platform.OS === "android" ? "height" : "padding"}
    >
      <ScrollView style={styles.scrollContainer}>
        <ImagePickerComponent
          dispatch={dispatch}
          image={image}
          setImage={setImage}
          setProgressState={setProgressState}
          setProgress={setProgress}
        />
        <CustomAlertModal
          modalState={modalState}
          setModalState={setModalState}
        />
        <AddedSuccessfully
          addedModalState={addedModalState}
          setAddedModalState={setAddedModalState}
          petType={state.petType}
          dispatch={dispatch}
          setImage={setImage}
        />
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  scrollContainer: {
    marginTop: "5%",
  },
});
