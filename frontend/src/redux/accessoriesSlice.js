import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessories: [],
};

const accessorySlice = createSlice({
  name: "accessories",
  initialState,
  reducers: {
    getAllAccessory: (state, action) => {
      state.accessories = action.payload;
    },
  },
});

export const { getAllAccessory } = accessorySlice.actions;
export default accessorySlice.reducer;
