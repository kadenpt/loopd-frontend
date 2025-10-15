import { View, Image, StyleSheet } from "react-native";
import BlueLogo from '@/assets/images/loopd-blue.png';
import WhiteLogo from '@/assets/images/loopd-white.png';
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function Logo() {
  const theme = useColorScheme();

  return (
    <View style={styles.logoContainer}>
      <Image source={theme === 'light' ? WhiteLogo : BlueLogo} style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    paddingRight: 10,
    marginLeft: '5%',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});