import { AppBar, Toolbar } from "@mui/material";
import { FC, ReactNode } from "react";
import useStyles from "src/components/layout/mainLayout/header/appbar/Styles";

interface Props {
  children: ReactNode;
}
const Appbar: FC<Props> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <AppBar
      enableColorOnDark
      position="fixed"
      color="inherit"
      elevation={0}
      className={classes.appbar}
    >
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};

export default Appbar;
