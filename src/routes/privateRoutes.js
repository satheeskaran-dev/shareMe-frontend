import { Navigate } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

const privateRoutes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Navigate replace to='/home' /> },
      { path: "*", element: <Navigate replace to='/home' /> },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
];

export default privateRoutes;
