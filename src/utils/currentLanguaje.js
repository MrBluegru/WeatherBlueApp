import { getLocales } from "expo-localization";
const locates = getLocales();

export const language = locates[0].languageCode;
