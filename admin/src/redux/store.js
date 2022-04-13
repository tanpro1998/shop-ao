import { configureStore, combineReducers } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import userReducer from "./userSlice";

// const rootReducer = combineReducers({
//   darkMode: darkModeReducer,
// });

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  users: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
