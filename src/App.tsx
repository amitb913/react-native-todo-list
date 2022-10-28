import { registerRootComponent } from "expo";

import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TaskList from "./components/TaskList";
import { Colors } from "./Constants";
import LandingScreen from "./screens/LandingScreen";

function App() {
  return <LandingScreen />
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TaskList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});

registerRootComponent(App);
