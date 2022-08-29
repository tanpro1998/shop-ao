import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routers from "../../routes/Router";
import ScrollToTop from "../ScrollIntoView/ScrollToTop";

const Layout = () => {
  return (
    <Router>
      <div className="container">
        <div className="main">
          <ScrollToTop />
          <Routers />
        </div>
      </div>
    </Router>
  );
};

export default Layout;
