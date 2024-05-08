import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CustomAlertModal({ modalState, setModalState }) {
  return (
    <Modal visible={modalState} transparent={true}>
      <View style={styles.container}>
        <Text style={styles.errorText}>Please fill all the fields</Text>
        <TouchableOpacity
          style={styles.okButton}
          onPress={() => setModalState(false)}
        >
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
});
