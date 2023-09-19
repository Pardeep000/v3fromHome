import * as React from "react";
import { Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import useStyles from "./Styles";

interface IAddButton {
  open: boolean;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
}

const AddButton = ({ open, handleClick, children }: IAddButton) => {
  const { classes } = useStyles();
  return (
    <Button
      id="user_dropdown"
      aria-controls={open ? "demo-customized-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      disableElevation
      onClick={handleClick}
      //
      variant="contained"
      startIcon={<AddIcon />}
      className={classes.addButton}
    >
      {children}
    </Button>
  );
};

export default AddButton;
