import { StyleSheet, Text, TextInput, View } from "react-native";
import { Context } from "../context/BlogContext";
import { useContext, useState } from "react";

const CreateScreen = ({ route: { params } }) => {
  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");
  
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === params.id);

  return (
    <View>
      <Text style={styles.heading}>Enter Title:</Text>
      <TextInput style={styles.input} />
      <Text style={styles.heading}>Enter Content:</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    padding: 10,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    height: 50,
    marginHorizontal: 20,
  },
});

export default CreateScreen;
