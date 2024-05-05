import { View, Text, StyleSheet, TouchableOpacity, TextInput, useColorScheme } from 'react-native';
import React, { useState } from "react";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import signInAccount from '../../services/firebase/Authentication/signInAccount';

export default function SignInScreen() {
  const colorScheme = useColorScheme();
  const themeBackgroundColor =
    colorScheme === "light"
      ? { backgroundColor: "#FAF9F6" }
      : { backgroundColor: "#122129" };
  const themeTextColor = colorScheme === "light" ? "#122129" : "#FAF9F6";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emptyInputFields, setEmptyInputFields] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const navigation = useNavigation();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = () => {
    if (!email || !password) {
      setEmptyInputFields(true);
      setInvalidCredentials(false);
      return;
    }

    signInAccount(email, password)
      .then((uid) => {
        navigation.navigate("HomeTab");
      })
      .catch((error) => {
        setEmptyInputFields(false);
        setInvalidCredentials(true);
      });
  };

  return (
    <View style={[styles.container, themeBackgroundColor]}>
      <View style={styles.backBtn}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.subtitle}>Enter details to continue</Text>
      </View>

      <View style={styles.inputFields}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword}
            value={password}
          />
          <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="#aaa"
            style={styles.icon}
            onPress={toggleShowPassword}
          />
        </View>
      </View>

      {invalidCredentials && (
        <Text style={styles.wrongCredentials}>
          The email and password did not match our records. Please double-check.
        </Text>
      )}
      {emptyInputFields && (
        <Text style={styles.wrongCredentials}>Fields can't be empty.</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <MaterialIcons name="pets" size={20} color="black" />
        <Text style={styles.footerText}>PreFur</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
  },
  backBtn: {
    marginLeft: 35,
    top: 80,
  },
  header: {
    marginTop: 110,
    marginLeft: 35,
    marginRight: 35,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#0E0E0E",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#0E0E0E",
  },
  inputFields: {
    justifyContent: "space-between",
    flexDirection: "column",
    marginLeft: 35,
    marginRight: 35,
    marginTop: 30,
    gap: 30,
  },
  input: {
    height: 45,
    borderWidth: 2,
    padding: 10,
    borderColor: "#E5E4E2",
    borderRadius: 12,
  },
  inputPassword: {
    width: 150,
  },
  passwordContainer: {
    height: 45,
    borderWidth: 2,
    padding: 10,
    borderColor: "#E5E4E2",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    marginLeft: 10,
  },
  wrongCredentials: {
    color: "#F43636",
    fontSize: 12,
    marginLeft: 40,
    marginTop: 5,
    fontWeight: "500",
  },
  passwordConfig: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 20,
    marginHorizontal: 35,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 100,
    alignSelf: "center",
    gap: 5,
    marginTop: 250,
  },
  footerText: {
    fontSize: 14,
  },
  button: {
    marginTop: 50,
    height: 40,
    width: 280,
    backgroundColor: "#003C43",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 12,
    margin: 25,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "normal",
    color: "#FAF9F6",
    textAlign: "center",
  },
});
