import React from "react";
import MenuItem from "@mui/material/MenuItem";
// import useStyles from "./Styles";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Item: React.FC<Props> = ({ className, children }) => {
  const handleClick = (event: { stopPropagation: () => void }) => {
    // Handle menu item click here
    event.stopPropagation();
  };

  return (
    <MenuItem onClick={handleClick} disableRipple className={className}>
      {children}
    </MenuItem>
  );
};

Item.defaultProps = {
  className: "",
};

export default Item;
