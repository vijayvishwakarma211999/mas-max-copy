import {
  Avatar,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Box sx={{ p: 2 }}>
            <List sx={{ py: 0 }}>
              <ListItem alignItems="flex-start" disableGutters sx={{ py: 0 }}>
                <ListItemAvatar sx={{ mt: 0 }}>
                  <Avatar variant="rounded">
                    {/* <TableChartOutlinedIcon fontSize="inherit" /> */}
                  </Avatar>
                </ListItemAvatar>
                <div>
                  <Typography variant="h3" color={"primary"}></Typography>
                  <ListItemText
                    sx={{
                      py: 0,
                      mt: 0.45,
                      mb: 0.45,
                    }}
                    primary={
                      <Typography variant="h4" color="primary"></Typography>
                    }
                    secondary={
                      <Typography
                        variant="subtitle2"
                        color="primary"
                        sx={{ mt: 0.25 }}
                      ></Typography>
                    }
                  />
                </div>
              </ListItem>
            </List>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Dashboard;
