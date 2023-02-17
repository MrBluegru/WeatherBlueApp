import React, { useState } from "react";
import { View, Text, Switch, Button } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateThemeReducer, updateUDSReducer } from "../redux/settingsSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles/settingsScreen.Styles";
import handlerLanguage from "../utils/language";
import { language } from "../utils/currentLanguaje";
import { useTheme } from "../hooks/useTheme";

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const themeSelected = useSelector((state) => state.settings.settings.theme);
  const isUseDevice = useSelector(
    (state) => state.settings.settings.useDeviceSettings
  );

  const [theme, setTheme] = useState(themeSelected);
  const [useDeviceSettings, setUseDeviceSettings] = useState(
    isUseDevice === null ? false : isUseDevice
  );

  const isDarkTheme = useTheme();

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
      <View style={styles.subTitle}>
        <Text style={isDarkTheme ? styles.textDark : styles.textLight}>
          {handlerLanguage("theme", language)}
        </Text>
      </View>

      {!useDeviceSettings ? (
        <View style={styles.inputContainer}>
          <Button
            title={handlerLanguage("light", language)}
            onPress={() => setTheme("light")}
            color={theme === "light" ? "#5998c0" : 'grey'}
          />
          <Button
            title={handlerLanguage("dark", language)}
            onPress={() => setTheme("dark")}
            color={theme === "dark" ? "#5998c0" : 'grey'}
          />
        </View>
      ) : null}
      <View style={styles.inputContainer}>
        <Text style={isDarkTheme ? styles.textDark : styles.textLight}>
          {handlerLanguage("useDS", language)}
        </Text>
        <Switch
          trackColor={{ false: "red", true: "#1ed760" }}
          thumbColor={useDeviceSettings ? "#fff" : "grey"}
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
