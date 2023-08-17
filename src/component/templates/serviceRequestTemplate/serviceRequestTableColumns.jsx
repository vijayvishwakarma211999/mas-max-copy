import { RemoveRedEye } from "@mui/icons-material";
import { Chip, IconButton, Tooltip } from "@mui/material";
import React from "react";

export const ServiceRequestTableColumns = () => {
  return [
    {
      name: "service",
      label: "SERVICE",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "provider",
      label: "PROVIDER",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "cust_name",
      label: "CUST.NAME",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "veh_info",
      label: "VEH.INFO",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "amount",
      label: "AMOUNT",
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
        customBodyRender: (value, tableMeta) => {
          return <Chip label="success" color="success" />;
        },
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
