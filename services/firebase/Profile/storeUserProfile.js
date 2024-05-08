import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { getFirestore, collection, query, setDoc, getDocs, where, doc } from "firebase/firestore";
import app from "../firebaseConfig";
import { getAuth } from "firebase/auth";

const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export const uploadUserImage = async (
  imageUri,
  dispatch,
  setProgressState,
  setProgress
) => {
  let uploadCanceled = false;

  try {
    const USER_IMAGE_NUMBER = new Date().getTime();
    const USER_IMAGES_STORAGE = ref(storage, `USER_IMAGES/${USER_IMAGE_NUMBER}`);

    console.log("Starting image upload...");

    const response = await fetch(imageUri);
    const blob = await response.blob();
    const uploadTask = uploadBytesResumable(USER_IMAGES_STORAGE, blob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgressState(true);
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress.toFixed());
        console.log("Upload progress:", progress.toFixed() + "%");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          case "canceled":
            console.log("Upload is canceled");
            uploadCanceled = true;
            break;
        }
      },
      (error) => {
        console.log("Error Uploading Image: ", error);
        // Handle the error here
        setProgressState(false);
      },
      async () => {
        if (!uploadCanceled) {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("File available at: ", downloadURL);
            dispatch({ type: "SET_IMAGE_URL", payload: downloadURL });
            setProgressState(false);

            const currentUserUid = auth.currentUser.uid;
            const userQuery = query(collection(db, "USER_INFORMATION"), where("UID", "==", currentUserUid));
            const querySnapshot = await getDocs(userQuery);
            if (!querySnapshot.empty) {
              
              const userDoc = querySnapshot.docs[0]; // Assuming there's only one document per UID
              await setDoc(userDoc.ref, { imageUrl: downloadURL }, { merge: true });
              console.log("Document updated with image URL.");
            } else {
              console.log("User document not found in USER_INFORMATION collection.");
            }
          } catch (error) {
            console.error("Error saving download URL to Firestore:", error);
          }
        }
      }
    );
  } catch (error) {
    console.log("Error:", error);
    // Handle the error here
    setProgressState(false);
  }
};
