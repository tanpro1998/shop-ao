import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeItemFromCart: (state, action) => {
      state.quantity -= 1;
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      state.cartItems = removeItem;
    },
    resetCart: (state) => {
      state.cartItems = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, resetCart } =
  cartSlice.actions;
export default cartSlice.reducer;
