import React from "react";
import MenuItem from "@mui/material/MenuItem";
//
import AddUser from "src/assets/images/users/AddUser";
import LinkIcon from "src/assets/images/users/LinkIcon";
import Team from "src/assets/images/users/Team";
//
import {
  InviteAgentModal,
  ShareableLinkModal,
  CreateTeamModal,
} from "./Modals";

import useStyles, { StyledMenu } from "./Styles";

interface IStyleMenu {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
}

const StyledMenuItems = ({ anchorEl, open, handleClose }: IStyleMenu) => {
  const { classes } = useStyles();

  const IconProps = {
    height: 15,
    width: 37,
    color: "#7F3F98",
  };

  const MenuItems = [
    <>
      {" "}
      <AddUser {...IconProps} />
      <InviteAgentModal />
    </>,
    <>
      <LinkIcon {...IconProps} />
      <ShareableLinkModal />
    </>,
    <>
      {" "}
      <Team {...IconProps} />
      <CreateTeamModal />
    </>,
  ];

  return (
    <StyledMenu
      id="user_dropdown"
      MenuListProps={{
        "aria-labelledby": "demo-customized-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      {MenuItems.map((item) => (
        <MenuItem className={classes.buttonMenuItem} disableRipple>
          {item}
        </MenuItem>
      ))}
    </StyledMenu>
  );
};

export default StyledMenuItems;
