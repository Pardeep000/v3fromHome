import { Link, useLocation } from "react-router-dom";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import clsx from "clsx";
import Box from "src/components/shared/atoms/box";
import ListItemIcon from "@mui/material/ListItemIcon";
import { FC } from "react";
import { ListProps } from "../Types";

import useStyles from "../Styles";

const LowerList: FC<ListProps> = ({ open }) => {
  const location = useLocation();
  const { classes } = useStyles();

  return (
    <List className={classes.listBelow}>
      <ListItem className={classes.uperItems}>
        <Link
          to="/help"
          className={clsx(classes.listLink, {
            [classes.linkSelected]: location.pathname.includes(`/help`),
          })}
        >
          <ListItemButton
            disableRipple
            className={clsx(classes.listItemBelowButton, {
              [classes.full]: open && location.pathname.includes(`/help`),
              [classes.listItemBelowButtonOpen]: open,
            })}
          >
            <ListItemIcon
              className={clsx(classes.listItemIcon, {
                [classes.listItemIconOpen]: open,
              })}
            >
              <Box
                className={clsx(classes.top, {
                  [classes.back]: location.pathname.includes(`/help`),
                })}
              >
                <HelpIcon />
              </Box>
            </ListItemIcon>
            <ListItemText
              className={clsx(classes.listLink, {
                [classes.linkSelectedtext]:
                  open && location.pathname.includes(`/help`),
              })}
            >
              <Typography
                className={clsx(classes.help, {
                  [classes.linkSelectedtext]:
                    open && location.pathname.includes(`/help`),
                  [classes.logoutTextOpen]: open,
                })}
              >
                Help
              </Typography>
            </ListItemText>
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem className={classes.listLink}>
        <Link
          to="/"
          className={clsx(classes.listLink, {
            [classes.linkSelected]: location.pathname.includes(`/logout`),
          })}
        >
          <ListItemButton
            disableRipple
            className={clsx(classes.logoutButton, {
              [classes.logoutButtonOpen]: open,
            })}
          >
            <ListItemIcon>
              <LogoutIcon color="error" />
            </ListItemIcon>
            <ListItemText className={clsx(classes.listLink, {})}>
              <Typography
                className={clsx(classes.logoutText, {
                  [classes.logoutTextOpen]: open,
                })}
              >
                {" "}
                Logout
              </Typography>
            </ListItemText>
          </ListItemButton>
        </Link>
      </ListItem>
    </List>
  );
};

export default LowerList;
