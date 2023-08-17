import { RemoveRedEye } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

export const ServiceProviderTableColumns = () => {
  return [
    {
      name: "bus_name",
      label: "BUS.NAME",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "type",
      label: "TYPE",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "owner",
      label: "OWNER",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "address",
      label: "ADDRESS",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "email",
      label: "EMAIL",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "status",
      label: "STATUS",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "actions",
      label: "ACTIONS",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          return (
            <Tooltip title="Add Details">
              <IconButton size="small" color="secondary">
                <RemoveRedEye sx={{ color: "#1976d2" }} />
              </IconButton>
            </Tooltip>
          );
        },
      },
    },
  ];
};
