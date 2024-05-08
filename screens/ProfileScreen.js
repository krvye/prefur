import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import UserProfile from "../components/Profile/UserProfile";
import UserPets from "../components/Profile/UserPets";
import { getUserInformation } from "../services/firebase/Profile/retrieveUserInfo";
import { getUserPetInformation } from "../services/firebase/Profile/retrieveUserPets"; 

export default function Profile() {
  const userInfo = getUserInformation();

  const petInfo = getUserPetInformation(); 

  return (
    <View style={styles.container}>
      <UserProfile userInfo={userInfo} />
      <UserPets petInfo={petInfo} />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    
  },
});