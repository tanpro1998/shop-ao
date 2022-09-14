import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import Layout from "./components/Layout/Layout";
import "./sass/index.scss";
import "antd/dist/antd.min.css";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Layout />
    </PersistGate>
  </Provider>
);
