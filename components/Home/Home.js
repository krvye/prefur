import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Octicons } from '@expo/vector-icons';

export default function Home({ petInfo }) {
  const [selectPet, setSelectedPet] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const selectPetInfo = (index) => {
    setSelectedPet(petInfo[index]);
    toggleModal();
  };

  const closeModal = () => {
    setSelectedPet(null);
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.filterButton}></View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <View style={styles.rowContainer}>
            {petInfo.map((pet, index) => (
              <TouchableOpacity
                key={index}
                style={styles.petContainer}
                onPress={() => selectPetInfo(index)}
              >
                <Image
                  source={{ uri: pet.imageURL }}
                  style={styles.petImage}
                  resizeMode="cover"
                />
                <View style={styles.petNameContainer}>
                  <Text style={styles.nameText}>{pet.petName}</Text>
                  <View style = {styles.petAddressContainer}>
                  <Octicons name = "location" size={12} color="#135D66" style={{marginRight: 4, marginTop: 2}} />
                  <Text style={styles.nameText}>{pet.location}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Image
                  source={{ uri: selectPet?.imageURL }}
                  style={styles.modalPetImage}
                  resizeMode="cover"
                />
                <Text style={styles.modalPetName}>{selectPet?.petName}</Text>
                <View style={styles.modalPetInfoContainer}>
                  <Text style={styles.modalPetInfo}>
                    {selectPet?.color}
                  </Text>
                  <Text style={styles.modalPetInfo}>
                    {selectPet?.breed}
                  </Text>
                  <Text style={styles.modalPetInfo}>
                    {selectPet?.location}
                  </Text>
                  <Text style={styles.modalPetInfo}>
                    {selectPet?.contact}
                  </Text>
                </View>
              </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 50,
    alignItems: "center",
  },
  scrollContainer: {
    alignItems: "center",
  },
  wrapper: {
    width: "90%",
  },
  rowContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  petContainer: {
    borderRadius: 10,
    height: 200,
    width: "48%",
    marginVertical: 5,
    overflow: "hidden",
  },
  petImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  petNameContainer: {
    marginTop: 2,
    marginLeft: 10,
    marginBottom: 2,
  },
  petAddressContainer: {
    flexDirection: "row",
  },
  nameText: {
    fontSize: 12,
    color: "#0e0e0e",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalPetImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  modalPetInfoContainer: {
    marginTop: 4,
    alignItems: "center",
  }, 
  modalPetName: {
    fontSize: 16, 
    fontWeight: "bold",
  }, 
  modalPetInfo: {
    fontSize: 14,
    marginBottom: 3,
  },
  filterButton: {
    borderColor: "#135D66",
    height: 40, 
    width: 20, 
  }
});
