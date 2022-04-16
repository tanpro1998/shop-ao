import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./sass/index.scss";
import "antd/dist/antd.min.css";
import { DarkModeProvider } from "./context/darkModeContext";
import { Provider } from "react-redux";
import store from "./redux/store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </Provider>
);
