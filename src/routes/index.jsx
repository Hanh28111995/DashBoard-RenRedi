import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import LayoutDashboard from "../LayoutDashboard/LayoutDashboard";
import Dashboard from "../Pages/Dashboard/Dashboard";
import"../Pages/Dashboard/Dashboard.scss"

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <LayoutDashboard/>,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard/>,
        },
      ]
    },
  ]);
  return routing;
}
