import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DogIcon from "../../assets/dogIcon.png";
import CatIcon from "../../assets/catIcon.png";

export default function AddedSuccessfully({
  addedModalState,
  setAddedModalState,
  petType,
  dispatch,
  setImage,
}) {
  const handleOKPress = () => {
    dispatch({ type: "SET_PET_TYPE", payload: "" });
    dispatch({ type: "SET_PET_NAME", payload: "" });
    dispatch({ type: "SET_COLOR", payload: "" });
    dispatch({ type: "SET_BREED", payload: "" });
    dispatch({ type: "SET_LOCATION", payload: "" });
    dispatch({ type: "SET_CONTACT", payload: "" });
    dispatch({ type: "SET_IMAGE_URL", payload: "" });
    setImage(null);
    setAddedModalState(false);
  };

  return (
    <Modal visible={addedModalState} transparent={true}>
      <View style={styles.container}>
        <View style={styles.messageContainer}>
          <Text style={styles.errorText}>Added Successfully!</Text>
          {petType === "Cat" ? (
            <Image source={CatIcon} style={styles.petIcon} />
          ) : (
            <Image source={DogIcon} style={styles.petIcon} />
          )}
        </View>
        <TouchableOpacity style={styles.okButton} onPress={handleOKPress}>
          <Text style={styles.okText}>OK</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "#FAF9F6",
    height: "20%",
    width: "70%",
    marginTop: "70%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 20,
  },
  messageContainer: { flexDirection: "row", gap: 5 },
  errorText: {
    fontSize: 20,
    fontWeight: "500",
  },
  okButton: {
    marginTop: "5%",
    backgroundColor: "#135D66",
    padding: 10,
    borderRadius: 10,
    marginRight: "5%",
    marginTop: "10%",
  },
  okText: {
    color: "white",
    fontSize: 16,
  },
  petIcon: {
    height: 25,
    width: 25,
  },
});
