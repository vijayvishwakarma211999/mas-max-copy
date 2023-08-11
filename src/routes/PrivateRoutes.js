import Login from "../component/pages/login";
import LoginLayout from "../layout/LoginLayout";
import { ROUTE_DEFINATION } from "../utils/constant/route.constant";

const PublicRoutes = {
  element: <LoginLayout />,
  children: [
    {
      path: ROUTE_DEFINATION.LOGIN,
      element: <Login />,
    },
  ],
};
export default PublicRoutes;
