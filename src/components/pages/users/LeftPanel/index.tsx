// eslint-disable-next-line import/no-extraneous-dependencies
import { Box } from "@mui/material";
import UsersList from "src/components/pages/users/LeftPanel/UsersList";
import Header from "../Header";
import useStyles from "./Styles";

const LeftPanel = () => {
  const { classes } = useStyles();
  //
  return (
    <Box className={classes.leftPanelLayout}>
      <Header />
      <UsersList />
    </Box>
  );
};

export default LeftPanel;
