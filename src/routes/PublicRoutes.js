import Customers from "../component/pages/customers";
import Dashboard from "../component/pages/dashboard";
import Profile from "../component/pages/profile";
import ServicesCategories from "../component/pages/service_categories";
import ServicesProvider from "../component/pages/service_provider";
import ServicesRequest from "../component/pages/service_request";
import Services from "../component/pages/services";
import MainLayout from "../layout/MainLayout";
import { ROUTE_DEFINATION } from "../utils/constant/route.constant";

const PrivateRoutes = {
  element: <MainLayout />,
  children: [
    {
      path: ROUTE_DEFINATION.BASE,
      title: ROUTE_DEFINATION.BASE,
      element: <Dashboard />,
    },
    {
      path: ROUTE_DEFINATION.SERVICES,
      title: ROUTE_DEFINATION.SERVICES,
      element: <Services />,
    },
    {
      path: ROUTE_DEFINATION.PROFILE,
      title: ROUTE_DEFINATION.PROFILE,
      element: <Profile />,
    },
    {
      path: ROUTE_DEFINATION.CUSTOMERS,
      title: ROUTE_DEFINATION.CUSTOMERS,
      element: <Customers />,
    },
    {
      path: ROUTE_DEFINATION.SERVICES_CATEGORIES,
      title: ROUTE_DEFINATION.SERVICES_CATEGORIES,
      element: <ServicesCategories />,
    },
    {
      path: ROUTE_DEFINATION.SERVICES_PROVIDER,
      title: ROUTE_DEFINATION.SERVICES_PROVIDER,
      element: <ServicesProvider />,
    },
    {
      path: ROUTE_DEFINATION.SERVICES_REQUEST,
      title: ROUTE_DEFINATION.SERVICES_REQUEST,
      element: <ServicesRequest />,
    },

  ],
};
export default PrivateRoutes;
