import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  // name: "user",
  // initialState: {
  //   currentUser: null,
  //   isFetch: false,
  //   error: false,
  // },
  // reducers: {
  //   loginStart: (state) => {
  //     state.isFetch = true;
  //   },
  //   loginSuccess: (state, action) => {
  //     state.isFetch = false;
  //     state.currentUser = action.payload;
  //   },
  //   loginFail: (state) => {
  //     state.isFetch = false;
  //     state.error = true;
  //   },
  //   logout: (state) => {
  //     state.currentUser = null;
  //     state.isFetch = false;
  //     state.error = false;
  //   },
  //   registerStart: (state) => {
  //     state.isFetch = true;
  //   },
  //   registerSuccess: (state, action) => {
  //     state.isFetch = false;
  //     state.currentUser = action.payload;
  //   },
  //   registerFail: (state) => {
  //     state.isFetch = false;
  //     state.error = true;
  //   },
  // },

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

export const {
  // loginStart,
  // loginSuccess,
  // loginFail,
  // registerStart,
  // registerSuccess,
  // registerFail,
  getAllUsers,
} = userSlice.actions;

export default userSlice.reducer;
