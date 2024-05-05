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
import { Octicons, Fontisto } from "@expo/vector-icons";

export default function Home({ petInfo }) {
  const [selectPet, setSelectedPet] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPetType, setSelectedPetType] = useState(null);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const selectPetInfo = (pet) => {
    setSelectedPet(pet);
    toggleModal();
  };

  const closeModal = () => {
    setSelectedPet(null);
    toggleModal();
  };

  const filterPetType = (petType) => {
    setSelectedPetType(petType);
  };

  const filteredPets = selectedPetType
    ? petInfo.filter((pet) => pet.petType === selectedPetType)
    : petInfo;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Fontisto
          name="paw"
          size={20}
          color="#135D66"
          style={{ marginTop: 2, marginLeft: 30 }}
        />
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedPetType === null && styles.activeFilterButton,
            ]}
            onPress={() => filterPetType(null)}
          >
            <Text
              style={[
                styles.filterText,
                selectedPetType === null && styles.activeFilterText,
              ]}
            >
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedPetType === "Dog" && styles.activeFilterButton,
            ]}
            onPress={() => filterPetType("Dog")}
          >
            <Text
              style={[
                styles.filterText,
                selectedPetType === "Dog" && styles.activeFilterText,
              ]}
            >
              Dogs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedPetType === "Cat" && styles.activeFilterButton,
            ]}
            onPress={() => filterPetType("Cat")}
          >
            <Text
              style={[
                styles.filterText,
                selectedPetType === "Cat" && styles.activeFilterText,
              ]}
            >
              Cats
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <View style={styles.rowContainer}>
            {filteredPets.map((pet, index) => (
              <TouchableOpacity
                key={index}
                style={styles.petContainer}
                onPress={() => selectPetInfo(pet)}
              >
                <Image
                  source={{ uri: pet.imageURL }}
                  style={styles.petImage}
                  resizeMode="cover"
                />
                <View style={styles.petNameContainer}>
                  <Text style={styles.nameText}>{pet.petName}</Text>
                  <View style={styles.petAddressContainer}>
                    <Octicons
                      name="location"
                      size={12}
                      color="#135D66"
                      style={{ marginRight: 4, marginTop: 2 }}
                    />
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
                <Text style={styles.modalPetInfo}>{selectPet?.color}</Text>
                <Text style={styles.modalPetInfo}>{selectPet?.breed}</Text>
                <Text style={styles.modalPetInfo}>{selectPet?.location}</Text>
                <Text style={styles.modalPetInfo}>{selectPet?.contact}</Text>
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
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
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
  filterContainer: {
    flexDirection: "row",
    marginLeft: 5,
    height: 50,
    width: "100%",
    alignItems: "center",
  },
  filterButton: {
    borderColor: "#135D66",
    borderWidth: 1,
    height: 30,
    width: 80,
    borderRadius: 20,
    marginLeft: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  filterText: {
    fontSize: 14,
    alignItems: "center",
  },
  activeFilterButton: {
    backgroundColor: "#135D66",
  },
  activeFilterText: {
    color: "#FFFFFF",
    fontSize: 14,
    alignItems: "center",
  },
});
