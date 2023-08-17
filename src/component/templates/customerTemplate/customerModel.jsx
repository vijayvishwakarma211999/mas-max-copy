import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

export default function CustomerAlertDialog({ openModel, setOpenModel }) {
  const Head = {
    header: {
      fontSize: "12px",
    },
    content: {
      fontSize: "14px",
    },
  };
  return (
    <div>
      <Dialog
        open={openModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Customer Details</Typography>
            <IconButton onClick={() => setOpenModel(false)}>
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>
        {/* <Typography p={1}>
          <Close />
        </Typography> */}
        <Divider sx={{ bgcolor: "#1976d2" }} />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container>
              <Grid xs={4}>
                <Stack direction="column">
                  <Typography sx={Head.header}>Role</Typography>
                  <Typography sx={Head.content}>Customer</Typography>
                </Stack>
              </Grid>
              <Grid xs={4}>
                <Stack direction="column">
                  <Typography sx={Head.header}>FirstName</Typography>
                  <Typography sx={Head.content}>Aadi</Typography>
                </Stack>
              </Grid>
              <Grid xs={4}>
                <Stack direction="column">
                  <Typography sx={Head.header}>LastName</Typography>
                  <Typography sx={Head.content}>Patil</Typography>
                </Stack>
              </Grid>
            </Grid>
          </DialogContentText>
          <DialogContentText id="alert-dialog-description" sx={{ mt: "15px" }}>
            <Grid container>
              <Grid xs={4}>
                <Stack direction="column">
                  <Typography sx={Head.header}>Email Id</Typography>
                  <Typography sx={Head.content}>
                    Tests.Rajtest@Gmail.Com
                  </Typography>
                </Stack>
              </Grid>
              <Grid xs={4}>
                <Stack direction="column">
                  <Typography sx={Head.header}>Created At</Typography>
                  <Typography sx={Head.content}>08/16/2023</Typography>
                </Stack>
              </Grid>
              <Grid xs={4}>
                <Stack direction="column">
                  <Typography sx={Head.header}>Address</Typography>
                  <Typography sx={Head.content}>--</Typography>
                </Stack>
              </Grid>
            </Grid>
          </DialogContentText>
          <DialogContentText id="alert-dialog-description" sx={{ mt: "15px" }}>
            <Grid container>
              <Grid xs={4}>
                <Stack direction="column">
                  <Typography sx={Head.header}>Mobile Number </Typography>
                  <Typography sx={Head.content}>8540843859 </Typography>
                </Stack>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
