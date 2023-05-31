import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import LayoutDashboard from "../LayoutDashboard/LayoutDashboard";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <LayoutDashboard/>,
      children: [
        {
          path: "/Dashboard",
          element: <Navigate to="/" />,
        },
      ]
    },
  ]);
  return routing;
}
