import { StyleSheet, Text, View } from "react-native";
import { Context } from "../context/BlogContext";
import { useContext } from "react";

const ShowScreen = ({ route: { params } }) => {
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === params.id);
  
  return (
    <View>
      <Text>{params.id}</Text>
      <Text>{params.title}</Text>
      <Text>{params.content}</Text>

      <Text>{blogPost.id}</Text>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
