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

/** 
  All of the routes for the Material Kit 2 PRO React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import Rental from "layouts/pages/landing-pages/rental";
import SignInBasicPage from "layouts/authentication/sign-in/basic";
import SignUpCoverPage from "layouts/authentication/sign-up/cover";
import BidAuctionPage from "layouts/pages/AuctionPage/BidAuction";
import CreateAuctionPage from "layouts/pages/AuctionPage/CreateAuction";

const routes = [
  // {
  //   name: "pages",
  //   icon: <Icon>dashboard</Icon>,
  //   columns: 3,
  //   rowsPerColumn: 2,
  //   collapse: [
  //     {
  //       name: "landing pages",
  //       collapse: [
  //         {
  //           name: "rental",
  //           route: "/pages/landing-pages/rental",
  //           component: <Rental />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "landing pages",
  //       collapse: [
  //         {
  //           name: "bid auction",
  //           route: "/pages/AuctionPage/BidAuction/:auctionId",
  //           component: <BidAuctionPage />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "landing pages",
  //       collapse: [
  //         {
  //           name: "create auction",
  //           route: "/pages/AuctionPage/CreateAuction",
  //           component: <CreateAuctionPage />,
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    name: "HOME",
    route: "/pages/landing-pages/rental",
    icon: <Icon>dashboard</Icon>,
    columns: 3,
    rowsPerColumn: 2,
    component: <Rental />
  },
  {
    name: "AUCTION",
    icon: <Icon>diamond</Icon>,
    collapse: [
      {
        name: "AUCTION ROOM",
        route: "/pages/auctionPage/bidAuction/:auctionId",
        component: <BidAuctionPage />,
      },
      {
        name: "CREATE AUCTION",
        route: "/pages/auctionPage/createAuction",
        component: <CreateAuctionPage />,
      },
    ]
  },
  {
    name: "INVENTORY",
    route: "/",
    icon: <Icon>inventory</Icon>,
    // columns: 2,
    // rowsPerColumn: 3,
    collapse: [
      {
        name: "STANDARD INVENTORY",
        route: "/pages/landing-pages/rental",
        component: <Rental />,
      },
      {
        name: "MODERN INVENTORY",
        route: "/pages/landing-pages/rental",
        component: <Rental />,
      },
      {
        name: "SOLD INVENTORY",
        route: "/pages/landing-pages/rental",
        component: <Rental />,
      },
    ],
  },
  {
    name: "NEWS",
    route: "/",
    icon: <Icon>feeds</Icon>,
    columns: 3,
    rowsPerColumn: 2,
    component: <Rental />
  },
  {
    name: "SHOP",
    route: "/",
    icon: <Icon>shop</Icon>,
    columns: 3,
    rowsPerColumn: 2,
    component: <Rental />
  },
  {
    name: "CONTACT",
    route: "/",
    icon: <Icon>message</Icon>,
    columns: 3,
    rowsPerColumn: 2,
    component: <Rental />
  },
  {
    name: "account",
    icon: <Icon>contacts</Icon>,
    collapse: [
      {
        name: "sign in",
        dropdown: true,
        collapse: [
          {
            name: "basic",
            route: "/authentication/sign-in/basic",
            component: <SignInBasicPage />,
          },
        ],
      },
      {
        name: "sign up",
        dropdown: true,
        collapse: [
          {
            name: "cover",
            route: "/authentication/sign-up/cover",
            component: <SignUpCoverPage />,
          },
        ],
      },
    ],
  },
];

export default routes;
