import { StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import TopBar from '@/components/top-bar';
import Post from '@/components/post';
import HomePageFilter from '@/components/home-page-filter';
import { useState, useEffect } from 'react';
import placeholderImage from '@/assets/images/icon.png';

interface PostType {
  id: number;
  author_id: string;
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
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ThemedView style={styles.container}>
        <TopBar />
        <HomePageFilter />
        {/* <Post 
        author="John Doe" 
        authorImage="https://via.placeholder.com/150" 
        caption="This is a caption" 
        image="https://via.placeholder.com/150"
        likes={10} /> */}
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          {posts.map((post) => {
            return (
              <Post 
              key={post.id}
              author={String(post.author_id)} 
              authorImage={placeholderImage} 
              caption={post.content} 
              image={post.photo_url || placeholderImage} 
              likes={10} />
            )
          })}
        </ScrollView>
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
