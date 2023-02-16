import { Appearance } from "react-native";
import { useSelector } from "react-redux";
const colorScheme = Appearance.getColorScheme();

export function useTheme() {
  const { theme, useDeviceSettings } = useSelector(
    (state) => state.settings.settings
  );
  const themeActive = useDeviceSettings ? colorScheme : theme;
  const isDarkTheme = themeActive === "dark";
  return isDarkTheme;
}
