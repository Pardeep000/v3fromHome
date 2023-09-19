import React from "react";
import { Box, Divider, Typography, Switch } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useApi } from "src/pages/users/ApiContext";
import useStyles from "./Style";

const index = ({ edit, setEdit }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { classes } = useStyles();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const contextData = useApi();

  const closePanel = () => {
    contextData.controlRightPanel(false);
  };
  return (
    <>
      <Box className={classes.topPanel}>
        <Box className={classes.topPanelRow}>Details</Box>
        <CloseIcon onClick={closePanel} className={classes.crossIcon} />
      </Box>
      <Divider className={classes.divider} />
      <Box className={classes.textAndSwitchOuterBox}>
        <Typography
          variant="subtitle2"
          className={classes.textAndSwitchInnerBox}
        >
          {edit ? "Edit info" : "General info"}
        </Typography>
        <Box className={classes.switchButtonBox}>
          <Switch
            onClick={() => {
              setEdit(!edit);
            }}
          />
          <Typography
            variant="subtitle2"
            className={classes.switchButtonBoxText}
          >
            Edit
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default index;
