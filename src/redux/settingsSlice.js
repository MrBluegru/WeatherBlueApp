import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  settings: {
    theme: "",
    language: "",
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettgReducer: (state, action) => {
      state.settings = action.payload;
    },
    updateLangReducer: (state, action) => {
      action.payload === "es"
        ? (state.settings.language = "es")
        : (state.settings.language = "en");
    },
    updateThemeReducer: (state, action) => {
      action.payload === "light"
        ? (state.settings.theme = "light")
        : (state.settings.theme = "dark");
    },
  },
});

export const { setSettgReducer, updateLangReducer, updateThemeReducer } =
  settingsSlice.actions;

export default settingsSlice.reducer;
