import { View, Pressable, StyleSheet, Text } from "react-native";
import { useState } from "react";

export default function HomePageFilter() {
  const [isExplore, setFilter] = useState(true);

  const handleFilter = () => {
    setFilter(!isExplore);
  }

  return (
    <View style={styles.container}>
      <Pressable style={isExplore === true ? styles.selectedButton : styles.button} onPress={handleFilter}>
        <Text style={isExplore === true ? styles.selectedText : styles.buttonText}>Explore</Text>
      </Pressable>
      <Pressable style={isExplore === false ? styles.selectedButton : styles.button} onPress={handleFilter}>
        <Text style={isExplore === false ? styles.selectedText : styles.buttonText}>Following</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 10,
  },
  selectedButton: {
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#1E8FA8',
    backgroundColor: '#1E8FA8',
    marginRight: 10,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#1E8FA8',
    marginRight: 10,
  },
  selectedText: {
    color: '#fff',
  },
  buttonText: {
    color: '#1E8FA8',
  },
});