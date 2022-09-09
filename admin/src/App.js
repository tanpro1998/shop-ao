import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import ListUser from "./pages/ListUser/List";
import ListProduct from "./pages/ListProduct/List";
import ListAccessory from "./pages/ListAccsessory/List";
import ListOrder from "./pages/ListOrder/List";
import Login from "./pages/Login/Login";
import AddProduct from "./pages/Add/AddProduct";
import { useDispatch } from "react-redux";
import {
  getAllAccessories,
  getAllOrders,
  getAllProducts,
  getAllUsers,
} from "./redux/callAPI";
import Edit from "./pages/Edit/Edit";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const { darkMode } = useContext(DarkModeContext);

  const dispatch = useDispatch();

  useEffect(() => {
    getAllUsers(dispatch);
    getAllProducts(dispatch);
    getAllAccessories(dispatch);
    getAllOrders(dispatch);
  }, [dispatch]);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {admin ? (
              <Route index element={<Home />} />
            ) : (
              <Route index element={<Navigate to="/login" />} />
            )}
            <Route path="users">
              {admin ? (
                <Route index element={<ListUser />} />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="products">
              {admin ? (
                <Route index element={<ListProduct />} />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="accessories">
              {admin ? (
                <Route index element={<ListAccessory />} />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="orders">
              {admin ? (
                <Route index element={<ListOrder />} />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="login">
              {!admin ? (
                <Route index element={<Login />} />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="addproduct">
              {admin ? (
                <Route index element={<AddProduct type="products" />} />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="addaccessory">
              {admin ? (
                <Route index element={<AddProduct type="accessories" />} />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="editrole/:userId">
              {admin ? (
                <Route index element={<Edit type="users" />} />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="editproduct/:productId">
              {admin ? (
                <Route index element={<Edit type="products" />} />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="editaccessory/:accessoryId">
              {admin ? (
                <Route index element={<Edit type="accessories" />} />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
