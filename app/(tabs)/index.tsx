import { StyleSheet, TouchableWithoutFeedback, Keyboard, FlatList, View } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import TopBar from '@/components/top-bar';
import Post from '@/components/post';
import HomePageFilter from '@/components/home-page-filter';
import { useState, useEffect } from 'react';
import placeholderImage from '@/assets/images/icon.png';

interface PostType {
  id: number;
  author_id: number;
  author_name: string;
  content: string;
  photo_url: string;
}

export default function HomeScreen() {
  const [posts, setPosts] = useState<PostType[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://10.0.0.79:8000/posts');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  }

  useEffect(() => {
    fetchPosts();
    console.log(posts);
  }, []);

  return (
      <ThemedView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.headerContainer}>
            <TopBar />
            <HomePageFilter />
          </View>
        </TouchableWithoutFeedback>
        {/* <Post 
        author="John Doe" 
        authorImage="https://via.placeholder.com/150" 
        caption="This is a caption" 
        image="https://via.placeholder.com/150"
        likes={10} /> */}
        <View style={styles.contentContainer}>
          <FlatList
            data={posts}
            keyExtractor={(item: PostType) => item.id.toString()}
            renderItem={({ item }) => (
              <Post
                author={item.author_name}
                authorImage={placeholderImage}
                caption={item.content}
                image={item.photo_url || placeholderImage}
                likes={10}
              />
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
            style={{ flex: 1, width: '100%' }}
          />
        </View>
      </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
  },
  headerContainer: {
    width: '100%',
  },
});
