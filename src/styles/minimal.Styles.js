import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 2,
    marginVertical: 6,
    marginHorizontal: 10,
    padding: 10,
  },
  icon: {
    width: 80,
    height: 80,
  },
  iconAndTemp: {
    alignItems: "center",
  },
  title: {
    color: "#fff",
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
  },
  containerTexts: {
    margin: 5,
    justifyContent: "space-around",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btons: {
    justifyContent: "space-around",
    margin: 8,
  },
  borderForDark: {
    borderWidth: 0.6,
    borderColor: "#fff",
  },
  borderForLight: {
    borderWidth: 0.6,
    borderColor: "#000",
  },
  button: {
    paddingHorizontal: "2%",
    paddingBottom: "4%",
    width: "100%",
  },
});
