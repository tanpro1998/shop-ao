import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getAllUser: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { getAllUser } = userSlice.actions;
export default userSlice.reducer;
