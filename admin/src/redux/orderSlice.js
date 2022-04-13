import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    getAllOrder: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const { getAllOrder } = orderSlice.actions;
export default orderSlice.reducer;
