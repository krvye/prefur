import React, { useState, useEffect, useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import UserProfilePicker from "./UserProfilePicker";
import ProgressBar from "../AddPet/ProgressBar";
import { getUserImageUrl } from "../../services/firebase/Profile/retrieveUserProfile";

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
  const imageURL = getUserImageUrl();

  useEffect(() => {
    dispatch({ type: "SET_IMAGE_URL", payload: imageURL });
  }, [imageURL]);

  const hasUserInfo = userInfo && Array.isArray(userInfo) && userInfo.length > 0;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.leftColumn}>
          <UserProfilePicker
            setUserImage={setUserImage}
            setProgressState={setProgressState}
            setProgress={setProgress}
            image={imageURL} // Use state.imageURL instead of userImage
            dispatch={dispatch}
          />
          <ProgressBar
            progressBarState={progressState}
            image={state.imageURL} // Use state.imageURL instead of userImage
            petName={state.petName}
            progress={progress * 2.3}
          />
        </View>
        <View style={styles.rightColumn}>
          {hasUserInfo ? (
            <>
              <Text>{userInfo[0].lastName} {userInfo[0].firstName}</Text>
              <Text>{userInfo[0].emailAddress}</Text>
            </>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    width: '90%',
    position: 'relative',
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: 'absolute',
    top: 60,
  },
  leftColumn: {
    marginRight: 10,
    marginLeft: 3,
  },
  rightColumn: {
    top: 50,
  },
});
