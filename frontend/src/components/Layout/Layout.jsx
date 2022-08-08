import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "../../routes/Router";
import ScrollToTop from "../ScrollIntoView/ScrollToTop";

const Layout = (props) => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="container">
          <div className="main">
            <Router />
          </div>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Layout;
