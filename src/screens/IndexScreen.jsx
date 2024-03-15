import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { Context } from "../context/BlogContext";
import { useContext } from "react";
import { Feather } from "@expo/vector-icons";
const IndexScreen = () => {
  const { state, createBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <Button title="Add Blog Post" onPress={createBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(state) => state.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.text}>{item.title}</Text>
              <Feather
                name="trash-2"
                size={24}
                color="black"
                onPress={() => deleteBlogPost(item.id)}
              />
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
    textAlign: "center",
  },
  container: {},
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "gray",
  },
});

export default IndexScreen;
