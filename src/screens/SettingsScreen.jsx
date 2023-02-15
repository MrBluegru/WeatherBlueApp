import React, { useState } from "react";
import { View, Text, Switch, Button } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateThemeReducer, updateUDSReducer } from "../redux/settingsSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles/settingsScreen.Styles";
import { Appearance } from "react-native";

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const colorScheme = Appearance.getColorScheme();

  const themeSelected = useSelector((state) => state.settings.settings.theme);
  const isUseDevice = useSelector(
    (state) => state.settings.settings.useDeviceSettings
  );

  const [theme, setTheme] = useState(themeSelected);
  const [useDeviceSettings, setUseDeviceSettings] = useState(
    isUseDevice === null ? false : isUseDevice
  );

  const themeActive = isUseDevice ? colorScheme : themeSelected;
  const isDarkTheme = themeActive === "dark";

  useEffect(() => {
    const updateSettings = async () => {
      try {
        dispatch(updateThemeReducer(theme));
        dispatch(updateUDSReducer(useDeviceSettings));
        AsyncStorage.setItem(
          "@SettingsWeatherB",
          JSON.stringify({ theme, useDeviceSettings })
        );
      } catch (error) {
        console.log(error);
      }
    };
    updateSettings();
  }, [theme, useDeviceSettings]);

  return (
    <View
      style={
        isDarkTheme
          ? [styles.container, styles.backDark]
          : [styles.container, styles.backLight]
      }
    >
      <View style={styles.separator} />

      <View style={styles.subTitle}>
        <Text style={isDarkTheme ? styles.textDark : styles.textLight}>
          Theme
        </Text>
      </View>

      <View style={styles.separator} />

      {!useDeviceSettings ? (
        <View style={styles.inputContainer}>
          <Button
            title="light"
            onPress={() => setTheme("light")}
            color={theme === "light" ? "green" : null}
          />
          <Button
            title="dark"
            onPress={() => setTheme("dark")}
            color={theme === "dark" ? "green" : null}
          />
        </View>
      ) : null}
      <View style={styles.inputContainer}>
        <Text style={isDarkTheme ? styles.textDark : styles.textLight}>
          Use device settings
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={useDeviceSettings ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() =>
            setUseDeviceSettings((previousState) => !previousState)
          }
          value={useDeviceSettings}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
