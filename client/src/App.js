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
import BiddingAuctionPage from "./layouts/pages/auction-pages/bidding-auction";
import AdminUserPage from "./layouts/Admin/User";
import AdminAllPage from "./layouts/Admin/AllAuction";
import AdminUpcomingPage from "./layouts/Admin/UpcomingAuction";
import AdminActivePage from "./layouts/Admin/ActiveAuction";
import AdminClosedPage from "./layouts/Admin/ClosedAuction";
import SignOut from './layouts/authentication/SignOut';
// Material Kit 2 PRO React routes

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route, index) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route && route.component) {
        return <Route path={route.route} element={route.component} key={index} exact={route.exact?true:false} />;
      }

      return null;
    });

  return (
      <ThemeProvider theme={theme}>
          <Header />
          <Routes>
              {getRoutes(routes)}
              <Route path="/" exact element={<Presentation />} key="presentation"/>
              <Route path="/pages/auction-pages/bidding-auction/:auctionId" exact element={<BiddingAuctionPage/>} />
              <Route path="/pages/admin-page/user" exact element={<AdminUserPage />} />
              <Route path="/pages/admin-page/all" exact element={<AdminAllPage />} />
              <Route path="/pages/admin-page/upcoming" exact element={<AdminUpcomingPage />} />
              <Route path="/pages/admin-page/active" exact element={<AdminActivePage />} />
              <Route path="/pages/admin-page/closed" exact element={<AdminClosedPage />} />
              <Route path="/sign-out" exact element={<SignOut />} />
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
