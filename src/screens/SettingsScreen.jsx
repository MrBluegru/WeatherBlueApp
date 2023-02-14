import React, { useState } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";
import Constants from "expo-constants";

const SettingsScreen = () => {
  const [esLang, setEsLang] = useState(false);
  const [enLang, setEnLang] = useState(false);
  const [lightTh, setLighTh] = useState(false);
  const [darkTh, setDarkTh] = useState(false);

  const handlerLanguage = () => {};
  const handlerTheme = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <View style={{ alignItems: "center" }}>
        <Text>Language</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.inputContainer}>
        <Text>Spanish</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={esLang ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handlerLanguage}
          value={esLang}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>English</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={enLang ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handlerLanguage}
          value={enLang}
        />
      </View>
      <View style={styles.separator} />
      <View style={{ alignItems: "center" }}>
        <Text>Theme</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.inputContainer}>
        <Text>Light</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={lightTh ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handlerTheme}
          value={lightTh}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Dark</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkTh ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handlerTheme}
          value={darkTh}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  separator: {
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
});

export default SettingsScreen;
