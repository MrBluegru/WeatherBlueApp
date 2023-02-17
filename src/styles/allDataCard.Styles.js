import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
  },
  subContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    backgroundColor: "#5998c0",
    borderRadius: 4,
    marginVertical: 6,
  },
  childContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 4,
    marginVertical: 6,
  },
  icon: {
    height: 120,
    width: 120,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  normalTextI: {
    fontSize: 16,
    fontWeight: "bold",
  },
  mapView: {
    flex: 1,
    height: 220,
    width: 350,
  },
  containerMap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  darkThemeChildCont: {
    backgroundColor: "#1b2932",
  },
  lightThemeChildCont: {
    backgroundColor: "#fff",
  },
  darkText: {
    color: "#fff",
  },
  lightText: {
    color: "#000",
  },
});
