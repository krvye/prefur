import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UserPets({ userPetInfo }) {
  console.log("Pet Info :", userPetInfo);
  const hasPetInfo = userPetInfo && Array.isArray(userPetInfo) && userPetInfo.length > 0;

  return (
    <View style={styles.container}>
      {hasPetInfo ? (
        <>
          <Text>Breed: {userPetInfo[0].breed}</Text>
          <Text>Contact: {userPetInfo[0].contact}</Text>
          <Text>Location: {userPetInfo[0].location}</Text>
          <Text>Pet Name: {userPetInfo[0].petName}</Text>
          <Text>Pet Type: {userPetInfo[0].petType}</Text>
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
