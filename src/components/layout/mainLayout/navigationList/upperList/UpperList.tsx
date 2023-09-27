import IconButton from "@mui/material/IconButton";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import PeopleIcon from "@mui/icons-material/People";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import ForumIcon from "@mui/icons-material/Forum";
import HomeIcon from "@mui/icons-material/Home";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import clsx from "clsx";
import Box from "src/components/shared/atoms/box";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link, useLocation } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { Typography } from "@mui/material";
import { FC } from "react";
import useActiveUserDetail from "src/utils/shared/useActiveUserDetail";
import useStyles from "../Styles";
import { ListProps } from "../Types";

const UpperList: FC<ListProps> = ({ open }) => {
  const location = useLocation();
  const { classes } = useStyles();

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

  const { panelType } = useActiveUserDetail();
  // removing user icon from manager and agent
  const panelTypeNonNull = panelType ?? "";

  if (panelTypeNonNull !== "SUPERADMIN") {
    uperItems = uperItems.filter((item) => item.name !== "Traffic");
    if (panelTypeNonNull === "AGENT") {
      uperItems = uperItems.filter((item) => item.name !== "Users");
    }
  }

  return (
    <List>
      {uperItems.map(({ name, icon }) => (
        <ListItem key={name} className={classes.uperItems}>
          <Link
            to={`/${name.toLowerCase()}`}
            className={clsx(classes.listLink, {
              [classes.linkSelected]:
                open && location.pathname.includes(`/${name.toLowerCase()}`),
            })}
          >
            <ListItemButton
              disableRipple
              className={clsx(classes.listItemButton, {
                [classes.full]:
                  open && location.pathname.includes(`/${name.toLowerCase()}`),
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
  );
};

export default UpperList;
