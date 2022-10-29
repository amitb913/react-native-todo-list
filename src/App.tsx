import { registerRootComponent } from "expo";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TaskList, { User } from "./components/TaskList";
import { Colors } from "./Constants";
import LandingScreen from "./screens/LandingScreen";

function App() {
  const [user, setUser] = useState<User>({
    _id: "",
    username: "",
  });
  if (!user._id) {
    // user is not logged in
    return <LandingScreen setUser={setUser} />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <TaskList user={user} />
      </SafeAreaView>
    );
  }
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
