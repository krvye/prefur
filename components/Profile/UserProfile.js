import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UserProfile({ userInfo }) {
  const hasUserInfo = userInfo && Array.isArray(userInfo) && userInfo.length > 0;

  return (
    <View style={styles.container}>
      {hasUserInfo ? (
        <>
          <Text>{userInfo[0].lastName} {userInfo[0].firstName}</Text>
          <Text>{userInfo[0].emailAddress}</Text>
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
