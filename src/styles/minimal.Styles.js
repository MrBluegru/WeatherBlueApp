import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    marginVertical: 6,
    marginHorizontal: 10,
    paddingVertical: 20
  },
  icon: {
    width: 100,
    height: 100,
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
    justifyContent: "center",
    alignItems: "center",
  },
  btons: {
    justifyContent: 'space-around'
  },
});
