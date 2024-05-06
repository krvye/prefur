import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UserPets({ petInfo }) {
  console.log("Pet Info :", petInfo);
  const hasPetInfo = petInfo && Array.isArray(petInfo) && petInfo.length > 0;

  return (
    <View style={styles.container}>
      {hasPetInfo ? (
        <>
          <Text>Breed: {petInfo[0].breed}</Text>
          <Text>Contact: {petInfo[0].contact}</Text>
          <Text>Location: {petInfo[0].location}</Text>
          <Text>Pet Name: {petInfo[0].petName}</Text>
          <Text>Pet Type: {petInfo[0].petType}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    alignItems: "flex-start", 
    justifyContent: "flex-start", 
    paddingTop: 50, 
  },
});
