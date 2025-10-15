import { useState } from "react";
import { 
  View, 
  TextInput, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  Alert, 
  ScrollView 
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import NewPostHeader from "@/components/new-post-header"; // Your top bar component

export default function CreatePostScreen() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // Ask for permission
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission required", "We need access to your photos to upload an image.");
      return;
    }

    // Open image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    console.log("Submitting post...");
    console.log("Caption:", caption);
    console.log("Image:", image);

    // You can now send this to your FastAPI endpoint:
    // use FormData to send file + caption
    /*
    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("photo", {
      uri: image,
      name: "upload.jpg",
      type: "image/jpeg",
    });

    await fetch("http://10.0.0.79:8000/posts", {
      method: "POST",
      body: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    */
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <NewPostHeader />
      </View>
      <ScrollView contentContainerStyle={styles.formContainer}>
        {/* Image picker */}
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Text style={styles.imagePlaceholder}>Tap to select an image</Text>
          )}
        </TouchableOpacity>

        {/* Caption input */}
        <TextInput
          style={styles.captionInput}
          placeholder="Write a caption..."
          value={caption}
          onChangeText={setCaption}
          multiline
        />

        {/* Submit button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Post</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    width: "100%",
    height: 100,
    backgroundColor: "#1E8FA8",
    marginBottom: 'auto',
  },
  formContainer: {
    alignItems: "center",
    padding: 20,
  },
  imagePicker: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imagePlaceholder: {
    color: "#888",
    fontSize: 16,
  },
  captionInput: {
    width: "100%",
    minHeight: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
    marginBottom: 20,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#1E8FA8",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  submitText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
