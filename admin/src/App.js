import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import Home from "./pages/Home/Home";
import ListUser from "./pages/ListUser/List";
import ListProduct from "./pages/ListProduct/List";
import ListOrder from "./pages/ListOrder/List";
import Login from "./pages/Login/Login";
function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {user ? (
              <Route index element={<Home currentUser={user} />} />
            ) : (
              <Route index element={<Navigate to="/login" />} />
            )}
            <Route path="users">
              {user ? (
                <Route index element={<ListUser currentUser={user} />} />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="products">
              {user ? (
                <Route index element={<ListProduct currentUser={user} />} />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="orders">
              {user ? (
                <Route index element={<ListOrder currentUser={user} />} />
              ) : (
                <Route index element={<Navigate to="/" />} />
              )}
            </Route>
            <Route path="login">
              {!user ? (
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
