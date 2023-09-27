import * as React from "react";
import { Box } from "@mui/material";
import AddButton from "./AddBtn";
import StyledMenuItems from "./StyledMenuItems";

const UserModalsBtn = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styleMenuProps = {
    anchorEl,
    open,
    handleClose,
  };
  const addBtnProps = {
    open,
    handleClick,
    text: "Add",
  };
  return (
    <Box>
      <AddButton {...addBtnProps} />
      <StyledMenuItems {...styleMenuProps} />
    </Box>
  );
};

export default UserModalsBtn;
