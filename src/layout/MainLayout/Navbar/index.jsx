import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Stack } from "@mui/material";
import ProfileImg from "../../../assets/images/profile.jpeg";
import { NotificationsNoneOutlined } from "@mui/icons-material";

const Navbar = ({ open, setOpen }) => {
  const drawerWidth = 240;

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
    ...(!open && {
      left: "65px",
    }),
  }));

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <AppBar
        sx={{ background: "none", boxShadow: "none" }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                backgroundColor: "#6ba7e2",
                borderRadius: "10px",
                "&:hover": {
                  background: "#3692ed",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box spacing={2} sx={{ display: "flex", gap: "10px" }}>
              <Box p={1}>
                <IconButton
                  sx={{
                    backgroundColor: "#6ba7e2",
                    borderRadius: "10px",
                    "&:hover": {
                      background: "#3692ed",
                    },
                  }}
                >
                  <NotificationsNoneOutlined />
                </IconButton>
              </Box>
              <Box
                sx={{
                  width: "180px",
                  borderRadius: "26px",
                  backgroundColor: "#6ba7e2",
                  padding: "5px 10px",
                  marginRight: open ? "50px" : "90px",
                  "&:hover": {
                    background: "#3692ed",
                  },
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt="Remy Sharp"
                    src={ProfileImg}
                    sx={{ width: 44, height: 44 }}
                  />
                  <Typography sx={{ fontSize: "14px" }}>
                    Super Admin <br />
                    Admin
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
