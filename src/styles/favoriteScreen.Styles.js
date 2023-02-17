import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backLight: {
    backgroundColor: "#fff",
  },
  backDark: {
    backgroundColor: "#1b2932",
  },
  textLight: {
    color: "#000",
  },
  textDark: {
    color: "#fff",
  },
  containerNoFav: {
    flex: 1,
    justifyContent: "center",
    alignItem: "center",
    margin: "20%",
  },
  textMgs: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
  },
  containerLoading: {
    margin: "20%",
  },
});
