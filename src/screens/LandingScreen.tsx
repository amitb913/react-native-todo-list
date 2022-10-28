import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { Colors } from "../Constants";

const LandingScreen = (props: any) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={{ fontSize: 24 }}>React Native To-Do List</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Log In" onPress={() => null} />
        <Button
          title="Sign Up"
          onPress={() => null}
          style={{ marginTop: 10 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LandingScreen;
