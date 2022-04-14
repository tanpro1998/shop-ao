import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import Home from "./pages/Home/Home";
import ListUser from "./pages/ListUser/List";
import ListProduct from "./pages/ListProduct/List";
function App() {
  const currentUser = true;
  const { darkMode } = useContext(DarkModeContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="users">
              <Route index element={<ListUser />} />
            </Route>
            <Route path="products">
              <Route index element={<ListProduct />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
