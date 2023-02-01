import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 4,
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 8,
    backgroundColor: "green",
    borderRadius: 4,
  },
});
