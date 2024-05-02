// AddPetForm.js
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
  Feather,
} from "@expo/vector-icons";

export default function Form({ state, dispatch, handleAddPetButton }) {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.textInputLabel}>Pet Name</Text>
      <View style={styles.textInputContainer}>
        <MaterialIcons name="pets" size={24} color="black" />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your pet name"
          value={state.petName}
          onChangeText={(e) => dispatch({ type: "SET_PET_NAME", payload: e })}
        />
      </View>
      <Text style={styles.textInputLabel}>Color</Text>
      <View style={styles.textInputContainer}>
        <MaterialIcons name="invert-colors" size={24} color="black" />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your pet color"
          value={state.color}
          onChangeText={(e) => dispatch({ type: "SET_COLOR", payload: e })}
        />
      </View>
      <Text style={styles.textInputLabel}>Breed</Text>
      <View style={styles.textInputContainer}>
        <MaterialCommunityIcons name="heart" size={24} color="black" />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your pet breed"
          value={state.breed}
          onChangeText={(e) => dispatch({ type: "SET_BREED", payload: e })}
        />
      </View>
      <Text style={styles.textInputLabel}>Location</Text>
      <View style={styles.textInputContainer}>
        <Entypo name="location-pin" size={24} color="black" />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your pet location"
          value={state.location}
          onChangeText={(e) => dispatch({ type: "SET_LOCATION", payload: e })}
        />
      </View>
      <Text style={styles.textInputLabel}>Contact</Text>
      <View style={styles.textInputContainer}>
        <Feather name="phone" size={24} color="black" />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your contact number"
          value={state.contact}
          onChangeText={(e) => dispatch({ type: "SET_CONTACT", payload: e })}
        />
      </View>
      <TouchableOpacity
        style={styles.addPetButton}
        onPress={handleAddPetButton}
      >
        <MaterialIcons name="pets" size={24} color="white" />
        <Text style={styles.addPetButtonText}>Add Pet</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    alignItems: "center",
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInputLabel: {
    alignSelf: "flex-start",
    marginLeft: "19%",
    marginTop: "5%",
  },
  textInput: {
    width: "72%",
    height: 40,
    borderBottomWidth: 1,
    marginLeft: "5%",
  },
  addPetButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 200,
    height: 40,
    backgroundColor: "#135D66",
    margin: 5,
    padding: 5,
    borderRadius: 5,
    marginTop: "10%",
  },
  addPetButtonText: {
    color: "white",
    marginLeft: "5%",
  },
});
