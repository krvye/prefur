import { Image, Modal, StyleSheet, Text, View } from "react-native";
import Svg, { Rect } from "react-native-svg";

export default function ProgressBar({
  progressBarState,
  image,
  petName,
  progress,
}) {
  return (
    <Modal visible={progressBarState} transparent={true}>
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.imageStyle} />
        <Text style={styles.petNameText}>{petName}</Text>
        <Text style={styles.uploadingText}>Uploading...</Text>
        <Svg width={230} height="7" style={styles.progressBar}>
          <Rect
            width={230}
            height={"100%"}
            fill={"#eee"}
            rx={3.5}
            ry={3.5}
          ></Rect>
          <Rect
            width={progress}
            height={"100%"}
            fill={"#135D66"}
            rx={3.5}
            ry={3.5}
          ></Rect>
        </Svg>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "#FAF9F6",
    height: "30%",
    width: "70%",
    marginTop: "50%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 20,
  },
  progressBar: {
    marginTop: "5%",
  },
  imageStyle: { height: "50%", width: "50%", borderRadius: 10 },
  uploadingText: { marginTop: "5%", fontSize: 12 },
  petNameText: {
    marginTop: "5%",
    fontSize: 18,
    fontWeight: "bold",
  },
});
