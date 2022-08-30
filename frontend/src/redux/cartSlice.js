import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItemFromCart: (state, action) => {
      state.cartItems.map((cartItem) => {
        if (cartItem._id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item._id !== cartItem._id
          );

          state.cartItems = nextCartItems;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    resetCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, resetCart } =
  cartSlice.actions;
export default cartSlice.reducer;
