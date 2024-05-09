import React, { useEffect, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import UserProfile from "../components/Profile/UserProfile";
import UserPets from "../components/Profile/UserPets";
import { getUserInformation } from "../services/firebase/Profile/retrieveUserInfo";
import { getUserPetInformation } from "../services/firebase/Profile/retrieveUserPets"; 

export default function Profile() {
  const userInfo = getUserInformation();
  const petInfo = getUserPetInformation(); 

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.innerContainer}>
        <UserProfile userInfo={userInfo} />
        <UserPets petInfo={petInfo} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
        // backgroundColor: "blue",

  },
});
