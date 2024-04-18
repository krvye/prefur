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
        <TextInput placeholder = 'Enter Your Username' />
      </View>

      <View style = {styles.credentialContainer}>
        <TextInput placeholder = 'Enter Your Password' />
      </View>

      <View>
        <View style = {styles.buttonContainer}>
          <View style = {styles.loginButton}>
            <Button title = 'LOGIN'
            color = '#135D66'
	    onPress={() => navigation.navigate('Home')}
            />
          </View>

          <View style = {styles.signInButton}>
            <Button title = 'SIGN UP'
            color = '#135D66'
	    onPress={() => navigation.navigate('Sign Up')}
            />
          </View>
        </View>
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
    fontStyle: 'Roboto',
    marginBottom: 30,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },

  loginButton: {
    marginRight: 10,
  },

  signInButton: {
    marginLeft: 10,
  },

  credentialContainer: {
    padding: 8,
    marginWidth: '100',
    borderWidth: 3,
    borderRadius: 10,
    width: '40%',
    marginBottom: 5,
    borderColor: '#003C43',
    backgroundColor: '#E3FEF7',
  },
});
