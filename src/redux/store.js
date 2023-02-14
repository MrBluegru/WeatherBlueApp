import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import citiesReducer from "./citiesSlice";
import settingsReducer from "./settingsSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    cities: citiesReducer,
    settings: settingsReducer,
  },
});
