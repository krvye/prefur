import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../firebaseConfig";

const storage = getStorage(app);

export const uploadImage = async (imageUri, dispatch) => {
  const PET_IMAGE_NUMBER = new Date().getTime();
  const PET_IMAGES_STORAGE = ref(storage, `PET_IMAGES/${PET_IMAGE_NUMBER}`);

  const response = await fetch(imageUri);
  const blob = await response.blob();
  const uploadPetImage = uploadBytesResumable(PET_IMAGES_STORAGE, blob);

  uploadPetImage.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      console.log("Error Uploading Image: ", error);
    },
    () => {
      getDownloadURL(uploadPetImage.snapshot.ref).then((downloadURL) => {
        console.log("File available at: ", downloadURL);
        dispatch({ type: "SET_IMAGE_URL", payload: downloadURL });
      });
    }
  );
};
