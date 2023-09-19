import React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import Menu, { MenuProps } from "@mui/material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//
import AddUser from "src/assets/images/users/AddUser";
import LinkIcon from "src/assets/images/users/LinkIcon";
import Team from "src/assets/images/users/Team";
import { StyledMenu } from "./Styles";

import useStyles from "./Styles";

interface IStyleMenu {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
}

const Index = ({ anchorEl, open, handleClose }: IStyleMenu) => {
  const { classes } = useStyles();
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
      <MenuItem className={classes.buttonMenuItem} disableRipple>
        <AddUser height={15} width={37} color="#7F3F98" />
        Invite Agents
      </MenuItem>

      <MenuItem className={classes.buttonMenuItem} disableRipple>
        <LinkIcon height={15} width={37} color="#7F3F98" />
        Share Invite Link
      </MenuItem>

      <MenuItem className={classes.buttonMenuItem} disableRipple>
        <Team height={15} width={37} color="#7F3F98" />
        Create Team
      </MenuItem>
    </StyledMenu>
  );
};

export default Index;
