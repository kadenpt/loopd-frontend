import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from './search-bar';
import Logo from '@/components/logo';
import PostButton from '@/components/post-button';

const TopBar = () => {
  const handleSearch = (search: string) => {
    console.log(search);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.sideContainer}>
          <Logo />
        </View>

        <View style={styles.centerContainer}>
          <SearchBar onSearch={handleSearch} />
        </View>

        <View style={[styles.sideContainer, styles.rightContainer]}>
          <PostButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E8FA8',
    paddingHorizontal: 10,
    height: 100,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // distributes evenly
    width: '100%',
  },
  sideContainer: {
    width: 50, // keeps left/right consistent
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  centerContainer: {
    flex: 1, // allows search bar to grow and center itself
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TopBar;
