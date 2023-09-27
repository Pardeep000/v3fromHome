import React from "react";
import { Box, Divider, Typography, Switch } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UseContext from "src/components/context/users/UseContext";
import useStyles from "./Style";

interface IdData {
  edit: boolean;
  setEdit: (value: boolean) => void;
}

const Index: React.FC<IdData> = ({ edit, setEdit }) => {
  const { classes } = useStyles();
  const contextData = UseContext();

  const closePanel = () => {
    // contextData.controlRightPanel(false);
    if (contextData) contextData.setShowRightPanel(false);
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

export default Index;
