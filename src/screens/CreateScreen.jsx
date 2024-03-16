import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Context } from "../context/BlogContext";
import { useContext, useState } from "react";

const CreateScreen = ({ navigation: { navigate } }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { createBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={styles.heading}>Enter Title:</Text>
      <TextInput
        value={title}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.heading}>Enter Content:</Text>
      <TextInput
        value={content}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setContent(text)}
      />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            createBlogPost(title, content, () => navigate("Home"));
          }}
        >
          <Text>Add Blog Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    margin: 20,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    height: 50,
    marginHorizontal: 20,
    fontSize: 20,
    paddingHorizontal: 10,
    backgroundColor: "lightgray",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginVertical: 50,
    marginHorizontal: 50,
    borderRadius: 10,
    backgroundColor: "dodgerblue",
    color: "white",
  },
});

export default CreateScreen;
