import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import placeholderImage from '@/assets/images/icon.png';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useState } from "react";

interface PostInterfaceProps {
  caption: string;
  image: string;
  author: string;
  authorImage: string;
  likes: number;
}

export default function Post(props: PostInterfaceProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(props.likes);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.authorContainer}>
          <Image source={placeholderImage} style={styles.authorImage} />
          <Text style={styles.authorName}>{props.author}</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Image source={placeholderImage} style={styles.contentImage} />
        <Text style={styles.contentText}>{props.caption}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={toggleLike} style={styles.likeContainer}>
          <IconSymbol name={isLiked ? 'heart.fill' : 'heart'} size={20} color="black" />
          <Text style={styles.likeCount}>{likeCount}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'center',
    backgroundColor: '#1E8FA8',
    width: '75%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  contentContainer: {
    alignItems: 'center',
    padding: 10,
  },
  contentImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  footer: {
    padding: 10,
  },
  contentText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  likeIcon: {
    fontSize: 24,
    color: '#666',
    marginRight: 5,
  },
  liked: {
    color: 'red',
  },
  likeCount: {
    fontSize: 16,
    color: '#000',
  },
});
