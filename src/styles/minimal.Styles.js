import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  icon: {
    width: 140,
    height: 140,
  },
  title: {
    marginVertical: 4,
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 4,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#454d60",
  },
  modalView: {
    flex: 1,
    backgroundColor: "#ffd",
    justifyContent: "center",
    alignItems: "center",
  },
});
