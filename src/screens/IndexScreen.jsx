import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { useContext } from "react";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation: { navigate } }) => {
  const { state, createBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        title="Add Blog Post"
        onPress={createBlogPost}
      >
        <Text style={styles.buttonText}>Add Blog Post</Text>
      </TouchableOpacity>
      <FlatList
        data={state}
        keyExtractor={(state) => state.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigate("Show", {
                  id: item.id,
                  title: item.title,
                  content: item.content,
                })
              }
            >
              <View style={styles.row}>
                <Text style={styles.text}>
                  {item.title} / {item.content}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash-2" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 19,
    color: "black",
  },
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginVertical: 20,
    marginHorizontal: 50,
    borderRadius: 10,
    backgroundColor: "dodgerblue",
    color: "white",
  },
  buttonText: {
    fontSize: 19,
    color: "white",
  },
});

export default IndexScreen;
