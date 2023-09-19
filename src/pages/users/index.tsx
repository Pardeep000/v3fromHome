import React, { useState } from "react";
import { Box } from "@mui/material";
import LeftPanel from "src/components/pages/users/LeftPanel";
import RightPanel from "src/components/pages/users/RightPanel";
//
import { ApiProvider } from "./ApiContext";

import useStyles from "./Styles";

const Users = () => {
  const { classes } = useStyles();
  const [showRightPanel, setShowRightPanel] = useState(false);

  const controlRightPanel = (flag: boolean) => {
    setShowRightPanel(flag);
  };
  const apiData = {
    showRightPanel,
    controlRightPanel,
  };
  return (
    <Box className={classes.mainIndex}>
      <ApiProvider contextData={apiData}>
        <LeftPanel />
        <RightPanel />
      </ApiProvider>
    </Box>
  );
};

export default Users;
