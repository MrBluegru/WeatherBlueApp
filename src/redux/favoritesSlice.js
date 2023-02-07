import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavReducer: (state, action) => {
      state.favorites = action.payload;
    },
    addFavReducer: (state, action) => {
      state.favorites.push(action.payload);
    },
    deleteFavReducer: (state, action) => {
      const id = action.payload;
      state.favorites = state.favorites.filter((favC) => favC.id !== id);
    },
  },
});

export const { setFavReducer, addFavReducer, deleteFavReducer } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
