import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  allView: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    marginHorizontal: 10,
  },
  search: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBotton: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    width: "80%",
  },
  citiesL: {
    flex: 1,
  },
});
