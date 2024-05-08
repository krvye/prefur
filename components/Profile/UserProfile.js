import React, { useState, useEffect, useReducer } from "react";
import { StyleSheet, Text, View, Button, Modal, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import UserProfilePicker from "./UserProfilePicker";
import ProgressBar from "../AddPet/ProgressBar";
import { getUserImageUrl } from "../../services/firebase/Profile/retrieveUserProfile";
import { Ionicons, Feather, Entypo, FontAwesome } from "@expo/vector-icons";
import LogoutButton from "../../services/firebase/Profile/handleSignOut";

import storeUserInfo from "../../services/firebase/Profile/storeUserInfo";
import { getAuth } from "firebase/auth";
import { app } from "../../services/firebase/firebaseConfig";


const auth = getAuth(app);
const initialState = {
  imageURL: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_IMAGE_URL":
      return { ...state, imageURL: action.payload };
    default:
      return state;
  }
};

export default function UserProfile({ userInfo }) {
  const [userImage, setUserImage] = useState(null);
  const [progressState, setProgressState] = useState(false);
  const [progress, setProgress] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isEditing, setIsEditing] = useState(false);
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const imageURL = getUserImageUrl();

  useEffect(() => {
    dispatch({ type: "SET_IMAGE_URL", payload: imageURL });
  }, [imageURL]);

  const hasUserInfo = userInfo && Array.isArray(userInfo) && userInfo.length > 0;

  const handleEditProfile = () => {
    setIsEditing(true);
    setModalVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleSaveProfile = () => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      console.error("User is not authenticated.");
      return;
    }
    const uid = currentUser.uid;
    const profileData = {
      age: age,
      contact: contact,
      location: location,

    };
    storeUserInfo(uid, profileData);
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.leftColumn}>
          <UserProfilePicker
            setUserImage={setUserImage}
            setProgressState={setProgressState}
            setProgress={setProgress}
            image={imageURL}
            dispatch={dispatch}
          />
          <ProgressBar
            progressBarState={progressState}
            image={state.imageURL}
            petName={state.petName}
            progress={progress * 2.3}
          />
        </View>
        <View style={styles.rightColumn}>
          {hasUserInfo ? (
            <>
              <View style={styles.userInfoContainer}>
                <Text style={styles.nameText}>{userInfo[0].firstName} {userInfo[0].lastName}</Text>
                <Text style={styles.infoText}>{userInfo[0].emailAddress} </Text>
                {userInfo[0].age ? ( 
                  <Text style={styles.infoText}>
                    <Ionicons name="person" size={18} style={styles.icon} />  {userInfo[0].age} years old
                  </Text>
                ) : null}
                {userInfo[0].location && ( 
                  <Text style={styles.infoText}>
                    <Entypo name="location-pin" size={20} /> {userInfo[0].location}
                  </Text>
                )}
                {userInfo[0].contact && ( 
                  <Text style={styles.infoText}>
                    <FontAwesome name="phone" size={20} color="black" />  {userInfo[0].contact}
                  </Text>
                )}
              </View>

            </>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleModal} style={styles.kebabButton}>
          <Entypo name="dots-three-vertical" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType="none" transparent={true}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Button title="Edit Profile" onPress={handleEditProfile} color="#135D66" />

              <LogoutButton />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal visible={isEditing} animationType="none" transparent={true}>
        <View style={styles.modalEditContainer}>
          <View style={styles.modalEditContent}>
            <Text>Edit Profile</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="person" size={24} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Age"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.inputContainer}>
              <Feather name="phone" size={24} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Contact"
                value={contact}
                onChangeText={setContact}
              />
            </View>
            <View style={styles.inputContainer}>
              <Entypo name="location-pin" size={24} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Location"
                value={location}
                onChangeText={setLocation}
              />
            </View>
            <View style={styles.modalButtons}>
              <View style={styles.buttonCancelContainer}></View>
              <Button title="Cancel" onPress={() => setIsEditing(false)} color="#77B0AA" />
              <View style={styles.buttonSaveContainer}>
                <Button title="Save" onPress={handleSaveProfile} color="#135D66" /></View>
            </View>


          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    width: "100%",
    position: "relative",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: "absolute",
    top: 35,
    height: '100%',
  },
  leftColumn: {
    top: 35,
    height: '100%',
    width: "55%",
    alignItems: "center",
  },
  rightColumn: {
    top: 35,
    width: "45%",
    height: '100%',
  },
  userInfoContainer: {
    alignItems: 'flex-start',
    marginTop: 55,
    marginLeft: 2,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    top: 40,
  },
  modalContent: {
    backgroundColor: "#135D66",
    borderRadius: 10,
    padding: 10,
    width: "40%",
    right: 15.5,
    top: 0,
  },
  modalEditContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalEditContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderBottomWidth: 1,
    marginLeft: 5,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    width: "100%",
  },

  buttonSaveContainer: {
    marginLeft: 5,
  },

  buttonContainer: {
    position: "absolute",
    top: 0,
    alignItems: "flex-end",
    paddingRight: 10,
    width: "100%",
    height: "19%",
    backgroundColor: "#135D66",
  },
  kebabButton: {
    backgroundColor: "#135D66",
    padding: 10,
    marginTop: 13,
  },
});
