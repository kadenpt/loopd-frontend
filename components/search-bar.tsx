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
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});