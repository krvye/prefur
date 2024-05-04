import React from "react";
import { View, StyleSheet } from "react-native";
import Home from "../components/Home/Home";
import { PetInformation } from "../services/firebase/Home/retrievePetInfo"; 

export default function HomeScreen() {
  const petInfo = PetInformation(); 

  return (
    <View style={styles.container}>
      <Home petInfo = {petInfo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FAF9F6",
  },
});
