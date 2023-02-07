import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import citiesReducer from "./citiesSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    cities: citiesReducer,
  },
});
