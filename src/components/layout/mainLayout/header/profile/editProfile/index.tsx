import React from "react";
import Box from "src/components/shared/atoms/box";
import AddImageAvatar from "src/components/shared/atoms/uploadImage/AddImageAvatar";
import Chip from "src/components/shared/atoms/chip";
import Typography from "src/components/shared/atoms/typography";
import FormikForm from "src/components/layout/mainLayout/header/profile/editProfile/editForm";
import MenuItem from "src/components/shared/atoms/menuItem";
import useStyles from "./Styles";
import { Props } from "./Types";

const EditProfile: React.FC<Props> = ({
  setEditProfile,
  profile,
  setAnchorEl,
}) => {
  const { classes } = useStyles();
  const { picture } = profile;

  return (
    <Box className={classes.root}>
      {/* upload image */}
      <MenuItem className={classes.menuItem}>
        <Box className={classes.addImageBox}>
          <AddImageAvatar
            id="uploadFile"
            picture={picture ?? ""}
            className={classes.addImage}
          />
        </Box>
      </MenuItem>
      <Typography className={classes.profileName}>{profile.name}</Typography>
      <Typography className={classes.profilePseudonym}>
        {profile.pseudonym}
      </Typography>
      <Box className={classes.boxChip}>
        <Chip className={classes.chip} label={profile.designation} />
      </Box>
      <MenuItem className={classes.menuItem}>
        {/* form */}
        <FormikForm
          setEditProfile={setEditProfile}
          profile={profile}
          setAnchorEl={setAnchorEl}
        />
      </MenuItem>
    </Box>
  );
};

export default EditProfile;
