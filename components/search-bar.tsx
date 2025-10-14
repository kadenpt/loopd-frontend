import { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";

export default function SearchBar({ onSearch }: { onSearch: (search: string) => void }) {
  const [search, setSearch] = useState<string>('');

  const handleChangeText = (text: string) => {
    setSearch(text);
    if (onSearch) {
      onSearch(text);
    }
  }

  return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          onChangeText={handleChangeText} 
          value={search}
          placeholder="Search..."
          placeholderTextColor="black"
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1000,
    width: '75%',
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
    marginRight: '5%',
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
});