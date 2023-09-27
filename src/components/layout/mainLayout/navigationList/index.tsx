import React from "react";
import clsx from "clsx";
import Box from "src/components/shared/atoms/box";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
  Drawer,
  DrawerHeader,
} from "src/components/layout/mainLayout/navigationList/drawer";
import Logo from "src/assets/images/auth/KuikwitLogo";
import TextLogo from "src/assets/images/auth/KuikwitTextLogo";
import useStyles from "./Styles";
import UpperList from "./upperList/UpperList";
import LowerList from "./lowerList/LowerList";

const NavigationList = () => {
  const { classes } = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleMouseEnter = () => {
    setOpen(!open);
  };
  const handleMouseLeave = () => {
    setOpen(!open);
  };

  return (
    <Box className={classes.root}>
      <CssBaseline />
      {/* drawer */}
      <Drawer
        variant="permanent"
        open={open}
        onMouseEnter={handleMouseEnter}
        className={classes.drawer}
        onMouseLeave={handleMouseLeave}
      >
        <DrawerHeader sx={{ height: 70 }}>
          <ListItem className={classes.listItem}>
            <ListItemButton
              disableRipple
              className={clsx(classes.listItemButton, {
                [classes.listItemButtonOpen]: open,
              })}
            >
              <ListItemIcon
                className={clsx(classes.listItemButtonIcon, {
                  [classes.listItemButtonIconOpen]: open,
                })}
              >
                <Logo />
              </ListItemIcon>
              <TextLogo open={open} />
            </ListItemButton>
          </ListItem>
        </DrawerHeader>
        {/* navigation list */}
        <UpperList open={open} />
        <LowerList open={open} />
      </Drawer>
    </Box>
  );
};

export default NavigationList;
