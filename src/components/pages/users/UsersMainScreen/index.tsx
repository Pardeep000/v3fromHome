// eslint-disable-next-line import/no-extraneous-dependencies
import { Box } from "@mui/material";
import UsersList from "src/components/pages/users/UsersMainScreen/UsersList";
import Header from "./Header";
import useStyles from "./Styles";

const UsersMainScreen = () => {
  const { classes } = useStyles();
  //
  return (
    <Box className={classes.leftPanelLayout}>
      <Header />
      <UsersList />
    </Box>
  );
};

export default UsersMainScreen;
