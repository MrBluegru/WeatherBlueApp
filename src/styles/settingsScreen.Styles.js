import Constants from "expo-constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  separator: {
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  subTitle: {
    alignItems: "center",
  },
  backLight: {
    backgroundColor: "#fff",
  },
  backDark: {
    backgroundColor: "#000",
  },
  textLight: {
    color: "#000",
  },
  textDark: {
    color: "#fff",
  },
});
