import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={({ navigation: { navigate } }) => ({
              headerTitle: "Blogs",
              headerRight: () => (
                <TouchableOpacity onPress={() => navigate("Create")}>
                  <Feather name="plus" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
            component={IndexScreen}
          />
          <Stack.Screen
            name="Show"
            options={{ title: "Post" }}
            component={ShowScreen}
          />
          <Stack.Screen
            name="Create"
            options={{ title: "Create Post" }}
            component={CreateScreen}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
