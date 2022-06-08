import { configureStore, combineReducers } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import accessoryReducer from "./accessorySlice";
import orderReducer from "./orderSlice";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
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
