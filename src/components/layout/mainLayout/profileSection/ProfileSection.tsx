/* eslint-disable no-constant-condition */
import React, { useState } from "react";
import { Avatar, Box, Chip, CircularProgress } from "@mui/material";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import addAlpha from "src/theme/functions/addAlpha";
import useStyles from "./Styles";
import EditProfileSection from "../editProfile/EditProfile";

const ProfileSection = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [editProfile, setEditProfile] = useState<boolean>(false);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = (event: { stopPropagation: () => void }) => {
    // Handle menu item click here
    event.stopPropagation();
  };
  const handleClose = () => {
    setAnchorEl(null);
    setEditProfile(false);
  };

  const handleEditProfile = (event: { stopPropagation: () => void }) => {
    // Handle menu item click here
    event.stopPropagation();
    setEditProfile(!editProfile);
  };
  const { classes } = useStyles();
  const [profile] = useState({
    id: "",
    name: "",
    email: "",
    picture: "",
    number: "",
    pseudonym: "",
    designation: "",
  });
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const [acceptingChats, SetAcceptingChats] = useState(false);

  const handleChange = () => {
    SetAcceptingChats(!acceptingChats);
  };

  return (
    <>
      <Box className={classes.profile}>
        {false && !loaded ? (
          <CircularProgress size={24} className={classes.progress} />
        ) : (
          <Badge
            color={true ? "secondary" : "error"}
            badgeContent=" "
            variant="dot"
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar
              src={profile.picture}
              onLoad={handleLoad}
              onClick={handleOpen}
            />
          </Badge>
        )}
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: 330,
            height: 490,
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {editProfile ? (
          <EditProfileSection
            setAnchorEl={setAnchorEl}
            profile={profile}
            setEditProfile={setEditProfile}
          />
        ) : (
          <Box>
            <MenuItem
              onClick={handleClick}
              className={classes.menuItem}
              disableRipple
            >
              <Box className={classes.box}>
                <Avatar
                  src={profile.picture}
                  onLoad={handleLoad}
                  onClick={handleClick}
                  sx={{ height: "80px !important", width: "80px!important" }}
                />
              </Box>
            </MenuItem>
            <Typography variant="subtitle2" className={classes.profileName}>
              {profile.name}
            </Typography>
            <Typography
              variant="subtitle2"
              className={classes.profilePseudonym}
            >
              {profile.pseudonym}
            </Typography>
            <Box className={classes.boxChip}>
              <Chip className={classes.chip} label={profile.designation} />
            </Box>

            <MenuItem
              onClick={handleClick}
              disableRipple
              sx={{
                paddingTop: "10px",
              }}
              className={classes.menuItem}
            >
              <Button
                variant="outlined"
                sx={{ height: "100%", width: "100%", borderRadius: 15 }}
                onClick={handleEditProfile}
              >
                <ModeEditIcon sx={{ height: 17, width: 17 }} />
                <Typography ml={1}>Edit profile</Typography>{" "}
              </Button>
            </MenuItem>

            <MenuItem
              onClick={handleClick}
              className={classes.menuItem}
              disableRipple
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Box
                p={2}
                sx={{
                  backgroundColor: addAlpha("#FF8A00", 0.1),
                  width: "100%",
                }}
              >
                <Typography variant="subtitle2">Upgrade your plan</Typography>

                <Typography mt={1} variant="body1" className={classes.text}>
                  05 Days left in your trial, Upgrade your plan
                  <br /> now before your account is hold.{" "}
                </Typography>

                <Button className={classes.upgradeNow} variant="contained">
                  Upgrade now
                </Button>
              </Box>
            </MenuItem>

            <MenuItem
              onClick={handleClick}
              className={classes.menuItem}
              disableRipple
              sx={{
                height: 40,
              }}
            >
              <FormControlLabel
                sx={{
                  display: "block",
                }}
                control={
                  <Switch
                    checked={acceptingChats}
                    onChange={handleChange}
                    name="loading"
                    color="primary"
                  />
                }
                label="Accepting chats"
              />
            </MenuItem>

            <MenuItem
              className={classes.menuItem}
              disableRipple
              sx={{
                height: 40,
              }}
            >
              <FormControlLabel
                sx={{
                  display: "block",
                }}
                control={<Switch disabled name="loading" color="primary" />}
                label="Dark mode"
              />
            </MenuItem>
          </Box>
        )}
      </Menu>
    </>
  );
};

export default ProfileSection;
