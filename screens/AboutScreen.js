import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


import ImageViewer from '../components/ImageLogo';

const placeholderImage = require ("../assets/PreFur.png")

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <View>
        <ImageViewer placeholderImageSource={placeholderImage}></ImageViewer>
      </View>

      <Text style = {styles.nameAppContainer}>PreFur</Text>

      <View style = {styles.credentialContainer}>
        <Text>This is the page dedicated for the information about the application and on the bottom will be the team memebers and their roles</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77B0AA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageLogoContainer: {
    flex: 1,
    paddingTop: 70,
  },

  nameAppContainer: {
    fontSize: 40,
    // fontStyle: 'Roboto',
    marginBottom: 30,
  },
  credentialContainer: {
    padding: 8,
    marginWidth: '100',
    borderWidth: 3,
    borderRadius: 10,
    width: '80%',
    marginBottom: 5,
    borderColor: '#003C43',
    backgroundColor: '#E3FEF7',
  },
});
