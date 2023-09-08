import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { AddArticle, Articles, Categories } from "./app";
import Ads from "./app/ads";
import AdsPlacement from "./app/ads_placement";
import Advertisee from "./app/advertisee";
import Tags from "./app/tags";
import Users from "./app/users/page";
import "./index.css";
import { PrimaryLayout } from "./Layout";
import ThemeProvider from "./Providers/ThemeProvider";
const router = createBrowserRouter([
  {
    path: "",
    element: (
      <PrimaryLayout>
        <Outlet />
      </PrimaryLayout>
    ),
    children: [
      {
        path: "/",
        element: <App />,
      },

      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/articles/add",
        element: <AddArticle />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "tags",
        element: <Tags />,
      },
      {
        path: "advertisee",
        element: <Advertisee />,
      },
      {
        path: "ads",
        element: <Ads />,
      },
      {
        path: "ads_placement",
        element: <AdsPlacement />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
