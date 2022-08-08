import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeItemFromCart: (state, action) => {
      let index = state.products.findIndex(
        (product) => product.id === action.payload
      );
     
      state.products.splice(index, 1);
      state.quantity -= 1;
    },
    resetCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, resetCart } =
  cartSlice.actions;
export default cartSlice.reducer;
