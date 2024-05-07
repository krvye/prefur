import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function UserPets({ petInfo }) {
  const hasPetInfo = petInfo && Array.isArray(petInfo) && petInfo.length > 0;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {hasPetInfo ? (
          petInfo.map((pet, index) => (
            <View key={index} style={styles.petContainer}>
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
          <Text>No Pets Uploaded</Text>
        )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#77B0AA",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
    marginTop: -130,
    width: "100%",
    
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
    marginTop: -10,
    
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
