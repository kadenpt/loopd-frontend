import { StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from './search-bar'
import Logo from '@/components/logo'

const TopBar = () => {
  const handleSearch = (search: string) => {
    console.log(search);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Logo />
        <SearchBar onSearch={handleSearch} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#1E8FA8',
    height: '15%',
  },
  searchBarContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default TopBar