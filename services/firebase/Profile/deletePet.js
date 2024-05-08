import { query, collection, getDocs, deleteDoc, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Alert } from "react-native";

const handleDeletePet = async (petId) => {
  console.log("Pet ID:", petId); 
  Alert.alert(
    "Confirm Deletion",
    "Are you sure you want to delete this pet?",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: async () => {
          try {
            const petQuery = query(collection(db, "PET_INFORMATION"), where("petId", "==", petId));
            const snapshot = await getDocs(petQuery);
            snapshot.forEach(async (doc) => {
              await deleteDoc(doc.ref);
              console.log("Pet deleted successfully.");
            });
          } catch (error) {
            console.error("Error deleting pet:", error);
          }
        },
        style: "destructive",
      },
    ],
    { cancelable: true }
  );
};

export default handleDeletePet;
