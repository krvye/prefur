import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig"; 

const storeUserProfile = async (currentUserUid, profileData) => {
  try {
    // Create a query to find the document with the matching UID
    const userQuery = query(collection(db, "USER_INFORMATION"), where("UID", "==", currentUserUid));
    
    // Execute the query
    const querySnapshot = await getDocs(userQuery);
    
    // Check if there is a matching document
    if (!querySnapshot.empty) {
      // Get the document reference
      const docRef = doc(db, "USER_INFORMATION", querySnapshot.docs[0].id);

      // Update the document with the new profile data
      await updateDoc(docRef, profileData);

      console.log("User profile stored successfully.");
    } else {
      console.error("No document found with the provided UID.");
    }
  } catch (error) {
    console.error("Error storing user profile:", error);
  }
};

export default storeUserProfile;
