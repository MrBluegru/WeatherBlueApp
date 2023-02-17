import { Appearance } from "react-native";
import { useSelector } from "react-redux";

export function useTheme() {
  const colorScheme = Appearance.getColorScheme();
  const { theme, useDeviceSettings } = useSelector(
    (state) => state.settings.settings
  );
  const themeActive = useDeviceSettings ? colorScheme : theme;
  const isDarkTheme = themeActive === "dark";
  return isDarkTheme;
}
