import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import Home from "./pages/Home/Home";
import ListUser from "./pages/ListUser/List";
import ListProduct from "./pages/ListProduct/List";
import ListOrder from "./pages/ListOrder/List";
import Login from "./pages/Login/Login";
function App() {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {admin ? (
              <Route index element={<Home currentUser={admin} />} />
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
