import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  childContainers: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  viewSubtitle: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 120,
    width: 120,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
