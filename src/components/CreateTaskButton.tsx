import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { Colors, Dim } from "../Constants";
import { ButtonProps } from "./Button";

interface CreateTaskButtonProps extends Omit<ButtonProps, "title"> {}

const CreateTaskButton = (props: CreateTaskButtonProps) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...props.style }}
      onPress={props.onPress}
    >
      <View style={styles.container}>
        <Icon name="plus" size={Dim.height * 0.03} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dim.width * 0.9,
    height: Dim.height * 0.1,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreateTaskButton;
