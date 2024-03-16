import { StyleSheet, Text, TextInput, View } from "react-native";

const EditScreen = ({ route: { params } }) => {
  return (
    <View>
      <Text style={styles.heading}>Enter New Title</Text>
      <TextInput style={styles.input} value={params.title} />
      <Text style={styles.heading}>Enter New Content</Text>
      <TextInput style={styles.input} value={params.content} />
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
    backgroundColor: "gray",
  },
});

export default EditScreen;
