import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import useStyles from "./Styles";

const Notification: React.FC = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Tooltip title="Notifications">
        <Box>
          <Badge>
            <NotificationsIcon />
          </Badge>
        </Box>
      </Tooltip>
    </Box>
  );
};

export default Notification;
