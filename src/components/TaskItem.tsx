import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Dim } from "../Constants";
import { FontAwesome as Icon } from "@expo/vector-icons";
import IconTouchable from "./IconTouchable";

interface TaskItemProps {
  name: string;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
}

const TaskItem = (props: TaskItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
      <View style={styles.iconRow}>
        <IconTouchable name="pencil" onPress={props.onPressEdit} />
        <IconTouchable
          name="trash"
          style={{ marginRight: 0 }}
          onPress={props.onPressDelete}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 8,
    borderRadius: 10,
    width: Dim.width * 0.9,
    // flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default TaskItem;
