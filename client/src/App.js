/**
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 PRO React themes
import theme from "assets/theme";
import routes from "routes";
import Presentation from "./layouts/pages/landing-pages/rental";
import SignInBasicPage from "./layouts/authentication/sign-in/basic"
import Header from "./components/Header";
// Material Kit 2 PRO React routes

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const MUIPages = <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
          {getRoutes(routes)}
      </Routes>
  </ThemeProvider>;

  return (
      <ThemeProvider theme={theme}>
          <Header />
          <Routes>
              {getRoutes(routes)}
              <Route path="/" exact element={<Presentation />} />
          </Routes>
      </ThemeProvider>
      // <>
      //     <Header />
      //     <Routes>
      //         {/*{getRoutes(routes)}*/}
      //         <Route path="/" exact element={<Presentation />} />
      //         <Route path="*" element={<MUIPages />} />
      //         {/*<Route path="*" element={<Navigate to="/" />} />*/}
      //     </Routes>
      // </>

  );
}
