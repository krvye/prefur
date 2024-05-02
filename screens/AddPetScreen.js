// ImagePickerExample.js
import React, { useReducer, useState } from "react";
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import Form from "../components/AddPet/Form";
import ImagePickerComponent from "../components/AddPet/ImagePickerComponent";
import storePetInformation from "../services/firebase/AddPet/storePetInformation";
import { usePetId } from "../services/firebase/AddPet/retrievePetId";

// Define initial state
const initialState = {
  petName: "",
  color: "",
  breed: "",
  location: "",
  contact: "",
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
  // State Management
  const [state, dispatch] = useReducer(reducer, initialState);
  const [image, setImage] = useState(null);
  const petId = usePetId();

  // Event Handlers

  const handleAddPetButton = () =>
    storePetInformation(state, dispatch, petId, setImage);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "android" ? "height" : "padding"}
      keyboardVerticalOffset={Platform.OS === "android" ? 100 : 0}
    >
      <ImagePickerComponent
        dispatch={dispatch}
        image={image}
        setImage={setImage}
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
    backgroundColor: "#FAF9F6",
  },
});
