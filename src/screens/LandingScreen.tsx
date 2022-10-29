import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput } from "react-native";
import Button from "../components/Button";
import { Colors, Dim } from "../Constants";
import { logIn, signUp } from "../helpers/Auth";
import { isWhitespaceOnly } from "../helpers/InputValidator";

export interface LandingScreenProps {
  setUser: (user: { _id: string; username: string }) => void;
}

const LandingScreen = (props: LandingScreenProps) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={{ fontSize: 24, marginTop: 40 }}>
        React Native To-Do List
      </Text>
      <View style={{ marginVertical: 20 }}>
        <TextInput
          autoCapitalize="none"
          placeholder="Username"
          style={styles.textInputStyle}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={styles.textInputStyle}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Button
          title="Log In"
          onPress={async () => {
            if (isWhitespaceOnly(username) || isWhitespaceOnly(password)) {
              alert("Username and password cannot be empty");
              return;
            }
            const logInResponse = await logIn(username, password);
            console.log(logInResponse);
            if (logInResponse) {
              props.setUser(logInResponse);
            } else {
              alert(
                "Something went wrong. Make sure your username and password are correct."
              );
            }
          }}
          style={{ marginRight: 5 }}
        />
        <Button
          title="Sign Up"
          onPress={async () => {
            if (isWhitespaceOnly(username) || isWhitespaceOnly(password)) {
              alert("Username and password cannot be empty");
              return;
            }
            const signUpResponse = await signUp(username, password);
            if (signUpResponse) {
              props.setUser(signUpResponse); // TODO: Add type for user
            } else {
              alert("Something went wrong. (or this username might be taken).");
            }
          }}
          style={{ marginLeft: 5 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
  },
  textInputStyle: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: Dim.width * 0.8,
    fontSize: 18,
  },
});

export default LandingScreen;
