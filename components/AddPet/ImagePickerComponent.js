import React from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  useColorScheme,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { uploadImage } from "../../services/firebase/AddPet/storePetImage";

export default function ImagePickerComponent({
  dispatch,
  image,
  setImage,
  setProgressState,
  setProgress,
}) {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.cancelled) {
      console.log("Image selection cancelled.");
      // You can handle the cancellation here, such as showing a message to the user.
      return;
    }

    if (!result.assets || result.assets.length === 0 || !result.assets[0].uri) {
      console.log("No image selected.");
      // You can handle the case where no image was selected.
      return;
    }
    console.log("Selected image URI:", result.assets[0].uri);
    setImage(result.assets[0].uri);
    uploadImage(result.assets[0].uri, dispatch, setProgressState, setProgress);
  };

  const colorScheme = useColorScheme();
  const themeIconColor = colorScheme === "light" ? "black" : "white";
  const themeBorderColor =
    colorScheme === "light"
      ? { borderColor: "black" }
      : { borderColor: "white" };

  return (
    <View style={styles.imagePickerContainer}>
      {image ? (
        <TouchableOpacity onPress={pickImage}>
          <Image source={{ uri: image }} style={styles.image} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.imagePicker, themeBorderColor]}
          onPress={pickImage}
        >
          <MaterialCommunityIcons
            name="camera-plus-outline"
            size={50}
            color={themeIconColor}
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
