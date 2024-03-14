import { StyleSheet, Text, View } from "react-native";
import useBlogs from "../context/BlogContext";

const IndexScreen = () => {
  const { number } = useBlogs();
  console.log(number);

  return (
    <View>
      <Text>IndexScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
