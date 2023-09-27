import React from "react";
import { Box } from "@mui/material";
import UsersMainScreen from "src/components/pages/users/UsersMainScreen";
import RightPanel from "src/components/pages/users/RightPanel";
import ContextProvider from "src/components/context/users/Provider";

import useStyles from "./Styles";

const Users = () => {
  const { classes } = useStyles();
  return (
    <ContextProvider>
      <Box className={classes.mainIndex}>
        <UsersMainScreen />
        <RightPanel />
      </Box>
    </ContextProvider>
  );
};

export default Users;
