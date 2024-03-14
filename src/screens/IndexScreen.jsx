import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { Context } from "../context/BlogContext";
import { useContext } from "react";

const IndexScreen = () => {
  const { state, createBlogPost } = useContext(Context);

  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title="Add Blog Post" onPress={createBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(state) => state.title}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 19,
  },
});

export default IndexScreen;
