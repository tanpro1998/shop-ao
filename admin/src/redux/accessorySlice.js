import { createSlice } from "@reduxjs/toolkit";

const accessorySlice = createSlice({
  name: "accessories",
  initialState: {
    accessories: [],
  },
  reducers: {
    getAllAccessory: (state, action) => {
      state.accessories = action.payload;
    },
  },
});

export const { getAllAccessory } = accessorySlice.actions;
export default accessorySlice.reducer;
