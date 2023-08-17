import { RemoveRedEye } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

export const CustomerTableColumns = ({ openModel, setOpenModel }) => {
  return [
    {
      name: "name",
      label: "Full Name",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "dob",
      label: "DOB",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          return (
            <Tooltip title="Add Details">
              <IconButton
                size="small"
                color="secondary"
                onClick={() => {
                  setOpenModel(true);
                }}
              >
                <RemoveRedEye sx={{ color: "#1976d2" }} />
              </IconButton>
            </Tooltip>
          );
        },
      },
    },
  ];
};
