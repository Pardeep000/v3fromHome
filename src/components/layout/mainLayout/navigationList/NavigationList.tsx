import React from "react";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from "clsx";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import ForumIcon from "@mui/icons-material/Forum";
import HomeIcon from "@mui/icons-material/Home";
import { Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { Drawer, DrawerHeader } from "src/components/layout/mainLayout/drawer";
import KuikwitLogo from "src/assets/images/auth/KuikwitLogo";
import KuikwitTextLogo from "src/assets/images/auth/KuikwitTextLogo";
import useStyles from "./Styles";

interface ActiveUserDetailType {
  id: string;
  paneltype: string;
  mainSuperAdminId: string;
  name: string;
  managerId: string;
}

const NavigationList = () => {
  const { classes } = useStyles();
  const location = useLocation();

  const [open, setOpen] = React.useState(false);
  const handleMouseEnter = () => {
    setOpen(!open);
  };
  const handleMouseLeave = () => {
    setOpen(!open);
  };

  let uperItems = [
    {
      name: "Dashboard",
      icon: (
        <IconButton>
          <HomeIcon
            className={clsx(classes.icon, {
              [classes.linkSelectedtext]:
                location.pathname.includes(`/dashboard`),
            })}
          />
        </IconButton>
      ),
    },
    {
      name: "Chats",
      icon: (
        <IconButton>
          <ForumIcon
            className={clsx(classes.icon, {
              [classes.linkSelectedtext]: location.pathname.includes(`/chats`),
            })}
          />
        </IconButton>
      ),
    },
    {
      name: "Users",
      icon: (
        <IconButton>
          <PeopleIcon
            className={clsx(classes.icon, {
              [classes.linkSelectedtext]: location.pathname.includes(`/users`),
            })}
          />
        </IconButton>
      ),
    },
    {
      name: "Traffic",
      icon: (
        <IconButton>
          <TrackChangesIcon
            className={clsx(classes.icon, {
              [classes.linkSelectedtext]:
                location.pathname.includes(`/traffic`),
            })}
          />
        </IconButton>
      ),
    },
    {
      name: "Reports",
      icon: (
        <IconButton>
          <DescriptionIcon
            className={clsx(classes.icon, {
              [classes.linkSelectedtext]:
                location.pathname.includes(`/reports`),
            })}
          />
        </IconButton>
      ),
    },

    {
      name: "Settings",
      icon: (
        <IconButton>
          <SettingsIcon
            className={clsx(classes.icon, {
              [classes.linkSelectedtext]:
                location.pathname.includes(`/settings`),
            })}
          />{" "}
        </IconButton>
      ),
    },
  ];

  const activeUsers: string | number | null =
    localStorage.getItem("ActiveUserdetail");
  const user: ActiveUserDetailType = activeUsers && JSON.parse(activeUsers);
  const [activeUserData] = React.useState<ActiveUserDetailType>({ ...user });

  // removing user icon from manager and agent

  if (activeUserData && activeUserData.paneltype !== "SUPERADMIN") {
    uperItems = uperItems.filter((item) => item.name !== "Traffic");
    if (activeUserData.paneltype === "AGENT") {
      uperItems = uperItems.filter((item) => item.name !== "Users");
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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
                <KuikwitLogo />
              </ListItemIcon>
              <KuikwitTextLogo open={open} />
            </ListItemButton>
          </ListItem>
        </DrawerHeader>
        <List>
          {uperItems.map(({ name, icon }) => (
            <ListItem key={name} className={classes.uperItems}>
              <Link
                to={`/${name.toLowerCase()}`}
                className={clsx(classes.listLink, {
                  [classes.linkSelected]:
                    open &&
                    location.pathname.includes(`/${name.toLowerCase()}`),
                })}
              >
                <ListItemButton
                  disableRipple
                  className={clsx(classes.listItemButton, {
                    [classes.full]:
                      open &&
                      location.pathname.includes(`/${name.toLowerCase()}`),
                    [classes.listItemButtonOpen]: open,
                  })}
                >
                  <ListItemIcon
                    className={clsx(classes.listItemButtonIcon, {
                      [classes.listItemButtonIconOpen]: open,
                    })}
                  >
                    <Box
                      className={clsx(classes.top, {
                        [classes.back]: location.pathname.includes(
                          `/${name.toLowerCase()}`,
                        ),
                      })}
                    >
                      {icon}
                    </Box>
                  </ListItemIcon>

                  <ListItemText
                    className={clsx(classes.listLink, {
                      [classes.linkSelectedtext]:
                        open &&
                        location.pathname.includes(`/${name.toLowerCase()}`),
                    })}
                  >
                    <Typography
                      className={clsx(classes.listItemTextTypography, {
                        [classes.linkSelectedtext]:
                          open &&
                          location.pathname.includes(`/${name.toLowerCase()}`),
                        [classes.listItemTextTypographyOpen]: open,
                        [classes.listItemTextTypographyLocation]:
                          location.pathname.includes(`/${name.toLowerCase()}`),
                      })}
                    >
                      {name}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <List className={classes.listBelow}>
          <ListItem sx={{ display: "block", padding: 0, height: "45px" }}>
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
      </Drawer>
    </Box>
  );
};

export default NavigationList;
