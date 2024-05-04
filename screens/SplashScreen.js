import { StyleSheet, View, Image } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import PreFurLogo from "../assets/PreFurLogo.png";

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace("AuthenticationNavigator");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.TOpacity}>
      <LinearGradient
        colors={[ "#77B0AA", "#E3FEF7"]}
        style={styles.linearGradient}
        start={{ x: -0.5, y: 0.5 }}
        end={{ x: 0, y: 0 }}
      >
        <View style={styles.container}>
          <Image source={PreFurLogo} style={styles.logo} />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    flex: 1,
  },
  logo: {
    resizeMode: "contain",
    height: 300,
    width: 300
  },
  TOpacity: {
    flex: 1,
  },
});
