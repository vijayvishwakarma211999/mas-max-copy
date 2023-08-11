import { useEffect, useState } from "react";
import PublicRoutes from "./PublicRoutes";
import { useRoutes } from "react-router-dom";
import PrivateRoutes from "./PublicRoutes";

export default function Routes({ isLoggedIn }) {
  const [currentRoutes, setCurrentRoutes] = useState([]);
  useEffect(() => {
    if (isLoggedIn) {
      setCurrentRoutes([PrivateRoutes]);
    } else {
      setCurrentRoutes([PublicRoutes]);
    }
  }, [isLoggedIn]);
  return useRoutes(currentRoutes);
}
