import React, { useState } from "react";
import Box from "src/components/shared/atoms/box";
import MenuItem from "src/components/shared/atoms/menuItem";
import Button from "src/components/shared/atoms/button";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "src/components/shared/atoms/typography";
import Chip from "src/components/shared/atoms/chip";
import Avatar from "src/components/shared/atoms/avatar";
import useStyles from "./Styles";
import { Props } from "./Types";
import UpgragePlan from "./upgragePlan";

const Simple: React.FC<Props> = ({ setEditProfile, profile }) => {
  const { classes } = useStyles();
  const handleEditProfile = (event: { stopPropagation: () => void }) => {
    // Handle menu item click here
    event.stopPropagation();
    setEditProfile(true);
  };

  const [acceptingChats, SetAcceptingChats] = useState(false);

  const handleChange = () => {
    SetAcceptingChats(!acceptingChats);
  };

  return (
    <Box>
      <MenuItem className={classes.menuItem}>
        <Box className={classes.box}>
          <Avatar src={profile.picture} className={classes.avatar} />
        </Box>
      </MenuItem>
      <Typography className={classes.profileName}>{profile.name}</Typography>
      <Typography className={classes.profilePseudonym}>
        {profile.pseudonym}
      </Typography>
      <Box className={classes.boxChip}>
        <Chip className={classes.chip} label={profile.designation} />
      </Box>

      <MenuItem className={`${classes.menuItem} ${classes.paddingTop}`}>
        <Button
          variant="outlined"
          className={classes.button}
          handleClick={handleEditProfile}
        >
          <ModeEditIcon className={classes.icon} />
          <Typography className={classes.marginLeft}>Edit profile</Typography>
        </Button>
      </MenuItem>

      <MenuItem className={`${classes.menuItem} ${classes.upgrade}`}>
        <UpgragePlan />
      </MenuItem>

      <MenuItem className={`${classes.menuItem} ${classes.menuItemHeight}`}>
        <FormControlLabel
          className={classes.formControl}
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

      <MenuItem className={`${classes.menuItem} ${classes.menuItemHeight}`}>
        <FormControlLabel
          className={classes.formControl}
          control={<Switch disabled name="loading" color="primary" />}
          label="Dark mode"
        />
      </MenuItem>
    </Box>
  );
};

export default Simple;
