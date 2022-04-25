import { configureStore, combineReducers } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import accessoryReducer from "./accessorySlice";
import orderReducer from "./orderSlice";

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  users: userReducer,
  products: productReducer,
  accessories: accessoryReducer,
  orders: orderReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
