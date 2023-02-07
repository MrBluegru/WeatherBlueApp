import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: [],
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setCitieReducer: (state, action) => {
      state.cities = action.payload;
    },
    addCitieReducer: (state, action) => {
      state.cities.push(action.payload);
    },
    deleteCitieReducer: (state, action) => {
      const id = action.payload;
      state.cities = state.cities.filter((citie) => citie.id !== id);
    },
  },
});

export const { setCitieReducer, addCitieReducer, deleteCitieReducer } =
  citiesSlice.actions;

export default citiesSlice.reducer;
