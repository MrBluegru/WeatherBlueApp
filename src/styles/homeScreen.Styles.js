import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    resizeMode: "center",
  },
  iconError: {
    resizeMode: "stretch",
  },
  errorLocate: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
    top: 40,
  },
  darkTheme: {
    backgroundColor: "#1b2932",
  },
  lightTheme: {
    backgroundColor: "#fff",
  },
});
