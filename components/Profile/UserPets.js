import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons, Feather } from '@expo/vector-icons'; // Import Feather icon
import handleDeletePet from "../../services/firebase/Profile/deletePet";

export default function UserPets({ petInfo }) {
  const hasPetInfo = petInfo && Array.isArray(petInfo) && petInfo.length > 0;

  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="pets" size={27} color="#135D66" />
        <Text style={styles.headerText}>Pets</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {hasPetInfo ? (
          petInfo.map((pet, index) => (
            <View key={index} style={styles.petContainer}>
              <TouchableOpacity onPress={() => handleDeletePet(pet.petId)} style={styles.deleteButton}>
                <Feather name="x" size={18} color="white" />
              </TouchableOpacity>
              <Image source={{ uri: pet.imageURL }} style={styles.petImage} />
              <View style={styles.petDetails}>
                <View style={styles.petNameContainer}>
                  <Text style={styles.petName}><MaterialIcons name="pets" size={14} color="white" /> {pet.petName}</Text>
                </View>
                <View style={styles.columnsContainer}>
                  <View style={styles.leftColumn}>
                    <Text style={styles.petInfo}>{pet.petType}</Text>
                    <Text style={styles.petInfo}>{pet.breed}</Text>
                  </View>
                  <View style={styles.rightColumn}>
                    <Text style={styles.petInfo}>{pet.color}</Text>
                    <Text style={styles.petInfo}>{pet.adoptionStatus}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text></Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    minHeight: 215, 
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
    marginLeft: 15,
  },
  headerText: {
    color: "#135D66",
    fontSize: 23,
    fontWeight: "bold",
    marginLeft: 5,
  },
  scrollContainer: {
    width: "100%",
    height: "100%",
  },
  petContainer: {
    backgroundColor: "#135D66",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  deleteButton: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  petImage: {
    width: 90,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  petDetails: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  petNameContainer: {
    marginBottom: 10,
    marginRight: 60,
  },
  columnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftColumn: {
    flex: 1,
    marginRight: 5,
  },
  rightColumn: {
    flex: 1,
    marginLeft: 5,
  },
  petName: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  petInfo: {
    color: "white",
    marginBottom: 3,
  },
});
