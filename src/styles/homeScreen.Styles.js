import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  containerCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
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
});
