import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { Colors, Dim } from "../Constants";

interface IconTouchableProps {
  name: any;
  size?: number;
  color?: string;
  style?: any;
  onPress?: () => void;
}

const IconTouchable = (props: IconTouchableProps) => {
  return (
    <TouchableOpacity
      style={{ marginHorizontal: 7.5, ...props.style }}
      onPress={props.onPress}
    >
      <Icon
        name={props.name}
        size={props.size || Dim.width * 0.07}
        color={props.color || Colors.text}
      />
    </TouchableOpacity>
  );
};

export default IconTouchable;
