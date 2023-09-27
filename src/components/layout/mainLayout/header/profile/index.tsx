/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-constant-condition */
import React, { useState } from "react";
import Box from "src/components/shared/atoms/box";
import Menu from "@mui/material/Menu";
import menuStyles from "src/components/layout/mainLayout/header/profile/constants";
import EditProfile from "src/components/layout/mainLayout/header/profile/editProfile";
import Simple from "src/components/layout/mainLayout/header/profile/simple";
import BadgeWAvatar from "src/components/layout/mainLayout/header/profile/badgeWAvatar";
import useStyles from "./Styles";

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [editProfile, setEditProfile] = useState<boolean>(false);
  const open = Boolean(anchorEl);
  const { classes } = useStyles();

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setEditProfile(false);
  };

  const [profile] = useState({
    id: "",
    name: "",
    email: "",
    picture: "",
    number: "",
    pseudonym: "",
    designation: "",
  });

  return (
    <>
      <Box className={classes.profile}>
        <BadgeWAvatar login picture={profile.picture} onClick={handleOpen} />
      </Box>
      {/* Menu */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: menuStyles.paper,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {editProfile ? (
          <EditProfile
            setAnchorEl={setAnchorEl}
            profile={profile}
            setEditProfile={setEditProfile}
          />
        ) : (
          <Simple profile={profile} setEditProfile={setEditProfile} />
        )}
      </Menu>
    </>
  );
};

export default Profile;
