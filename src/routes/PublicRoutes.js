import Login from "../component/pages/login";
import LoginLayout from "../layout/LoginLayout";
import { ROUTE_DEFINATION } from "../utils/constant/route.constant";

const PublicRoutes = {
  element: <LoginLayout />,
  children: [
    {
      path: ROUTE_DEFINATION.BASE,
      title: ROUTE_DEFINATION.BASE,
      element: <Login />,
    },
  ],
};
export default PublicRoutes;
