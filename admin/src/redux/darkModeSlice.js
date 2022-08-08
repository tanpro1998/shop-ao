import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    light: (state) => {
      state.darkMode = false;
    },
    dark: (state) => {
      state.darkMode = true;
    },
    toggle: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { light, dark, toggle } = darkModeSlice.actions;
export default darkModeSlice.reducer;
