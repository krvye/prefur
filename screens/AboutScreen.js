import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import ImageViewer from '../components/ImageLogo';
import naldo from "../assets/naldo.png";
import tusing from "../assets/tusing.png"
import PreFurName from "../assets/PreFurName.png"

const placeholderImage = require("../assets/PreFur.png")

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#77B0AA", "#E3FEF7"]}
        style={styles.linearGradient}
        start={{ x: -0.5, y: 0.5 }}
        end={{ x: 0, y: 0 }}
      >
        <StatusBar style="auto" />
        <View>
          <ImageViewer placeholderImageSource={placeholderImage} />
        </View>

        <Image source={PreFurName} style={styles.prefurNameImage} />

        <View style={styles.credentialContainer}>
          <Text style={styles.descriptionText}>
            The project aims to develop a mobile application called “PreFur” which serves a stray animal adoption system for people that want to adopt stray animals and help the homeless creatures. Prefur will offer a user-friendly and efficient platform for people who want to adopt stray animals. The application intends to create an application where people can post about stray animals. Future fur parents or fur parents will be able to see information such as name, breed, age, and photos of the stray animal. Another feature of the application will be anyone can post stray animals on it together with their contact information so the future adopters can communicate with them. Having this kind of feature will boost the interest of the public in adopting homeless animals.
          </Text>
          <Text style={[styles.developersText, { fontWeight: 'bold' }]}>Developers</Text>
          <View style={styles.developerContainer}>
            <View style={styles.leftContainer}>
              <Image source={naldo} style={styles.developerImage} />
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.developerName}>Jervy Naldo</Text>
              <Text style={styles.developerInfo}>
                4th Year Student{"\n"}
                System Administration
              </Text>
            </View>
          </View>
          <View style={styles.developerContainer}>
            <View style={styles.leftContainer}>
              <Image source={tusing} style={styles.developerImage} />
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.developerName}>Angelo Tusing</Text>
              <Text style={styles.developerInfo}>
                4th Year Student{"\n"}
                System Administration
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prefurNameImage: {
    width: 328, 
    height: 66, 
    marginBottom: 30,
  },
  credentialContainer: {
    padding: 8,
    borderWidth: 3,
    borderRadius: 10,
    width: '90%',
    marginBottom: 5,
    borderColor: '#003C43',
    backgroundColor: '#E3FEF7',
  },
  descriptionText: {
    textAlign: 'justify',
    marginBottom: 2,
  },
  developerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
  },
  developerImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginBottom: 10,
  },
  developerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  developerInfo: {
    fontStyle: 'italic',
  },
  developersText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
