import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import PreFurName from "../../assets/PreFurName.png";
import catDog from "../../assets/catDog.png";

export default function LandingScreen({navigation}) {

  handleSignIn = () => {
    navigation.navigate("SignInScreen");
  }; 
  handleSignUp = () => {
    navigation.navigate("SignUpScreen");
  }; 

  return (
    <View style={styles.container}>
      <View>
        <Image source={PreFurName} style={styles.logoName} />
      </View>
      <View>
        <Image source={catDog} style={styles.catDog} />
      </View>
      <View style={styles.headTitleContainer}>
        <Text style={styles.headTitle}>Be a furr-ent:</Text>
        <Text style={styles.headTitle}>Adopt a furbaby today</Text>
      </View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Meet some furr-bulous buddies ready to add fun to your life.</Text>
      </View >
      <View style={styles.buttonsContainer} >
      <TouchableOpacity onPress={handleSignIn} style={[styles.button, {backgroundColor: '#77B0AA'}]}>
        <Text style={[styles.buttonText, {color: '#191919'}]}>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignUp}  style={[styles.button, {backgroundColor: '#003C43'}]}>
        <Text style={[styles.buttonText, {color: '#FAF9F6'}]}>Sign up</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoName: {
    justifyContent: "center",
    alignItems: "center",
    // marginTop: -150,
    // marginBottom: 20,
    height: 150,
    width: 150,
    resizeMode: "contain",
    top: 15
  },
  catDog: {
    resizeMode: "contain",
    height: 450,
    width: 450,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: -100,
    top: -80
  },
  headTitleContainer: {
    width: 330,
    top: -120,
    marginLeft: 10,
  },
  headTitle: {
    fontSize: 32,
    fontWeight: "700",
  },
  subTitleContainer: {
    width: 330,
    marginLeft: 10,
    top: -115,
    // marginHorizontal: 20
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "300"
  },
  buttonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
    top: -60
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 330,
    borderRadius: 8
  },
  buttonText: {
    fontSize: 22
  }

});
