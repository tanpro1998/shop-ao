import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import Home from "./pages/Home/Home";
import ListUser from "./pages/ListUser/List";
import ListProduct from "./pages/ListProduct/List";
import ListAccessory from "./pages/ListAccsessory/List";
import ListOrder from "./pages/ListOrder/List";
import Login from "./pages/Login/Login";
import AddProduct from "./pages/Add/AddProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAccessories,
  getAllOrders,
  getAllProducts,
  getAllUsers,
} from "./redux/callAPI";
import Edit from "./pages/Edit/Edit";

function App() {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const { darkMode } = useContext(DarkModeContext);

  const { users } = useSelector((state) => state.users);
  const { products } = useSelector((state) => state.products);
  const { accessories } = useSelector((state) => state.accessories);
  const { orders } = useSelector((state) => state.orders);
  const resultOrders = orders?.data;

  const dispatch = useDispatch();

  useEffect(() => {
    getAllUsers(dispatch);
    getAllProducts(dispatch);
    getAllAccessories(dispatch);
    getAllOrders(dispatch);
  }, [dispatch]);

  let sum = 0;
  for (let i = 0; i < resultOrders?.length; i++) {
    sum += resultOrders[i].amount;
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {admin ? (
              <Route
                index
                element={
                  <Home
                    currentUser={admin}
                    sum={sum}
                    users={users}
                    products={products}
                    orders={resultOrders}
                    accessories={accessories}
                  />
                }
              />
            ) : (
              <Route index element={<Navigate to="/login" />} />
            )}
            <Route path="users">
              {admin ? (
                <Route index element={<ListUser currentUser={admin} />} />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="products">
              {admin ? (
                <Route index element={<ListProduct currentUser={admin} />} />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="accessories">
              {admin ? (
                <Route index element={<ListAccessory currentUser={admin} />} />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="orders">
              {admin ? (
                <Route index element={<ListOrder currentUser={admin} />} />
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
                <Route
                  index
                  element={<AddProduct currentUser={admin} type="products" />}
                />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="addaccessory">
              {admin ? (
                <Route
                  index
                  element={
                    <AddProduct currentUser={admin} type="accessories" />
                  }
                />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="editrole/:userId">
              {admin ? (
                <Route
                  index
                  element={<Edit currentUser={admin} type="users" />}
                />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="editproduct/:productId">
              {admin ? (
                <Route
                  index
                  element={<Edit currentUser={admin} type="products" />}
                />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="editaccessory/:accessoryId">
              {admin ? (
                <Route
                  index
                  element={<Edit currentUser={admin} type="accessories" />}
                />
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
