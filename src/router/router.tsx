import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout, Page404 } from "components";
import { Home } from "modules";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
