import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerInitial: {
    flex: 1,
    justifyContent: "center",
  },
  containerDefault: {
    justifyContent: "center",
  },
  textInput: {
    borderRadius: 2,
    borderWidth: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  darkTheme: {
    backgroundColor: "#1b2932",
    color: "#fff",
  },
  lightTheme: {
    backgroundColor: "#fff",
  },
  borderFromDark: {
    borderColor: "#fff",
  },
  borderFromLight: {
    borderColor: "#000",
  },
});
