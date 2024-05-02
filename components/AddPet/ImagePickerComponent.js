import React from "react";
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { uploadImage } from "../../services/firebase/AddPet/storePetImage";

export default function ImagePickerComponent({ dispatch, image, setImage }) {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
      uploadImage(result.assets[0].uri, dispatch);
    }
  };

  return (
    <View style={styles.imagePickerContainer}>
      {image ? (
        <TouchableOpacity onPress={pickImage}>
          <Image source={{ uri: image }} style={styles.image} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          <MaterialCommunityIcons
            name="camera-plus-outline"
            size={50}
            color="black"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
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
});
