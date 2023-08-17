import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ItemList from "../ListItem";
import LogoComponenet from "../../../component/Logo";
import { Avatar, Box } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  ...(!open && {
    width: "100px",
  }),
}));
const Sidebar = ({ open, setOpen }) => {
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      <Drawer variant="permanent" open={open} sx={{ borderRight: "none" }}>
        <DrawerHeader>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            {open ? (
              <LogoComponenet />
            ) : (
              <Avatar sx={{ bgcolor: "#1976d2", fontSize: "15px" }}>MM</Avatar>
            )}
          </Box>
          {/* <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton> */}
        </DrawerHeader>

        <List {...{ open, setOpen }} sx={{ height: "100%", padding: "5px" }}>
          <ItemList />
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default Sidebar;
