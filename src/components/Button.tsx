import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors, Dim } from "../Constants";

export interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: any;
  textStyle?: any;
}

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...props.style }}
      onPress={props.onPress}
    >
      <Text style={{ ...styles.text, ...props.textStyle }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    padding: 10,
    minWidth: Dim.width * 0.3,
    borderRadius: 100,
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Button;
