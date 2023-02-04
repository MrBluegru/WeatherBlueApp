import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 4,
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 8,
    borderRadius: 4,
  },
  mapView: {
    flex: 1,
    height: 220,
    width: 350,
  },
  containerCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});
