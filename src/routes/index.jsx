import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import LayoutDashboard from "../LayoutDashboard/LayoutDashboard";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Renter from "../Pages/Renter/Renter";

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
        {
          path: "/renters",
          element: <Renter/>,
        },
      ]
    },
  ]);
  return routing;
}
