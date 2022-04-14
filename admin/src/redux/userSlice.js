import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getAllUser: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { getAllUser } = userSlice.actions;
export default userSlice.reducer;
