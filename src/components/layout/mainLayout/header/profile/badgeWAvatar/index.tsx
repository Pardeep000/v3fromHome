import React from "react";
import Badge from "@mui/material/Badge";
import Avatar from "src/components/shared/atoms/avatar";

interface IProps {
  picture: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  login: boolean;
}

const BadgeWAvatar: React.FC<IProps> = ({ picture, onClick, login }) => {
  return (
    <Badge
      color={login ? "secondary" : "error"}
      badgeContent=" "
      variant="dot"
      overlap="circular"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <Avatar src={picture} onClick={onClick} />
    </Badge>
  );
};

export default BadgeWAvatar;
