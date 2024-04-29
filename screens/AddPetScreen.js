import { useState } from "react";
import {
  Button,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagePickerContainer}>
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          <MaterialCommunityIcons
            name="camera-plus-outline"
            size={50}
            color="black"
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={styles.imagePickerSmall} onPress={pickImage}>
            <MaterialCommunityIcons
              name="camera-plus-outline"
              size={35}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imagePickerSmall} onPress={pickImage}>
            <MaterialCommunityIcons
              name="camera-plus-outline"
              size={35}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.imagePickerSmall} onPress={pickImage}>
            <MaterialCommunityIcons
              name="camera-plus-outline"
              size={35}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imagePickerSmall} onPress={pickImage}>
            <MaterialCommunityIcons
              name="camera-plus-outline"
              size={35}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* {image && <Image source={{ uri: image }} style={styles.image} />} */}
      <View style={styles.formContainer}>
        <Text style={styles.textInputLabel}>Pet Name</Text>
        <View style={styles.textInputContainer}>
          <MaterialIcons name="pets" size={24} color="black" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your pet name"
          />
        </View>
        <Text style={styles.textInputLabel}>Color</Text>
        <View style={styles.textInputContainer}>
          <MaterialIcons name="invert-colors" size={24} color="black" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your pet color"
          />
        </View>
        <Text style={styles.textInputLabel}>Breed</Text>
        <View style={styles.textInputContainer}>
          <MaterialCommunityIcons name="heart" size={24} color="black" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your pet breed"
          />
        </View>
        <Text style={styles.textInputLabel}>Location</Text>
        <View style={styles.textInputContainer}>
          <Entypo name="location-pin" size={24} color="black" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your pet location"
          />
        </View>
        <Text style={styles.textInputLabel}>Contact</Text>
        <View style={styles.textInputContainer}>
          <Feather name="phone" size={24} color="black" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your contact number"
          />
        </View>
        <TouchableOpacity style={styles.addPetButton}>
          <MaterialIcons name="pets" size={24} color="white" />
          <Text style={styles.addPetButtonText}>Add Pet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAF9F6",
  },
  image: {
    width: 200,
    height: 200,
  },
  imagePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  imagePicker: {
    width: 200,
    height: 200,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagePickerSmall: {
    width: 100,
    height: 100,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    alignItems: "center",
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInputLabel: {
    alignSelf: "flex-start",
    marginLeft: "19%",
    marginTop: "5%",
  },
  textInput: {
    width: "72%",
    height: 40,
    borderBottomWidth: 1,
    marginLeft: "5%",
  },
  addPetButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 200,
    height: 40,
    backgroundColor: "#135D66",
    margin: 5,
    padding: 5,
    borderRadius: 5,
    marginTop: "10%",
  },
  addPetButtonText: {
    color: "white",
    marginLeft: "5%",
  },
});
