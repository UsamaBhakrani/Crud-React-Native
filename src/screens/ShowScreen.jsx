import { StyleSheet, Text, View } from "react-native";

const ShowScreen = ({ route: { params } }) => {
  return (
    <View>
      <Text>{params.id}</Text>
      <Text>{params.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
