import { FlatList, StyleSheet, Text, View } from "react-native";
import useBlogs from "../context/BlogContext";

const IndexScreen = () => {
  const { blogPosts } = useBlogs();

  return (
    <View>
      <Text>IndexScreen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
