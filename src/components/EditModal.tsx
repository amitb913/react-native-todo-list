import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  SafeAreaView,
} from "react-native";

import { Colors, Dim } from "../Constants";
import Button from "./Button";

interface EditModalProps {
  visible: boolean;
  textEntry: string;
  onPressCancel: () => void;
  onPressSave: () => void;
  editing: boolean;
  setTextEntry: React.Dispatch<React.SetStateAction<string>>;
}

const EditModal = (props: EditModalProps) => {
  const generateRandomPlaceholder = (): string => {
    const placeholders: string[] = [
      "Do my homework",
      "Go to the gym",
      "Buy groceries",
      "Go to the dentist",
      "Get a haircut",
    ];
    return placeholders[Math.floor(Math.random() * placeholders.length)];
  };
  return (
    <Modal animationType="slide" visible={props.visible}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Enter task name</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder={generateRandomPlaceholder()}
          value={props.textEntry}
          onChangeText={(text) => props.setTextEntry(text)}
        />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Button
            title="Cancel"
            onPress={props.onPressCancel}
            style={{ marginRight: 10, backgroundColor: Colors.background }}
            textStyle={{ color: Colors.text }}
          />
          <Button
            title="Save"
            onPress={props.onPressSave}
            style={{ marginLeft: 10 }}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    fontSize: 30,
    paddingTop: 40,
  },
  textInputStyle: {
    backgroundColor: Colors.background,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: Dim.width * 0.8,
    fontSize: 18,
  },
});

export default EditModal;
