import { Navigate } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";

const publicRoutes = [
  {
    path: "/",
    element: <Navigate replace to='/login' />,
  },
  {
    path: "*",
    element: <Navigate replace to='/login' />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
];

export default publicRoutes;
