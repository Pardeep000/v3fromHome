import { lazy } from "react";
import type { RouteObject } from "react-router";
import MainLayout from "src/layout/MainLayout";
import Loadable from "../components/hoc/Loadable";
// import AuthGuard from "../components/hoc/AuthGuard";
import GuestGuard from "../components/hoc/GuestGuard";

const Login = Loadable(lazy(() => import("src/pages/auth/login/Login")));
const Signup = Loadable(lazy(() => import("src/pages/auth/signup/Signup")));
const ForgetPassword = Loadable(
  lazy(() => import("src/pages/auth/ForgetPassword")),
);
const EmailConfirm = Loadable(
  lazy(() => import("src/pages/auth/EmailConfirm")),
);
const InviteUser = Loadable(lazy(() => import("src/pages/auth/InviteUser")));

const Dashboard = Loadable(lazy(() => import("../pages/dashboard")));

const Users = Loadable(lazy(() => import("../pages/users")));

const Reports = Loadable(lazy(() => import("../pages/reports")));

const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        path: "login",
        element: (
          <GuestGuard>
            <Login />
          </GuestGuard>
        ),
      },
      {
        path: "signup",
        element: (
          <GuestGuard>
            <Signup />
          </GuestGuard>
        ),
      },
      {
        path: "forgetpassword",
        element: (
          <GuestGuard>
            <ForgetPassword />
          </GuestGuard>
        ),
      },
      {
        path: "confirm",
        element: (
          <GuestGuard>
            <EmailConfirm />
          </GuestGuard>
        ),
      },
      {
        path: "inviteAgent",
        element: (
          <GuestGuard>
            <InviteUser />
          </GuestGuard>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    children: [
      {
        index: true,
        element: (
          <MainLayout>
            <Dashboard />
          </MainLayout>
        ),
      },
    ],
  },
  {
    path: "/reports",
    children: [
      {
        index: true,
        element: (
          <MainLayout>
            <Reports />
          </MainLayout>
        ),
      },
    ],
  },
  {
    path: "/users",
    children: [
      {
        index: true,
        element: (
          <MainLayout>
            <Users />
          </MainLayout>
        ),
      },
    ],
  },
];

export default routes;
