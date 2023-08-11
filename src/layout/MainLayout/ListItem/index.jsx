import {
  AccountBoxOutlined,
  Assessment,
  CarCrash,
  Category,
  Dashboard,
  Logout,
  MinorCrash,
  SupervisorAccount,
  SupportAgent,
} from "@mui/icons-material";
import React from "react";
import { ROUTE_DEFINATION } from "../../../utils/constant/route.constant";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ItemList = ({ open }) => {
  const navigate = useNavigate();
  const CustmerList = [
    {
      icon: <Dashboard />,
      value: "Dashboard",
      path: ROUTE_DEFINATION.BASE,
    },
    {
      icon: <SupervisorAccount />,
      value: "Customers",
      path: ROUTE_DEFINATION.CUSTOMERS,
    },
    {
      icon: <CarCrash />,
      value: "Service-Request",
      path: ROUTE_DEFINATION.SERVICES_REQUEST,
    },

    {
      icon: <SupportAgent />,
      value: "Service",
      path: ROUTE_DEFINATION.SERVICES_PROVIDER,
    },
    {
      id: "5",
      icon: <Category />,
      value: "Service Categories",
      path: ROUTE_DEFINATION.SERVICES_CATEGORIES,
    },
    {
      id: "6",
      icon: <MinorCrash />,
      value: "Service ",
      path: ROUTE_DEFINATION.SERVICES,
    },
    {
      id: "7",
      icon: <Assessment />,
      value: "Reports ",
      path: ROUTE_DEFINATION.REPORTS,
    },
  ];
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        height="100%"
      >
        <Box>
          {CustmerList.map((item, index) => {
            return (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton onClick={() => navigate(item.path)}>
                  <ListItemIcon
                    sx={{
                      minWidth: "50px",
                      color: "#3692ed",
                      display: "inline-flex",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.value} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </Box>
        <Box>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#3692ed" }}>
                  <AccountBoxOutlined />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#3692ed" }}>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Log out" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default ItemList;
