import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import useBlogs from "../context/BlogContext";

const IndexScreen = () => {
  const { data, createBlogPost } = useBlogs();

  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title="Add Blog Post" onPress={createBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(data) => data.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
