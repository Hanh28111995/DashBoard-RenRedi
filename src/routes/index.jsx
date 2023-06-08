import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import LayoutDashboard from "../LayoutDashboard/LayoutDashboard";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Renter from "../Pages/Renter/Renter";
import Calendar from "../Pages/Calendar/Calendar";
import TenantInfor from "../Pages/Tenant/TenantInfor";
import EventCalendar from "../Pages/Calendar/EventCalendar";


export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <LayoutDashboard />,
      children: [
        {
          path: "/",
          element: <Navigate to="/" />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/renters",
          element: <Renter />,
        },
        {
          path: "/tenantCard",
          element: <TenantInfor />,
        },
        {
          path: "/calendar",
          element: <Calendar />,
        },
        {
          path: "/calendar/calendarEventDetails",
          element: <EventCalendar/>,
        },
      ]
    },
  ]);
  return routing;
}
