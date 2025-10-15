import { TouchableOpacity, StyleSheet } from "react-native"
import { IconSymbol } from './ui/icon-symbol';
import { useRouter } from "expo-router";

export default function PostButton() {
  const router = useRouter();

  const handlePress = () => {
    console.log('Post button pressed');
    router.push('/create-post');
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <IconSymbol name="plus" size={20} color="white" style={styles.icon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    padding: 5,
    marginLeft: 10,
  },
  icon: {
    color: 'white',
  },
});