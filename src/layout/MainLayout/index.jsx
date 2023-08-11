import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Box, CssBaseline, styled } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar {...{ open, setOpen }} />
        <Sidebar {...{ open, setOpen }} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
