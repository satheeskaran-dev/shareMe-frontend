import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import privateRoutes from "./privateRoutes";
import publicRoutes from "./publicRoutes";

const Router = () => {
  const token = useSelector((state) => state?.persist?.auth?.token);

  return useRoutes(token ? privateRoutes : publicRoutes);
};

export default Router;
