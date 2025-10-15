import { StyleSheet, Pressable, Text, View } from "react-native";
import { IconSymbol } from "./ui/icon-symbol";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function NewPostHeader() {
  const router = useRouter();

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Pressable style={styles.sideButton} onPress={() => router.back()}>
          <IconSymbol name="arrow.left" size={24} color="white" />
        </Pressable>

        <View style={styles.titleWrapper}>
          <Text style={styles.title}>New Post</Text>
        </View>

        <Pressable style={styles.sideButton} onPress={handleSubmit}>
          <IconSymbol name="paperplane.fill" size={24} color="white" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: "#1E8FA8",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    position: "relative",
  },
  sideButton: {
    width: 40,
    alignItems: "center",
  },
  titleWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
