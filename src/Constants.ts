import { Dimensions } from "react-native";

export const Colors: { [key: string]: string } = {
  text: "#000000",
  background: "#F5F3ED",
  primary: "#BEBEFA",
  secondary: "#007EFC",
};

export const Dim: { [key: string]: number } = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export const API_URL = "http://localhost:3000"; // <--- Change this to your server address
